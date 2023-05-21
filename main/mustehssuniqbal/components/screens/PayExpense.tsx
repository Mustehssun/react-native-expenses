import { useEffect, useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import createLoader from "../../loader/loader";
import { Alert } from "react-native";
import screenNames from "../../constants/screenNames";
import { getExpense } from "../../service/expenseService";
import { DataTable } from "react-native-paper";

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

        if(payment.paidOn == null) {
            payment.paidOn = new Date();
        }
        const receipt = await service.pay(route.params.expenseId, payment?.amountPaid, payment?.paidOn);
        
        hideLoader();

        Alert.alert("Payment recorded successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
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