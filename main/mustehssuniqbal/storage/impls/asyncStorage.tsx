import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (key: string) => {
    const stringifiedValue = await AsyncStorage.getItem(key) || "{}";

    return JSON.parse(stringifiedValue);
};

const setItem = (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key: string) => {
    AsyncStorage.removeItem(key);
};

const getKeys = async () => {
    return await AsyncStorage.getAllKeys();
};

const clear = () => {
    AsyncStorage.clear();
};

const asyncStorageImpl = {
    getItem,
    setItem,
    removeItem,
    getKeys,
    clear
};

export { asyncStorageImpl };
