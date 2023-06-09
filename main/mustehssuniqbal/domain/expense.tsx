import { Reminder } from "./reminder/Reminder";

export default class Expense {
    public id: number = 0;
    public title: string = "";
    public recipientName: string = "";
    public relationWithRecipient: string = "";
    public amount: number = 0;
    public nextDueDate: Date = new Date();
    public reminder: Reminder = new Reminder();
};