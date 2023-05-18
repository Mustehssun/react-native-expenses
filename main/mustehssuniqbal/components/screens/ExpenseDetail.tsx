import { useEffect, useState } from "react";
import { Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import screenNames from "../../constants/screenNames";
import { deleteExpense, getExpense, updateExpense } from "../../service/expenseService";
import createLoader from "../../loader/loader";
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
            <Text>Title:</Text>
            <TextInput
                placeholder='Title'
                onChangeText={title => setExpense({...expense, title})}
                value={expense?.title}
            />

            <Text>Recipient Name:</Text>
            <TextInput
                placeholder='Recipient Name'
                onChangeText={recipientName => setExpense({...expense, recipientName})}
                value={expense?.recipientName}
            />

            <Text>Relation with Recipient:</Text>
            <TextInput
                placeholder='Relation with Recipient'
                onChangeText={relationWithRecipient => setExpense({...expense, relationWithRecipient})}
                value={expense?.relationWithRecipient}
            />

            <Text>Amount:</Text>
            <TextInput
                placeholder='Amount'
                onChangeText={amount => setExpense({...expense, amount})}
                value={expense?.amount + ""}
            />
            <Button
                title="Submit"
                onPress={submit}
            />
            <Button
                title="Delete"
                onPress={deleteExpense}
                color="red"
            />
        </>
    );
};

export default ExpenseDetail;