import { useContext } from "react";
import { useLogout } from "../../api/authServices"
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(UserContext);
    useLogout();
    logoutHandler();
    navigate('/'); 
    return (
        <></>
    )
}
