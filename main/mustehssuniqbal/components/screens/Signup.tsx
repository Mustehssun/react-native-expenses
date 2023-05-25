import { useReducer, useState } from "react";
import { Alert } from "react-native";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import screenNames from "../../constants/screenNames";
import User from "../../domain/User";

const service = require("../../service/authService");

const Signup = ({navigation}) => {
    const [user, setUser] = useState(new User());
    const [retypedPassword, setRetypedPassword] = useState("");

    const createAccount = async () => {
        if(user.password != retypedPassword) {
            Alert.alert("Passwords do not match.");

            return;
        }

        const createdUser = await service.signup(user);

        Alert.alert("Account created successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    return (
        <>
            <GenericTextInput
                label="Username"
                onChangeText={(username: string) => setUser({...user, username})}
                value={user?.username}
            />

            <GenericTextInput
                label="Email"
                onChangeText={(email: string) => setUser({...user, email})}
                value={user?.email}
            />

            <GenericTextInput
                label="First Name"
                onChangeText={(firstName: string) => setUser({...user, firstName})}
                value={user?.firstName}
            />

            <GenericTextInput
                label="Last Name"
                onChangeText={(lastName: string) => setUser({...user, lastName})}
                value={user?.lastName}
            />

            <GenericTextInput
                label="Password"
                onChangeText={(password: string) => setUser({...user, password})}
                value={user?.password}
                type="password"
            />

            <GenericTextInput
                label="Retype Password"
                onChangeText={setRetypedPassword}
                value={retypedPassword}
                type="password"
            />

            <GenericButton
                title="Create Account"
                onPress={() => createAccount()}
                color="green"
                icon="account"
            />
        </>
    );
};

export default Signup;