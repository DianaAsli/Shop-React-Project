import { useNavigate } from "react-router";
import { useLogout } from "../../hooks/authServices"

export default function Logout() {
    const { loggedOut } = useLogout();
    const navigate = useNavigate();
    useLogout();

    if(loggedOut){
        navigate('/users/login');
    }
    return null;
}
