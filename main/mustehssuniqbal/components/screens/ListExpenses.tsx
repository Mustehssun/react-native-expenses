import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import screenNames from "../../constants/screenNames";
import { getExpenses } from "../../service/expenseService";
import createLoader from "../../loader/loader";
import GenericList from "../ui/GenericList";
import Authentication from "../auth/Authentication";
import { listShades } from "../../uniformTheme/uniformTheme";
import Expense from "../../domain/Expense";

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

    const renderDescription = (expense: Expense) => {
        console.log("expense: ", expense);

        if(expense.reminder.isDaily) {
            return "Daily Expense";
        }
        else if(expense.reminder.isWeekly) {
            return "Weekly Expense";
        }
        else if(expense.reminder.isMonthly) {
            return "Monthly Expense";
        }
        else if(expense.reminder.isYearly == true) {
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