import { Text } from "react-native-paper";
import GenericCard from "../ui/GenericCard";
import { useEffect, useState } from "react";
import createLoader from "../../loader/loader";
const service = require("../../service/expenseService");
import moment from "moment";

const ReceiptDetail = ({route}: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);
    const [receipt, setReceipt] = useState({
        expense: {}
    });

    useEffect(() => {
        const load = async () => {
            showLoader();

            const data = (await service.getReceipt(route.params.id)).data;

            console.log("Receipt Detail");
            console.log(data);

            setReceipt(data);

            hideLoader();
        };
        load();
    }, []);

    return (
        <>
            <Text>Title: {receipt?.expense.title}</Text>
            <Text>Paid to: {receipt?.expense.recipientName}</Text>
            <Text>Relation with recipient: {receipt?.expense.relationWithRecipient}</Text>
            <Text>Amount paid: {receipt?.amountPaid}</Text>
            <Text>Paid on: {receipt.paidOn == null? "": moment(receipt?.paidOn).format("ddd DD-MM-yyyy")}</Text>
        </>
    );
};

export default ReceiptDetail;