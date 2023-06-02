import { useState } from 'react';
import {
    View,
    Alert,
    ActivityIndicator
  } from 'react-native';
import screenNames from '../../constants/screenNames';
import { createExpense } from '../../service/expenseService';
import createLoader from '../../loader/loader';

import GenericTextInput from '../ui/GenericTextInput';
import GenericButton from '../ui/GenericButton';
import Expense from '../../domain/Expense';
import Authentication from '../auth/Authentication';
import { PaperProvider } from 'react-native-paper';
import GenericMenu from '../ui/GenericMenu';
import MonthlyReminderComponent from '../subscreens/reminders/MonthlyReminder';
import { Reminder } from '../../domain/reminder/Reminder';
import MonthlyReminder from '../../domain/reminder/MonthlyReminder';

const CreateExpense = ({ navigation }: any) => {
    const [expense, setExpense]: [Expense, Function] = useState(new Expense());
    const [isLoading, setIsLoading]: [Boolean, Function] = useState(false);
    const [showLoader, hideLoader]: [Function, Function] = createLoader(setIsLoading);

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

    const submit = async () => {
        showLoader();

        console.log("expense: ", expense);

        const createdExpense = createExpense(expense);

        setExpense(createdExpense);

        hideLoader();
        Alert.alert("Expense created successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
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
                />

                <MonthlyReminderComponent
                    onChange={onChangeReminder}
                />

                <GenericButton
                    title="Submit"
                    onPress={submit}
                    color="#145614"
                    icon="check"
                />
            </View>
        </PaperProvider>
    );
};

export default CreateExpense;