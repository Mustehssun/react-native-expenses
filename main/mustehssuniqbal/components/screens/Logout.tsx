import { ActivityIndicator, Text } from "react-native-paper";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import createLoader from "../../loader/loader";
import screenNames from "../../constants/screenNames";
import { logout } from "../../service/authService";
import { View } from "react-native";

const Logout = ({navigation}: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        const getTokenAndLogout = async () => {
            await logout();
        };

        showLoader();
        getTokenAndLogout();
        hideLoader();

        Alert.alert("You have Logged out!");

        navigation.navigate(screenNames.HOME_SCREEN);
    }, []);

    return (
        <View style={{borderColor: "solid", backgroundColor: "#ddd0fa"}}>
            <ActivityIndicator size="large" animating={isLoading} />
            <Text>Logging out...</Text>
        </View>
    );
};

export default Logout;