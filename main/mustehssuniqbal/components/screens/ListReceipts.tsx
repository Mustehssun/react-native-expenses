import { FlatList } from "react-native";
import GenericList from "../ui/GenericList";
import { useEffect, useState } from "react";
import createLoader from "../../loader/loader";
import moment from "moment";
import screenNames from "../../constants/screenNames";
const service = require("../../service/expenseService");

const ListReceipts = ({navigation}: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        const load = async () => {
            showLoader();

            const receipts = (await service.getReceipts())?.data;
            setReceipts(receipts);

            hideLoader();
        };
        load();
    }, []);

    return (
        <>
            <GenericList 
                data={receipts}
                getTitle={(item: any) => item.expense.title}
                getIcon={(item: any) => "menu"}
                getDescription={(item: any) => `Amount paid: ${item.amountPaid} ${item.paidOn == null? "": " - " + moment(item.paidOn).format("ddd DD-MM-yyyy")}`}
                onItemPress={(item: any) => navigation.navigate(screenNames.RECEIPT_DETAIL, {id: item.id})}
            />
        </>
    );
};

export default ListReceipts;