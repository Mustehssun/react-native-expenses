import { useState } from "react";
import GenericTextInput from "../ui/GenericTextInput";
import GenericButton from "../ui/GenericButton";
import screenNames from "../../constants/screenNames";
import { Alert } from "react-native";

const service = require("../../service/authService");

const Login = ({navigation}: any) => {
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    const user = await service.login(credentials);

    if(user != null) {
        Alert.alert("Logged in successfully!");
        console.log(user);

        navigation.navigate(screenNames.HOME_SCREEN);
    }
    else {
        Alert.alert("Unable to login!");
    }
  };
  
  return (
    <>
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
            color="red"
        />
    </>
  );
};

export default Login;