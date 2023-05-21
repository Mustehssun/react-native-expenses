import { useEffect, useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import createLoader from "../../loader/loader";
import { Alert } from "react-native";
import screenNames from "../../constants/screenNames";
import { getExpense } from "../../service/expenseService";

const service = require("../../service/expenseService");

const PayExpense = ({route, navigation}: any) => {
    const [payment, setPayment] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        const load = async () => {
            showLoader();

            const expense = await getExpense(route.params.id);

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
        const receipt = await service.pay(route.params.id, payment?.amountPaid, payment?.paidOn);
        
        hideLoader();

        Alert.alert("Payment recorded successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    return (
        <>
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