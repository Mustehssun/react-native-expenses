import { TextInput } from "react-native-paper";


const GenericTextInput = ({
    label,
    value,
    defaultValue,
    onChangeText,
    onPressOut
}: any) => {
    return (
        <TextInput
            label={label} 
            value={value}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            onPressOut={onPressOut}
        />
    );
};

export default GenericTextInput;