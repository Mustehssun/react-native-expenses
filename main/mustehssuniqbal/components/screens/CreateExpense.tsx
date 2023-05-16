import { useState } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    Alert
  } from 'react-native';
import screenNames from '../../constants/screenNames';
import expenses from '../../domain/singletonList';

const CreateExpense = ({ navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState({});

    const submit = () => {
        setExpense({...expense, id: expenses.get()[expenses.get().length-1].id+1});

        expenses.add(expense);

        console.log(expense);
        Alert.alert("Expense created successfully!");

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
            />
            <Button
                title="Submit"
                onPress={submit}
            />
        </>
    );
};

export default CreateExpense;