import { useEffect, useState } from "react";
import { Text, TextInput, Button, Alert } from "react-native";
import screenNames from "../../constants/screenNames";
import expenses from "../../domain/singletonList";

const ExpenseDetail = ({ route, navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState({});

    useEffect(() => setExpense(expenses.get().filter(expense => expense.id == route.params.id)[0]), []);

    const submit = () => {
        console.log(expense);
        Alert.alert("Expense edited successfully!");

        const index = expenses.get().findIndex(elem => elem.id == expense.id);
        expenses.set(index, expense);

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    return (
        <>
            <Text>Title:</Text>
            <TextInput
                placeholder='Title'
                onChangeText={title => setExpense({...expense, title})}
                value={expense.title}
            />

            <Text>Recipient Name:</Text>
            <TextInput
                placeholder='Recipient Name'
                onChangeText={recipientName => setExpense({...expense, recipientName})}
                value={expense.recipientName}
            />

            <Text>Relation with Recipient:</Text>
            <TextInput
                placeholder='Relation with Recipient'
                onChangeText={relationWithRecipient => setExpense({...expense, relationWithRecipient})}
                value={expense.relationWithRecipient}
            />

            <Text>Amount:</Text>
            <TextInput
                placeholder='Amount'
                onChangeText={amount => setExpense({...expense, amount})}
                value={expense.amount + ""}
            />
            <Button
                title="Submit"
                onPress={submit}
            />
        </>
    );
};

export default ExpenseDetail;