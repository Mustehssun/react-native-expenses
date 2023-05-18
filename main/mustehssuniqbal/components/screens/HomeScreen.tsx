import GenericCard from "../ui/GenericCard";
import screenNames from "../../constants/screenNames";
import React from "react";
import { ScrollView } from "react-native";

const HomeScreen = ({navigation}: any) => {
    return (
        <ScrollView>
            <GenericCard
                title={"Create Expense"}
                onClick={() => navigation.navigate(screenNames.CREATE_EXPENSE)}
                captionDescription="Create your expense here"
            />

            <GenericCard
                title={"List Expenses"}
                onClick={() => navigation.navigate(screenNames.LIST_EXPENSES)}
            />
        </ScrollView>
    );
};

export default HomeScreen;