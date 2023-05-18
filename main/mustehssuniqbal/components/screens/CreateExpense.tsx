import { useState } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    Alert,
    ActivityIndicator
  } from 'react-native';
import screenNames from '../../constants/screenNames';
import { createExpense } from '../../service/expenseService';
import createLoader from '../../loader/loader';

const CreateExpense = ({ navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState({});
    const [isLoading, setIsLoading]: [any, any] = useState(false);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    const submit = async () => {
        showLoader();

        const createdExpense = createExpense(expense);

        setExpense(createdExpense);

        hideLoader();
        Alert.alert("Expense created successfully!");

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
                value={expense?.amount}
            />
            <Button
                title="Submit"
                onPress={submit}
            />
        </>
    );
};

export default CreateExpense;