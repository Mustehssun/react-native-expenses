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

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.HOME_SCREEN}>
        <Stack.Screen 
          name={screenNames.HOME_SCREEN}
          component={HomeScreen}
          options={{
            title: "Expense Bookkeeping",
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name={screenNames.CREATE_EXPENSE}
          component={CreateExpense}
          options={{title: "Create Expense"}}
        />
        <Stack.Screen
          name={screenNames.LIST_EXPENSES}
          component={ListExpenses}
          options={{title: "Expenses"}}
        />
        <Stack.Screen
          name={screenNames.EXPENSE_DETAIL}
          component={ExpenseDetail}
          options={{title: "Expense Detail"}}
        />
        <Stack.Screen
          name={screenNames.PAY_EXPENSE}
          component={PayExpense}
          options={{title: "Pay Expense"}}
        />
        <Stack.Screen
          name={screenNames.LIST_RECEIPTS}
          component={ListReceipts}
          options={{title: "Receipts"}}
        />
        <Stack.Screen
          name={screenNames.RECEIPT_DETAIL}
          component={ReceiptDetail}
          options={{title: "Receipt Detail"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
