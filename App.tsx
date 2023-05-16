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

import screenNames from './main/mustehssuniqbal/constants/screenNames';

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
          options={{title: "List Expenses"}}
        />
        <Stack.Screen
          name={screenNames.EXPENSE_DETAIL}
          component={ExpenseDetail}
          options={{title: "Expense Detail"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
