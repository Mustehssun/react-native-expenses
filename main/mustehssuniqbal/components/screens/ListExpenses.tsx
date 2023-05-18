import { FlatList, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import screenNames from "../../constants/screenNames";
import expenses from "../../domain/singletonList";
import { getExpenses } from "../../service/expenseService";

const ListExpenses = ({navigation}: any) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const load = async () => {
            console.log("fetched expenses:");
            
            const data = (await getExpenses())?.data;

            setExpenses(data);
        }
        load();
    }, []);

    return (
        <>
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