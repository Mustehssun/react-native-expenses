import { storage } from "../../polymorphicDispatch/storage";

const jwtInterceptor = async (config: any) => {
    const user = await storage.getItem("user");

    console.log("user: ", user);

    if(user == null || user?.jwt == null) {
        console.log("jwt is not present. Redirect to login");
    }
    else {
        config.headers.authorization = `Bearer ${user?.jwt}`;
    }
    console.log("config: ", config);

    return config;
};

export { jwtInterceptor };