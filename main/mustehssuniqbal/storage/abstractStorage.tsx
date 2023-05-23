export declare type abstractStorage = {
    getItem: (key: string) => Promise<string | null>;
    setItem: (key: string, object: any) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
    clear: () => Promise<void>;
    getKeys: () => Promise<readonly string[]>;
};