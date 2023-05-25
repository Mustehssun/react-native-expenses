import { ActivityIndicator } from "react-native-paper";
import { Alert } from "react-native";
import User from "../../domain/User";
import createLoader from "../../loader/loader";
import GenericTextInput from "../ui/GenericTextInput";
import { useState, useEffect } from "react";
import screenNames from "../../constants/screenNames";
import GenericButton from "../ui/GenericButton";
import Authentication from "../auth/Authentication";

const service = require("../../service/userService");
const userStorage = require("../../storage/appspecific/userStorage");

const Profile = ({navigation, route}: any) => {
    const [user, setUser] = useState(new User());
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, hideLoader] = createLoader(setIsLoading);

    useEffect(() => {
        const loadUser = async (): Promise<void> => {
            showLoader();

            setUser(await userStorage.getUser());

            hideLoader();
        }
        loadUser();
    }, []);

    const updateUser = async () => {
        showLoader();

        const updatedUser: User = await service.updateUser(user?.id, user);
        userStorage.setUser(updatedUser);

        Alert.alert("User updated successfully!");

        navigation.navigate(screenNames.HOME_SCREEN);
    };

    return (
        <>
            <Authentication reroute={() => navigation.navigate(screenNames.HOME_SCREEN)} />
            <ActivityIndicator size="large" animating={isLoading} />

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

            <GenericButton
                title="Update"
                onPress={() => updateUser()}
                color="green"
                icon="check"
            />
        </>
    );
};

export default Profile;