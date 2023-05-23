import { storage } from "../polymorphicDispatch/storage";
import { postRequest } from "./rest";

const signup = (user: any) => {
    return postRequest("/auth/signup", user);
};

const login = async (credentials: any) => {
    const authenticatedUser = await postRequest("/auth/login", credentials);
    if(authenticatedUser != null) {
        await storage.setItem("user", authenticatedUser);
    }
    return authenticatedUser;
};

const logout = async () => {
    await storage.removeItem("user");
};

const validateToken = async () => {
    const res = await postRequest("/auth/validateToken", {});

    console.log("res from validateToken: ", res);

    return res == null? false: true;
};

export {
    signup,
    login,
    logout,
    validateToken
};