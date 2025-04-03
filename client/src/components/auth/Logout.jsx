import { useEffect } from "react";
import { useLogout } from "../../api/authServices"

export default function Logout() {
   useLogout();
    return null;
}
