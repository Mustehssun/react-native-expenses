import { useEffect, useState } from "react";
import { Text, TextInput, Button, Alert } from "react-native";
import screenNames from "../../constants/screenNames";
import expenses from "../../domain/singletonList";
import { getExpense, updateExpense } from "../../service/expenseService";

const ExpenseDetail = ({ route, navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState({});

    useEffect(() => {
        const load = async () => {
            setExpense((await getExpense(route.params.id))?.data);
        };
        load();
    }, []);

    const submit = async () => {
        const updatedExpense = await updateExpense(route.params.id, expense);
        setExpense(updateExpense);

        Alert.alert("Expense edited successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    return (
        <>
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
        </>
    );
};

export default ExpenseDetail;