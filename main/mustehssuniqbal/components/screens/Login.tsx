import { useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import screenNames from "../../constants/screenNames";
import { Alert, View } from "react-native";
import User from "../../domain/User";
import { backgroundColor } from "../../uniformTheme/uniformTheme";

const service = require("../../service/authService");

const Login = ({navigation}: any) =>    {
  const [credentials, setCredentials]: [User, Function] = useState(new User());

  const login = async () => {
    const user = await service.login(credentials);

    if(user != null) {
        Alert.alert("Logged in successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    }
    else {
        Alert.alert("Unable to login!");
    }
  };
  
  return (
    <View style={{borderColor: "solid", backgroundColor: backgroundColor.primaryShades.lighter}}>
        <GenericTextInput 
            label="Username"
            onChangeText={(username: string) => setCredentials({...credentials, username})}
            value={credentials?.username}
        />

        <GenericTextInput
            label="Password"
            onChangeText={(password: string) => setCredentials({...credentials, password})}
            value={credentials?.password}
            type="password"
        />

        <GenericButton
            title="Login"
            onPress={login}
            icon="login"
            color={backgroundColor.secondaryShades.dark}
        />
    </View>
  );
};

export default Login;