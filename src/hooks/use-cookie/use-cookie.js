import { useState } from "react";
import Cookies from 'js-cookie';
const useCookie = () => {
    const [authToken, setAuthToken] = useState(true);
    const setToken = (token) => {
        if (token) {
          Cookies.set('token', token, { expires: 1/24 }); 
          setAuthToken(token);
        } else {
          Cookies.remove('token');
          setAuthToken(null);
        }
    }
    const clearToken = () => {
        setAuthToken(null);
        Cookies.remove('token');
    }
    const setTokenState = (token) => {
        setAuthToken(token)
    }
    return {
        setToken,
        clearToken,
        setTokenState,
        authToken
    }

}
export default useCookie;