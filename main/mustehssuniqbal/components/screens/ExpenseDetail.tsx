import { useEffect, useState } from "react";
import { Text, Alert, ActivityIndicator, View } from "react-native";
import screenNames from "../../constants/screenNames";
import { getExpense, updateExpense } from "../../service/expenseService";
import createLoader from "../../loader/loader";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import Expense from "../../domain/Expense";
import Authentication from "../auth/Authentication";
import GenericMenu from "../ui/GenericMenu";
import { PaperProvider } from "react-native-paper";
import { Reminder } from "../../domain/reminder/Reminder";
import MonthlyReminderComponent from "../subscreens/reminders/MonthlyReminder";
import MonthlyReminder from "../../domain/reminder/MonthlyReminder";

const service = require("../../service/expenseService");

const ExpenseDetail = ({ route, navigation }: any) => {
    const [expense, setExpense]: [Expense, Function] = useState(new Expense());
    const [reminderDefaultValue, setReminderDefaultValue]: [String, Function] = useState("");
    const [isLoading, setIsLoading]: [Boolean, Function] = useState(true);
    const [showLoader, hideLoader]: [Function, Function] = createLoader(setIsLoading);

    const getReminderDefaultValue = (reminder: Reminder) => {
        console.log("reminder: ", reminder);

        if(reminder.isDaily == true) {
            return "Daily";
        }
        if(reminder.isWeekly == true) {
            return "Weekly";
        }
        if(reminder.isMonthly == true) {
            return "Monthly";
        }
        if(reminder.isYearly == true) {
            return "Yearly";
        }
        return "One Time";
    };

    const renderReminder = async () => {
        const tempExpenseForReminder = await getExpense(route.params.id);
        setReminderDefaultValue(getReminderDefaultValue(tempExpenseForReminder.reminder));
    };

    useEffect(() => {
        const load = async () => {
            showLoader();

            setExpense(await getExpense(route.params.id));

            console.log("expense: ", await getExpense(route.params.id));

            renderReminder();

            hideLoader();
        };
        load();
    }, []);

    const submit = async () => {
        showLoader();

        const updatedExpense = await updateExpense(route.params.id, expense);
        setExpense(updatedExpense);

        hideLoader();

        Alert.alert("Expense edited successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    const deleteExpense = async () => {
        showLoader();

        await service.deleteExpense(route.params.id);

        hideLoader();

        Alert.alert("Expense deleted successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    const onReminderTypeSelect = (selectedItem: any) => {
        if(selectedItem.value == "Daily") {
            setExpense({...expense, reminder: {...expense.reminder, isDaily: true, isWeekly: false, isMonthly: false, isYearly: false}});
        }
        else if(selectedItem.value == "Weekly") {
            setExpense({...expense, reminder: {...expense.reminder, isDaily: false, isWeekly: true, isMonthly: false, isYearly: false}});
        }
        else if(selectedItem.value == "Monthly") {
            setExpense({...expense, reminder: {...expense.reminder, isDaily: false, isWeekly: false, isMonthly: true, isYearly: false}});
        }
        else if(selectedItem.value == "Yearly") {
            setExpense({...expense, reminder: {...expense.reminder, isDaily: false, isWeekly: false, isMonthly: false, isYearly: true}});
        }
    };

    const onChangeReminder = (reminder: MonthlyReminder) => {
        expense.reminder.monthlyDate = reminder.monthlyDate;
        setExpense(expense);
    };

    return (
        <PaperProvider>
            <View style={{borderColor: "solid", backgroundColor: "#ddd0fa"}}>
                <Authentication reroute={() => navigation.navigate(screenNames.HOME_SCREEN)} />
                <ActivityIndicator size="large" animating={isLoading} />

                <GenericTextInput
                    label='Title'
                    onChangeText={(title: any) => setExpense({...expense, title})}
                    value={expense?.title}
                />

                <GenericTextInput
                    label='Recipient Name'
                    onChangeText={(recipientName: any) => setExpense({...expense, recipientName})}
                    value={expense?.recipientName}
                />

                <GenericTextInput
                    label='Relation with Recipient'
                    onChangeText={(relationWithRecipient: any) => setExpense({...expense, relationWithRecipient})}
                    value={expense?.relationWithRecipient}
                />

                <GenericTextInput
                    label='Amount'
                    onChangeText={(amount: any) => setExpense({...expense, amount})}
                    value={expense?.amount + ""}
                />

                <GenericMenu
                        title="Select Type of Reminder"
                        items={[
                            { value: "One Time" },
                            { value: "Daily" },
                            { value: "Weekly" },
                            { value: "Monthly" },
                            { value: "Yearly" }
                        ]}
                        onSelect={onReminderTypeSelect}
                        defaultValue={reminderDefaultValue}
                    />

                <MonthlyReminderComponent
                    onChange={onChangeReminder}
                    defaultMonthlyReminder={expense.reminder}
                />

                <Text>{"\n"}</Text>

                <GenericButton
                    title="Update"
                    onPress={submit}
                    color="#3b6633"
                    icon="check"
                />
                <GenericButton
                    title="Delete"
                    onPress={deleteExpense}
                    color="#21005d"
                    icon="delete"
                />
                <GenericButton
                    title="Show Receipts"
                    onPress={() => navigation.navigate(screenNames.LIST_RECEIPTS, { expenseId: expense.id})}
                    color="#2e512e"
                    icon="receipt"
                />
                <GenericButton
                    title="Record payment"
                    onPress={() => navigation.navigate(screenNames.PAY_EXPENSE, { expenseId: expense.id})}
                    color="#4105ad"
                    icon="currency-eur"
                />
            </View>
        </PaperProvider>
    );
};

export default ExpenseDetail;