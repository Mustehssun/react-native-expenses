import MonthlyExpense from "../domain/expense";
import { getRequest, postRequest } from "./rest";

const getExpenses = () => {
    return getRequest("/expenses/");
}

const getExpense = (id: string) => {
    return getRequest(`/expenses/${id}`);
};

const createExpense = (expense: MonthlyExpense) => {
    console.log("expense:");
    console.log(expense);

    return postRequest("/expenses/", expense);
};

const updateExpense = (id: number, expense: MonthlyExpense) => {
    return postRequest(`/expenses/${id}`, expense);
};

export {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense
};