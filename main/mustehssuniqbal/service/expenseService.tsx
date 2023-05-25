import Expense from "../domain/Expense";
import Receipt from "../domain/Receipt";
import { getRequest, postRequest } from "./rest";

const getExpenses = (): Promise<[Expense]> => {
    return getRequest("/expenses/");
}

const getExpense = (id: string): Promise<Expense> => {
    return getRequest(`/expenses/${id}`);
};

const createExpense = (expense: Expense): Promise<Expense> => {
    return postRequest("/expenses/", expense);
};

const updateExpense = (id: number, expense: Expense): Promise<Expense> => {
    return postRequest(`/expenses/${id}`, expense);
};

const deleteExpense = (id: string): Promise<void> => {
    return postRequest(`/expenses/${id}/delete`, {});
};

const pay = (id: string, payment: Receipt): Promise<Receipt> => {
    return postRequest(`/expenses/${id}/pay`, payment);
};

const getReceipts = (): Promise<[Receipt]> => {
    return getRequest("/expenses/receipts/");
};

const getReceiptsOfExpense = (id: string): Promise<[Receipt]> => {
    return getRequest(`/expenses/${id}/receipts/`);
}; 

const getReceipt = (id: string): Promise<Receipt> => {
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