export declare type abstractStorage = {
    getItem: (key: string) => Promise<any>;
    getString: (key: string) => Promise<string | null>;
    setItem: (key: string, value: any) => Promise<void>;
    setString: (key: string, value: string) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
    clear: () => Promise<void>;
    getKeys: () => Promise<readonly string[]>;
};