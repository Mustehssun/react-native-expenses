/**
 * Expense Bookkeeping
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreateExpense from './main/mustehssuniqbal/components/screens/CreateExpense';
import ListExpenses from './main/mustehssuniqbal/components/screens/ListExpenses';
import ExpenseDetail from './main/mustehssuniqbal/components/screens/ExpenseDetail';
import HomeScreen from './main/mustehssuniqbal/components/screens/HomeScreen';
import {View} from "react-native";

import screenNames from './main/mustehssuniqbal/constants/screenNames';
import PayExpense from './main/mustehssuniqbal/components/screens/PayExpense';
import ListReceipts from './main/mustehssuniqbal/components/screens/ListReceipts';
import ReceiptDetail from './main/mustehssuniqbal/components/screens/ReceiptDetail';
import Signup from './main/mustehssuniqbal/components/screens/Signup';
import Login from './main/mustehssuniqbal/components/screens/Login';
import Logout from './main/mustehssuniqbal/components/screens/Logout';
import Profile from './main/mustehssuniqbal/components/screens/Profile';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const actionBarStyle = {
    headerStyle: {
      backgroundColor: '#6750a4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerTitleAlign: "center"
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.HOME_SCREEN}>
        <Stack.Screen 
          name={screenNames.HOME_SCREEN}
          component={HomeScreen}
          options={{
            title: "Expense Bookkeeping",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.CREATE_EXPENSE}
          component={CreateExpense}
          options={{
            title: "Create Expense",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.LIST_EXPENSES}
          component={ListExpenses}
          options={{
            title: "Expenses",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.EXPENSE_DETAIL}
          component={ExpenseDetail}
          options={{
            title: "Expense Detail",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.PAY_EXPENSE}
          component={PayExpense}
          options={{
            title: "Pay Expense",
            ...actionBarStyle
        }}
        />
        <Stack.Screen
          name={screenNames.LIST_RECEIPTS}
          component={ListReceipts}
          options={{
            title: "Receipts",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.RECEIPT_DETAIL}
          component={ReceiptDetail}
          options={{
            title: "Receipt Detail",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.SIGNUP}
          component={Signup}
          options={{
            title: "Signup",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.LOGIN}
          component={Login}
          options={{
            title: "Login",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.LOGOUT}
          component={Logout}
          options={{
            title: "Logout",
            ...actionBarStyle
          }}
        />
        <Stack.Screen
          name={screenNames.PROFILE}
          component={Profile}
          options={{
            title: "User Profile",
            ...actionBarStyle
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
