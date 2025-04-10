import {
    useContext,
    useEffect,
    useState
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
        accessToken,
        logoutHandler
    } = useContext(UserContext);
    const [loggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const logout = async () => {
            try {
                const response = await requester('GET', `${baseUrl}/logout`, null, accessToken);

                if (response.status === 204) {
                    logoutHandler();
                    // localStorage.removeItem('accessToken');
                    setLoggedOut(true);
                }

            } catch (error) {
                console.log('Logout error', error);
                setLoggedOut(false);
            }
        }
        logout();
    }, [accessToken, logoutHandler])

    return {
        loggedOut
    }
}

// export const useEditUser = () =>{
//     const edit = async(email,username, password) =>{
//         const data = {
//             email,
//             username, 
//             password,

//         }
//         const result = await requester('PUT', `${baseUrl}/me`, data, accessToken);
//     }
//     return {edit}
// }