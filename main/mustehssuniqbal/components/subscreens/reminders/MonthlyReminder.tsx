import { useState, useEffect } from "react";
import GenericTextInput from "../../ui/GenericTextInput";
import MonthlyReminder from "../../../domain/reminder/MonthlyReminder";

const MonthlyReminderComponent = ({
    onChange,
    defaultMonthlyReminder
}: any) => {
    const [reminder, setReminder]: [MonthlyReminder, Function] = useState(new MonthlyReminder());

    useEffect(() => {
        if(defaultMonthlyReminder != null) {
            setReminder(defaultMonthlyReminder);
        }
    }, []);

    return (
        <>
            <GenericTextInput
                label="Day of the Month"
                value={reminder?.monthlyDate + ""}
                onChangeText={(text: any) => {
                    setReminder({...reminder, monthlyDate: text}); 
                    
                    let tempReminder = new MonthlyReminder();
                    tempReminder.second = reminder.second;
                    tempReminder.minute = reminder.minute;
                    tempReminder.hour = reminder.hour;

                    const parsedDay = Number.parseInt(text);
                    tempReminder.monthlyDate = isNaN(parsedDay)? 0: parsedDay;
                    
                    onChange(tempReminder); 
                }}
            />
        </>
    );
};

export default MonthlyReminderComponent;