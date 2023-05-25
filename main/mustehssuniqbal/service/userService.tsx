import User from "../domain/User";

const rest = require("./rest");

const resourceUrl: string = "/users";

const getUser = (id: number): Promise<User> => {
    return rest.getRequest(`${resourceUrl}/id`);
};