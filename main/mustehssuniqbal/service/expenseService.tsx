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

const deleteExpense = (id: string) => {
    return postRequest(`/expenses/${id}/delete`, {});
};

const pay = (id: string, amountPaid: number, paidOn: Date) => {
    return postRequest(`/expenses/${id}/pay`, {amountPaid, paidOn});
};

const getReceipts = () => {
    return getRequest("/expenses/receipts/");
};

const getReceiptsOfExpense = (id: string) => {
    return getRequest(`/expenses/${id}/receipts/`);
}; 

const getReceipt = (id: string) => {
    return getRequest(`/expenses/receipts/${id}`);
};

export {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
    pay,
    getReceipts,
    getReceiptsOfExpense,
    getReceipt
};