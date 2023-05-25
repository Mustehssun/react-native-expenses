import Expense from "./Expense";

export default class Receipt {
    public expense: Expense = new Expense();
    public amountPaid: number = 0;
    public paidOn: Date = new Date();
    public comments: string = "";
};