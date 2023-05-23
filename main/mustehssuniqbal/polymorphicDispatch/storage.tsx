import { abstractStorage } from "../storage/abstractStorage";
import { asyncStorageImpl } from "../storage/impls/asyncStorage";

const storage: abstractStorage = asyncStorageImpl;

export { storage };