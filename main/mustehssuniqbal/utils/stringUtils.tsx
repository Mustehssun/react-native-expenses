const defaultIfEmpty = (str: string, defaultStr: string) => {
    if(defaultStr == null) {
        defaultStr = "";
    }
    return str == null || str.trim() == defaultStr? '': str;
};

export default {
    defaultIfEmpty
};