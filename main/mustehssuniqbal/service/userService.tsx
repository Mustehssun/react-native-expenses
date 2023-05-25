import User from "../domain/User";

const rest = require("./rest");

const resourceUrl: string = "/users";

const getUser = (id: number): Promise<User> => rest.getRequest(`${resourceUrl}/${id}`);

const updateUser = (id: number, user: User): Promise<User> => rest.postRequest(`${resourceUrl}/${id}`, user);

export {
    getUser,
    updateUser
};