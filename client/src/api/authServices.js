import {
    useContext,
    useEffect
} from "react";
import {
    requester
} from "../utils/requester";
import {
    UserContext
} from "../context/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        const result = await requester('POST', `${baseUrl}/login`, {
            email,
            password
        })
        return result;
    }

    return {
        login
    }
}

export const useRegister = () => {
    const register = async (email, username, password) => {
        const result = await requester('POST', `${baseUrl}/register`, {
            email,
            password,
            username,
            role: 'user'
        })
        return result;
    }
    return {
        register
    };
}

export const useLogout = () => {
    const {
        accessToken
    } = useContext(UserContext)

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const logout = async () => {
            try {
                await fetch(`${baseUrl}/logout`, {
                    method: 'GET',
                    headers: {
                        'X-Authorization': accessToken
                    }
                })
            } catch (error) {
                console.error('Logout error', error);
            }
        }
        logout();
    }, [accessToken]);



    // const logout = async () => {
    //     const response = await fetch(`${baseUrl}/logout`, {
    //         method: 'GET',
    //         headers: {
    //             'X-Authorization': accessToken
    //         }
    //     })
    //     return response;
    // }

    // return {
    //     logout
    // }
}