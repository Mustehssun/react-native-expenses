import GenericCard from "../ui/GenericCard";
import screenNames from "../../constants/screenNames";
import React from "react";
import { ScrollView } from "react-native";
import imagesBaseUrl from "../../constants/images";
import GenericList from "../ui/GenericList";

const HomeScreen = ({navigation}: any) => {
    const list = [{
             title: "Create Expense", 
             description: "File your expense here", 
             imageUrl: imagesBaseUrl + "invoice.jpeg", 
             navigationScreen: screenNames.CREATE_EXPENSE,
             icon: "plus"
            },
        { 
            title: "Expenses", 
            description: "View your expenses here", 
            navigationScreen: screenNames.LIST_EXPENSES,
            icon: "menu"
        },
        { 
            title: "Receipts", 
            description: "View your receipts here", 
            navigationScreen: screenNames.LIST_RECEIPTS,
            icon: "receipt"
        }];

    return (
        <ScrollView>
            <GenericList
                data={list}
                getTitle={(item: any) => item.title}
                getDescription={(item: any) => item.description}
                getIcon={(item: any) => item.icon}
                onItemPress={(item: any) => navigation.navigate(item.navigationScreen)}
            />
        </ScrollView>
    );
};

export default HomeScreen;