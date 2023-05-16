import { FlatList, Text, Button } from "react-native";
import screenNames from "../../constants/screenNames";
import expenses from "../../domain/singletonList";

const ListExpenses = ({navigation}: any) => {
    return (
        <>
            <FlatList
                data={expenses.get()}
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