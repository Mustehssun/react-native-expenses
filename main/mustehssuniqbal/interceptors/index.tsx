import { jwtInterceptor } from "./request/jwtInterceptor";
import { unauthorizedInterceptor } from "./response/unauthorizedInterceptor";

const requestInterceptors = [
    jwtInterceptor
];

const responseInterceptors = [
    unauthorizedInterceptor
];

export { requestInterceptors, responseInterceptors };