import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";


function LoginRoute({children}: {children: React.ReactNode}) {
   const navigate = useNavigate();
   const context = useContext(AuthContext);
   if (!context) return (<p>오류가 발생하였습니다</p>)
    const {user} = context;
   if (!user) {
    navigate(`/login`)
    return null
   } else {
    return <>{children}</>
   }
}

export default LoginRoute
