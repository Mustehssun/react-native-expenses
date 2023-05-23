import { useEffect } from "react";
import screenNames from "../../constants/screenNames";
import { Alert } from "react-native";

const service = require("../../service/authService");

const Authentication = ({reroute}: any) => {
    useEffect(() => {
        const load = async () => {
            const isTokenValid = await service.validateToken();

            console.log("isTokenValid: ", isTokenValid);

            if(!isTokenValid) {
                Alert.alert("You are not logged in! Please Login first or Signup.");

                reroute();
            }
        };
        load();
    }, []);

    return (
        <></>
    );
};

export default Authentication;