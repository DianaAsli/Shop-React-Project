import {
    requester
} from "../utils/requester";

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