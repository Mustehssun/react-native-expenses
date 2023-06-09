import screenNames from "../../constants/screenNames";
import React from "react";
import { ScrollView } from "react-native";
import imagesBaseUrl from "../../constants/images";
import GenericList from "../ui/GenericList";
import { listShades } from "../../uniformTheme/uniformTheme";

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
        },
        { 
            title: "Profile", 
            description: "View User Profile", 
            navigationScreen: screenNames.PROFILE,
            icon: "account"
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
        },
        { 
            title: "Logout", 
            description: "Logout of your account", 
            navigationScreen: screenNames.LOGOUT,
            icon: "logout"
        }];

    return (
        <ScrollView style={{borderColor: "solid", backgroundColor: "#ddd0fa"}}>
            <GenericList
                data={list}
                getTitle={(item: any) => item.title}
                getDescription={(item: any) => item.description}
                getIcon={(item: any) => item.icon}
                onItemPress={(item: any) => navigation.navigate(item.navigationScreen)}
                evenItemColor={listShades.evenItem}
                oddItemColor={listShades.oddItem}
            />
        </ScrollView>
    );
};

export default HomeScreen;