const createLoader = (setIsLoading: { (value: React.SetStateAction<boolean>): void; (arg0: boolean): any; }) => {
    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return [showLoader, hideLoader];
};

export default createLoader;