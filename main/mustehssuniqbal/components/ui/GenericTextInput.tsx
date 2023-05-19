import { TextInput } from "react-native-paper";


const GenericTextInput = ({
    label,
    value,
    defaultValue,
    onChangeText
}: any) => {
    return (
        <TextInput
            label={label} 
            value={value}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
        />
    );
};

export default GenericTextInput;