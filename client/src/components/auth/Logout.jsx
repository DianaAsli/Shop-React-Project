import { useNavigate } from "react-router";
import { useLogout } from "../../hooks/authServices"
import { useEffect } from "react";

export default function Logout() {
    const { loggedOut } = useLogout();
    const navigate = useNavigate();
    useLogout();
    useEffect(() => {
        if (loggedOut) {
            navigate('/users/login');
        }
    },[loggedOut, navigate])

    return null;
}
