import storageKeys from "../../constants/storageKeys";
import User from "../../domain/User";
import { storage } from "../../polymorphicDispatch/storage";

const getUser = (): Promise<User> => storage.getItem(storageKeys.USER);
const setUser = (user: User): Promise<void> => storage.setItem(storageKeys.USER, user);
const removeUser = (): Promise<void> => storage.removeItem(storageKeys.USER);

export {
    getUser,
    setUser,
    removeUser
};