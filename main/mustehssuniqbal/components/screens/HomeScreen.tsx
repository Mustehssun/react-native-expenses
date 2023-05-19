import GenericCard from "../ui/GenericCard";
import screenNames from "../../constants/screenNames";
import React from "react";
import { ScrollView } from "react-native";
import imagesBaseUrl from "../../constants/images";

const HomeScreen = ({navigation}: any) => {
    return (
        <ScrollView>
            <GenericCard
                title={"Create Expense"}
                onClick={() => navigation.navigate(screenNames.CREATE_EXPENSE)}
                captionDescription="File your expense here"
                imageUrl={imagesBaseUrl + "invoice.jpeg"} 
            />

            <GenericCard
                title={"Expenses"}
                onClick={() => navigation.navigate(screenNames.LIST_EXPENSES)}
                captionDescription="View your expenses here"
            />

            <GenericCard
                title={"Receipts"}
                onClick={() => navigation.navigate(screenNames.LIST_RECEIPTS)}
                captionDescription="View your receipts here"
            />
        </ScrollView>
    );
};

export default HomeScreen;