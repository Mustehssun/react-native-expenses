import { storage } from "../polymorphicDispatch/storage";
import { postRequest } from "./rest";

const signup = (user: any) => {
    return postRequest("/auth/signup", user);
};

const login = async (credentials: any) => {
    const authenticatedUser = await postRequest("/auth/login", credentials);
    await storage.setItem("user", authenticatedUser);

    return authenticatedUser;
};

export {
    signup,
    login
};