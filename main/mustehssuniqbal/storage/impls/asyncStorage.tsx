import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (key: string) => {
    const stringifiedValue = await AsyncStorage.getItem(key) || "{}";

    return JSON.parse(stringifiedValue);
};

const getString = async (key: string) => {
    return await AsyncStorage.getItem(key);
};

const setItem = (key: string, value: any) => {
    return AsyncStorage.setItem(key, JSON.stringify(value));
};

const setString = (key: string, value: string) => {
    return AsyncStorage.setItem(key, value);
};

const removeItem = (key: string) => {
    return AsyncStorage.removeItem(key);
};

const getKeys = async () => {
    return await AsyncStorage.getAllKeys();
};

const clear = () => {
    return AsyncStorage.clear();
};

const asyncStorageImpl = {
    getItem,
    getString,
    setItem,
    setString,
    removeItem,
    getKeys,
    clear
};

export { asyncStorageImpl };
