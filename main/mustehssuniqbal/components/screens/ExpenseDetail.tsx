import { useEffect, useState } from "react";
import { Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import screenNames from "../../constants/screenNames";
import { deleteExpense, getExpense, updateExpense } from "../../service/expenseService";
import createLoader from "../../loader/loader";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
const service = require("../../service/expenseService");

const ExpenseDetail = ({ route, navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        showLoader();
        const load = async () => {
            setExpense((await getExpense(route.params.id))?.data);

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
        <>
            <ActivityIndicator animating={isLoading} size="large" />

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
                title="Submit"
                onPress={submit}
                color="#774BE6"
                icon="check"
            />
            <GenericButton
                title="Delete"
                onPress={deleteExpense}
                color="#E02940"
                icon="delete"
            />

            <GenericButton
                title="Show Receipts"
                onPress={() => navigation.navigate(screenNames.LIST_RECEIPTS, { expenseId: expense.id})}
                color="#194D33"
                icon="currency-eur"
            />

            <GenericButton
                title="Pay"
                onPress={() => navigation.navigate(screenNames.PAY_EXPENSE, { id: expense.id})}
                color="#32D857"
                icon="currency-eur"
            />
        </>
    );
};

export default ExpenseDetail;