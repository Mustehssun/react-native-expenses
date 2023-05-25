import User from "../../domain/User";
import { storage } from "../../polymorphicDispatch/storage";

const getUser = (): Promise<User> => storage.getItem("user");
const setUser = (user: User): Promise<void> => storage.setItem("user", user);
const removeUser = (): Promise<void> => storage.removeItem("user");

export {
    getUser,
    setUser,
    removeUser
};