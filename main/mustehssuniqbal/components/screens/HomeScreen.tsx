import Card from "../ui/Card";
import screenNames from "../../constants/screenNames";

const HomeScreen = ({navigation}: any) => {
    return (
        <>
            <Card
                title={"Create Expense"}
                onClick={() => navigation.navigate(screenNames.CREATE_EXPENSE)}
            />

            <Card
                title={"List Expenses"}
                onClick={() => navigation.navigate(screenNames.LIST_EXPENSES)}
            />
        </>
    );
};

export default HomeScreen;