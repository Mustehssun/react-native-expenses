import { ActivityIndicator, Text } from "react-native-paper";
import { useState, useEffect } from "react";
import createLoader from "../../loader/loader";
import screenNames from "../../constants/screenNames";
import { logout } from "../../service/authService";

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

        navigation.navigate(screenNames.LOGIN);
    }, []);

    return (
        <>
            <ActivityIndicator size="large" animating={isLoading} />
            <Text>Logging out...</Text>
        </>
    );
};

export default Logout;