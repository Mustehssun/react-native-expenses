import axios from "axios";

const baseUrl: string = "http://10.0.2.2:3001";

const getRequest = async (url: string) => {
    try {
        const res = await axios.get(baseUrl + url);

        return res.data;
    } catch(ex) {
        console.trace(ex);
    }
};

const postRequest = async (url: string, payload: any) => {
    try {
        const res = await axios.post(baseUrl + url, payload);
        return res.data;
    } catch(ex) {
        console.trace(ex);
    }
}

export {
    getRequest,
    postRequest
};