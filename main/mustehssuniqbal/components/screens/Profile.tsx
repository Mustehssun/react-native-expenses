import User from "../../domain/User";
import GenericTextInput from "../ui/GenericTextInput";
import { useState } from "react";

const Profile = () => {
    const [user, setUser] = useState(new User());

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
                label="Age"
                onChangeText={(age: string) => setUser({...user, age})}
                value={user?.age}
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