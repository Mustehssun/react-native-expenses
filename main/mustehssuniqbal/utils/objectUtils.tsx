const defaultNullObject = ( expr: Function, params?: any, defaultVal?: any) => {
    try {
        if(params == null) {
            return expr();
        }
        else {
            return expr(params);
        }
    } catch(ex) {
        return defaultVal;
    }
};

export {
    defaultNullObject
};