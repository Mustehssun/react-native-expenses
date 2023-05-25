import User from "../domain/User";
import { postRequest } from "./rest";

const userStorage = require("../storage/appspecific/userStorage");

const resourceUrl: string = "/auth";

const signup = (user: User): Promise<User> => postRequest(`${resourceUrl}/signup`, user);

const login = async (credentials: User): Promise<User> => {
    const authenticatedUser = await postRequest(`${resourceUrl}/login`, credentials);
    if(authenticatedUser != null) {
        await userStorage.setUser(authenticatedUser);
    }
    return authenticatedUser;
};

const logout = async () => {
    await userStorage.removeUser();
};

const validateToken = async () => {
    const res = await postRequest(`${resourceUrl}/validateToken`, {});

    return res == null? false: true;
};

export {
    signup,
    login,
    logout,
    validateToken
};