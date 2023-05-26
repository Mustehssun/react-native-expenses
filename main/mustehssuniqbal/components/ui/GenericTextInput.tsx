import { TextInput } from "react-native-paper";


const GenericTextInput = ({
    label,
    value,
    defaultValue,
    onChangeText,
    onPressOut,
    type
}: any) => {
    let optionalProps = {};
    if(type == null) {
        type = "text;"
    }
    else if(type == "password") {
        optionalProps.secureTextEntry = true;
    }

    return (
        <TextInput
            label={label} 
            value={value}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            onPressOut={onPressOut}
            textContentType={type}
            {...optionalProps}
            style={{borderColor: "solid", backgroundColor: "#ddceff"}}
        />
    );
};

export default GenericTextInput;