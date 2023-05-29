import { useEffect, useState } from "react";
import { Text, Alert, ActivityIndicator, View } from "react-native";
import screenNames from "../../constants/screenNames";
import { getExpense, updateExpense } from "../../service/expenseService";
import createLoader from "../../loader/loader";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import Expense from "../../domain/Expense";
import Authentication from "../auth/Authentication";
const service = require("../../service/expenseService");

const ExpenseDetail = ({ route, navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState(new Expense());
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        showLoader();
        const load = async () => {
            setExpense(await getExpense(route.params.id));

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

    return (
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
    );
};

export default ExpenseDetail;