import screenNames from "../../constants/screenNames";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import imagesBaseUrl from "../../constants/images";
import GenericList from "../ui/GenericList";
import { Text } from "react-native-paper";
import { storage } from "../../polymorphicDispatch/storage";
import GenericButton from "../ui/GenericButton";
import GenericTextInput from "../ui/GenericTextInput";

const HomeScreen = ({navigation}: any) => {
    let [user, setUser] = useState({});
    const [username, setUsername] = useState("");

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
        },
        { 
            title: "Signup", 
            description: "Create account", 
            navigationScreen: screenNames.SIGNUP,
            icon: "account"
        },
        { 
            title: "Login", 
            description: "Login to your account", 
            navigationScreen: screenNames.LOGIN,
            icon: "login"
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