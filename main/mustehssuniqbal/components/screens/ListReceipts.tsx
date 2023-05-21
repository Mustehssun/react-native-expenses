import { FlatList } from "react-native";
import GenericList from "../ui/GenericList";
import { useEffect, useState } from "react";
import createLoader from "../../loader/loader";
import moment from "moment";
import screenNames from "../../constants/screenNames";
import { defaultNullObject } from "../../utils/objectUtils";
import { Text } from "react-native-paper";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
const service = require("../../service/expenseService");

const ListReceipts = ({navigation, route}: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);
    const [receipts, setReceipts] = useState([]);

    const expenseId = defaultNullObject(() => route.params.expenseId);

    useEffect(() => {
        const load = async () => {
            showLoader();

            let receipts = [];
            if(expenseId != null) {
                receipts = await service.getReceiptsOfExpense(expenseId);
            }
            else {
                receipts = await service.getReceipts();
            }
            setReceipts(receipts);

            hideLoader();
        };
        load();
    }, []);

    const getEmptyReceiptsMessage = () => (
        <>
            <Text>{"\n"}</Text>
            <Text>{"\t"}There are no recorded receipts for this expense.</Text>
            <Text>{"\n"}</Text>
            <GenericButton 
                title="Create Receipt Here"
                onPress={() => navigation.navigate(screenNames.PAY_EXPENSE, { expenseId })}
                color="#32D857"
                icon="currency-eur"
            />
        </>
    );

    return (
        <>
            {receipts.length == 0? 
                getEmptyReceiptsMessage():  
                <GenericList 
                data={receipts}
                getTitle={(item: any) => item.expense.title}
                getIcon={(item: any) => "receipt"}
                getDescription={(item: any) => `Amount paid: ${item.amountPaid} ${item.paidOn == null? "": " - " + moment(item.paidOn).format("ddd DD-MM-yyyy")}`}
                onItemPress={(item: any) => navigation.navigate(screenNames.RECEIPT_DETAIL, {id: item.id})}
            />
            }
        </>
    );
};

export default ListReceipts;