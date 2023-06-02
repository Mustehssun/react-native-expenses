import { useState } from "react";
import GenericTextInput from "../../ui/GenericTextInput";
import MonthlyReminder from "../../../domain/reminder/MonthlyReminder";

const MonthlyReminderComponent = ({
    onChangeText
}: any) => {
    const [reminder, setReminder]: [MonthlyReminder, Function] = useState(new MonthlyReminder());

    return (
        <>
            <GenericTextInput
                label="Day of the Month"
                value={reminder.day}
                onChangeText={onChangeText}
            />
        </>
    );
};

export default MonthlyReminderComponent;