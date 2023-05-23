import { FlatList, Text, Button, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import screenNames from "../../constants/screenNames";
import { getExpenses } from "../../service/expenseService";
import createLoader from "../../loader/loader";
import GenericList from "../ui/GenericList";
import Authentication from "../auth/Authentication";

const ListExpenses = ({navigation}: any) => {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        const load = async () => {
            showLoader();
            const data = await getExpenses();

            setExpenses(data);
            hideLoader();
        }
        load();
    }, []);

    return (
        <>
            <Authentication reroute={() => navigation.navigate(screenNames.HOME_SCREEN)} />
            <ActivityIndicator size="large" animating={isLoading} />
            <GenericList
                data={expenses}
                getTitle={(item: any) => item.title}
                getDescription={(item: any) => "Type of expense (TODO)"}
                getIcon={(item: any) => "menu"}
                onItemPress={(item: any) => navigation.navigate(screenNames.EXPENSE_DETAIL, { id: item.id })}
            />
        </>
    );
};

export default ListExpenses;