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

import GenericTextInput from '../ui/GenericTextInput';
import GenericButton from '../ui/GenericButton';
import Expense from '../../domain/Expense';

const CreateExpense = ({ navigation }: any) => {
    const [expense, setExpense]: [any, any] = useState(new Expense());
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

            <GenericButton
                title="Submit"
                onPress={submit}
                color="#774BE6"
                icon="check"
            />
        </>
    );
};

export default CreateExpense;