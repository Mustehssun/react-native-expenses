import { ActivityIndicator, DataTable } from "react-native-paper";
import { useEffect, useState } from "react";
import createLoader from "../../loader/loader";
import moment from "moment";
import screenNames from "../../constants/screenNames";
import Receipt from "../../domain/Receipt";
import Authentication from "../auth/Authentication";
import { View } from "react-native";
import { backgroundColor, gridShades } from "../../uniformTheme/uniformTheme";

const service = require("../../service/expenseService");

const ReceiptDetail = ({route, navigation}: any) => {
    const [isLoading, setIsLoading]: [Boolean, Function] = useState(true);
    const [showLoader, hideLoader]: [Function, Function] = createLoader(setIsLoading);
    const [receipt, setReceipt]: [Receipt, Function] = useState(new Receipt());

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
        <View style={{borderColor: "solid", backgroundColor: backgroundColor.primaryShades.lighter}}>
            <Authentication reroute={() => navigation.navigate(screenNames.HOME_SCREEN)} />
            <ActivityIndicator size="large" animating={isLoading} />

            <DataTable>
                <DataTable.Row style={{borderColor: "solid", backgroundColor: gridShades.evenRow}} onPress={() => navigation.navigate(screenNames.EXPENSE_DETAIL, {id: receipt.expense.id})}>
                    <DataTable.Cell>Title</DataTable.Cell>
                    <DataTable.Cell>{receipt?.expense.title}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: gridShades.oddRow}}>
                    <DataTable.Cell>Recipient</DataTable.Cell>
                    <DataTable.Cell>{receipt?.expense.recipientName}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: gridShades.evenRow}}>
                    <DataTable.Cell>Relation with Recipient</DataTable.Cell>
                    <DataTable.Cell>{receipt?.expense.relationWithRecipient}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: gridShades.oddRow}}>
                    <DataTable.Cell>Amount Paid</DataTable.Cell>
                    <DataTable.Cell>{receipt?.amountPaid}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: gridShades.evenRow}}>
                    <DataTable.Cell>Payment Date</DataTable.Cell>
                    <DataTable.Cell>{receipt.paidOn == null? "": moment(receipt?.paidOn).format("ddd DD-MM-yyyy")}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={{borderColor: "solid", backgroundColor: gridShades.oddRow}}>
                    <DataTable.Cell>Comments</DataTable.Cell>
                    <DataTable.Cell>{receipt.comments == null? "": receipt.comments}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default ReceiptDetail;