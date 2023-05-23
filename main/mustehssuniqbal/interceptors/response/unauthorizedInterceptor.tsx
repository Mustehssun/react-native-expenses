import { logout } from "../../service/authService";

const unauthorizedInterceptor = async (res: any) => {
    if(res != null && res.status == 403) {
        logout();
    }
    return res;
};

export { unauthorizedInterceptor };