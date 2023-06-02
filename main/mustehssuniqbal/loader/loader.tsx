const createLoader = (setIsLoading: Function): [Function, Function] => {
    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return [showLoader, hideLoader];
};

export default createLoader;