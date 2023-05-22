import { DataTable, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import createLoader from "../../loader/loader";
const service = require("../../service/expenseService");
import moment from "moment";
import screenNames from "../../constants/screenNames";

const ReceiptDetail = ({route, navigation}: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);
    const [receipt, setReceipt] = useState({
        expense: {}
    });

    useEffect(() => {
        const load = async () => {
            showLoader();

            const data = await service.getReceipt(route.params.id);
            setReceipt(data);

            hideLoader();
        };
        load();
    }, []);

    return (
        <>
            <DataTable>
                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#A8B5AE"}} onPress={() => navigation.navigate(screenNames.EXPENSE_DETAIL, {id: receipt.expense.id})}>
                    <DataTable.Cell>Title</DataTable.Cell>
                    <DataTable.Cell>{receipt?.expense.title}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Recipient</DataTable.Cell>
                    <DataTable.Cell>{receipt?.expense.recipientName}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#A8B5AE"}}>
                    <DataTable.Cell>Relation with Recipient</DataTable.Cell>
                    <DataTable.Cell>{receipt?.expense.relationWithRecipient}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Amount Paid</DataTable.Cell>
                    <DataTable.Cell>{receipt?.amountPaid}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: "#A8B5AE"}}>
                    <DataTable.Cell>Payment Date</DataTable.Cell>
                    <DataTable.Cell>{receipt.paidOn == null? "": moment(receipt?.paidOn).format("ddd DD-MM-yyyy")}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Comments</DataTable.Cell>
                    <DataTable.Cell>{receipt.comments == null? "": receipt.comments}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    );
};

export default ReceiptDetail;