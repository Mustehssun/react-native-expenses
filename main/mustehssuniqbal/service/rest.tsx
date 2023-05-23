import axios from "axios";
import { requestInterceptors, responseInterceptors } from "../interceptors";

const setInterceptors = (requestInterceptors: any, responseInterceptors: any) => {
    requestInterceptors.forEach((interceptor: any) => {
        axios.interceptors.request.use(interceptor);
    });

    responseInterceptors.forEach((interceptor: any) => {
        axios.interceptors.response.use(interceptor);
    });
}; 

setInterceptors(requestInterceptors, responseInterceptors);

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