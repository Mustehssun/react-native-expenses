import { ActivityIndicator } from "react-native-paper";
import { Alert, View } from "react-native";
import User from "../../domain/User";
import createLoader from "../../loader/loader";
import GenericTextInput from "../ui/GenericTextInput";
import { useState, useEffect } from "react";
import screenNames from "../../constants/screenNames";
import GenericButton from "../ui/GenericButton";
import Authentication from "../auth/Authentication";
import { backgroundColor } from "../../uniformTheme/uniformTheme";

const service = require("../../service/userService");
const userStorage = require("../../storage/appspecific/userStorage");

const Profile = ({navigation}: any) => {
    const [user, setUser]: [User, Function] = useState(new User());
    const [isLoading, setIsLoading]: [Boolean, Function] = useState(true);
    const [showLoader, hideLoader]: [Function, Function] = createLoader(setIsLoading);

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
        <View style={{borderColor: "solid", backgroundColor: backgroundColor.primaryShades.lighter}}>
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
                color={backgroundColor.secondaryShades.dark}
                icon="check"
            />
        </View>
    );
};

export default Profile;