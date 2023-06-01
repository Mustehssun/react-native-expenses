import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import screenNames from "../../constants/screenNames";
import { getExpenses } from "../../service/expenseService";
import createLoader from "../../loader/loader";
import GenericList from "../ui/GenericList";
import Authentication from "../auth/Authentication";
import { listShades } from "../../uniformTheme/uniformTheme";

const ListExpenses = ({navigation}: any) => {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        const load = async () => {
            showLoader();
            const data: any = await getExpenses();

            setExpenses(data);
            hideLoader();
        }
        load();
    }, []);

    const renderDescription = (item: any) => {
        console.log("item: ", item);
        if(item.isDaily) {
            return "Daily Expense";
        }
        else if(item.isWeekly) {
            return "Weekly Expense";
        }
        else if(item.isMonthly) {
            return "Monthly Expense";
        }
        else if(item.isYearly) {
            return "Yearly Expense";
        }
        else {
            return "One-Time expense";
        }
    };

    return (
        <View style={{borderColor: "solid", backgroundColor: "#ddd0fa"}}>
            <Authentication reroute={() => navigation.navigate(screenNames.HOME_SCREEN)} />
            <ActivityIndicator size="large" animating={isLoading} />

            <GenericList
                data={expenses}
                getTitle={(item: any) => item.title}
                getDescription={renderDescription}
                getIcon={(item: any) => "menu"}
                onItemPress={(item: any) => navigation.navigate(screenNames.EXPENSE_DETAIL, { id: item.id })}
                evenItemColor={listShades.evenItem}
                oddItemColor={listShades.oddItem}
            />
        </View>
    );
};

export default ListExpenses;