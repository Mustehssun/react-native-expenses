import { postRequest } from "./rest";

const signup = (user: any) => {
    console.log(user);

    return postRequest("/auth/signup", user);
};

const login = (credentials: any) => {
    return postRequest("/auth/login", credentials);
};

export {
    signup,
    login
};