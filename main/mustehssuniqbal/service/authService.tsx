import User from "../domain/User";
import { storage } from "../polymorphicDispatch/storage";
import { postRequest } from "./rest";

const resourceUrl: string = "/auth";

const signup = (user: User): Promise<User> => {
    return postRequest("/auth/signup", user);
};

const login = async (credentials: User): Promise<User> => {
    const authenticatedUser = await postRequest(`${resourceUrl}/login`, credentials);
    if(authenticatedUser != null) {
        await storage.setItem("user", authenticatedUser);
    }
    return authenticatedUser;
};

const logout = async () => {
    await storage.removeItem("user");
};

const validateToken = async () => {
    const res = await postRequest(`${resourceUrl}/validateToken`, {});

    console.log("res from validateToken: ", res);

    return res == null? false: true;
};

export {
    signup,
    login,
    logout,
    validateToken
};