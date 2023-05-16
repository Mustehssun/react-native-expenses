const expenses = (() => {
    const expenses = [
        { title: "Maintenance", amount: 2500, recipientName: "Asghar", relationWithRecipient: "Security Guard", id: 1 },
        { title: "Garbage man", amount: 500, recipientName: "Unknown", relationWithRecipient: "Labour", id: 2 },
        { title: "Food", amount: 40000, recipientName: "N/A", relationWithRecipient: "N/A", id: 3 },
        { title: "Transport", amount: 60000, recipientName: "N/A", relationWithRecipient: "N/A", id: 4 }
    ];

    return {
        get: () => expenses,
        add: (expense: any) => expenses.push(expense),
        set: (index: number, expense: any) => expenses[index] = expense
    };
})();

export default expenses;