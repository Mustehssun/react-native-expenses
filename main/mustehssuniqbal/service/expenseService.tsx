import Expense from "../domain/Expense";
import Receipt from "../domain/Receipt";
import { getRequest, postRequest } from "./rest";

const resourceUrl = "/expenses";

const getExpenses = (): Promise<[Expense]> => getRequest(`${resourceUrl}/`);

const getExpense = (id: string): Promise<Expense> => getRequest(`${resourceUrl}/${id}`);

const createExpense = (expense: Expense): Promise<Expense> => postRequest(`${resourceUrl}/`, expense);

const updateExpense = (id: number, expense: Expense): Promise<Expense> => postRequest(`${resourceUrl}/${id}`, expense);

const deleteExpense = (id: string): Promise<void> => postRequest(`${resourceUrl}/${id}/delete`, {});

const pay = (id: string, payment: Receipt): Promise<Receipt> => postRequest(`${resourceUrl}/${id}/pay`, payment);

const getReceipts = (): Promise<[Receipt]> => getRequest(`${resourceUrl}/receipts/`);

const getReceiptsOfExpense = (id: string): Promise<[Receipt]> => getRequest(`${resourceUrl}/${id}/receipts/`);

const getReceipt = (id: string): Promise<Receipt> => getRequest(`${resourceUrl}/receipts/${id}`);

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