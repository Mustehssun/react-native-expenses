import { useEffect, useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import createLoader from "../../loader/loader";
import { Alert } from "react-native";
import screenNames from "../../constants/screenNames";
import { getExpense } from "../../service/expenseService";
import { ActivityIndicator, DataTable, Text, TextInput } from "react-native-paper";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from "moment";
import Receipt from "../../domain/Receipt";
import Authentication from "../auth/Authentication";
import { View } from "react-native";
import Expense from "../../domain/Expense";

const service = require("../../service/expenseService");

const PayExpense = ({route, navigation}: any) => {
    const [payment, setPayment]: [Receipt, Function] = useState(new Receipt());
    const [isLoading, setIsLoading]: [Boolean, Function] = useState(true);
    const [showLoader, hideLoader]: [Function, Function] = createLoader(setIsLoading);
    const [expense, setExpense]: [Expense, Function] = useState(new Expense());

    useEffect(() => {
        const load = async () => {
            showLoader();

            const expense = await getExpense(route.params.expenseId);
            setExpense(expense);

            console.log("Expense:");
            console.log(expense);

            hideLoader();

            setPayment({...payment, amountPaid: expense.amount+""});
        };

        load();
    }, []);

    const pay = async () => {
        showLoader();

        const receipt = await service.pay(route.params.expenseId, payment);
        
        hideLoader();

        Alert.alert("Payment recorded successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    const selectDate = () => {
        const date = DateTimePickerAndroid.open({
            value: new Date(),
            onChange: event => {payment.paidOn = new Date(event.nativeEvent.timestamp);setPayment({...payment, paidon: new Date(event.nativeEvent.timestamp)});}
        });
    };

    return (
        <View style={{borderColor: "solid", backgroundColor: "#ddd0fa"}}>
            <Authentication reroute={() => navigation.navigate(screenNames.HOME_SCREEN)} />
            <ActivityIndicator size="large" animating={isLoading} />

            <DataTable>
                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#cfbcff"}}>
                    <DataTable.Cell>Title</DataTable.Cell>
                    <DataTable.Cell>{expense.title}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#eaddff"}}>
                    <DataTable.Cell>Recipient</DataTable.Cell>
                    <DataTable.Cell>{expense.recipientName}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#cfbcff"}}>
                    <DataTable.Cell>Relation with Recipient</DataTable.Cell>
                    <DataTable.Cell>{expense.relationWithRecipient}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <GenericTextInput 
                label="Amount Paid"
                onChangeText={(amountPaid: string) => setPayment({...payment, amountPaid})}
                value={payment?.amountPaid}
            />

            <GenericTextInput
                label="Paid On"
                value={moment(payment.paidOn).format("ddd DD-MM-yyyy").toString()}
                onPressOut={() => selectDate()}
            />

            <GenericTextInput
                label="Comments"
                onChangeText={(comments: string) => setPayment({...payment, comments})}
                value={payment?.comments}
            />

            <Text>{"\n"}</Text>
            <GenericButton
                title="Confirm"
                onPress={pay}
                color="#145614"
                icon="check"
            />
        </View>
    );
};

export default PayExpense;