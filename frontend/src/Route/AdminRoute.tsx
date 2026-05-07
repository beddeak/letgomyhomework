import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export function AdminRoute({children}: {children: React.ReactNode}) {
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    if (!context) return (<p>오류가 발생하였습니다</p>)
    const {user} = context;

    if (!user) {
        navigate(`/`)
        return null
    }
    if (user.role === "admin") {
        return <>{children}</>
    } else {
        navigate(`/`)
        return null
    }
}

export default AdminRoute