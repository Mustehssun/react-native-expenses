import { useEffect, useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import createLoader from "../../loader/loader";
import { Alert } from "react-native";
import screenNames from "../../constants/screenNames";

const service = require("../../service/expenseService");

const PayExpense = ({route, navigation}: any) => {
    const [payment, setPayment] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

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

    useEffect(() => {
        hideLoader();
    }, []);

    return (
        <>
            <GenericTextInput 
                label="Amount Paid"
                onChangeText={(amountPaid: string) => setPayment({...payment, amountPaid})}
                value={payment?.amountPaid}
            />

            <GenericButton
                title="Confirm payment"
                onPress={pay}
                color="green"
            />
        </>
    );
};

export default PayExpense;