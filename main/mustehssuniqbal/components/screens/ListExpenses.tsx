import { FlatList, Text, Button, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import screenNames from "../../constants/screenNames";
import { getExpenses } from "../../service/expenseService";
import createLoader from "../../loader/loader";

const ListExpenses = ({navigation}: any) => {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        const load = async () => {
            showLoader();

            console.log("fetched expenses:");
            
            const data = (await getExpenses())?.data;

            setExpenses(data);
            hideLoader();
        }
        load();
    }, []);

    return (
        <>
            <ActivityIndicator size="large" animating={isLoading} />
            <FlatList
                data={expenses}
                renderItem={({item}) => (
                    <Button 
                    title={item.title} 
                    onPress={() => navigation.navigate(screenNames.EXPENSE_DETAIL, { id: item.id })} 
                    />
                )}
            />
        </>
    );
};

export default ListExpenses;