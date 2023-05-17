import axios from "axios";

const baseUrl: string = "http://10.0.2.2:3001";

const getRequest = async (url: string) => {
    try {
        return await axios.get(baseUrl + url);
    } catch(ex) {
        console.trace(ex);
    }
};

const postRequest = async (url: string, payload: any) => {
    try {
        return await axios.post(baseUrl + url, payload);
    } catch(ex) {
        console.trace(ex);
    }
}

export {
    getRequest,
    postRequest
};