import { useState } from "react";
import { Alert, View } from "react-native";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import screenNames from "../../constants/screenNames";
import User from "../../domain/User";
import { backgroundColor } from "../../uniformTheme/uniformTheme";

const service = require("../../service/authService");

const Signup = ({navigation}: any) => {
    const [user, setUser]: [User, Function] = useState(new User());
    const [retypedPassword, setRetypedPassword]: [String, Function] = useState("");

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
        <View style={{borderStyle: "solid", backgroundColor: backgroundColor.primaryShades.lighter}}>
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
                color={backgroundColor.secondaryShades.dark}
                icon="account"
            />
        </View>
    );
};

export default Signup;