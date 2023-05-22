import { useEffect, useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import createLoader from "../../loader/loader";
import { Alert } from "react-native";
import screenNames from "../../constants/screenNames";
import { getExpense } from "../../service/expenseService";
import { DataTable, Text, TextInput } from "react-native-paper";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from "moment";

const service = require("../../service/expenseService");

const PayExpense = ({route, navigation}: any) => {
    const [payment, setPayment] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);
    const [expense, setExpense] = useState({});

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
        <>
            <DataTable>
                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#A8B5AE"}}>
                    <DataTable.Cell>Title</DataTable.Cell>
                    <DataTable.Cell>{expense.title}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Recipient</DataTable.Cell>
                    <DataTable.Cell>{expense.recipientName}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
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
                color="green"
                icon="check"
            />
        </>
    );
};

export default PayExpense;