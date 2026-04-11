import { Navigate } from "react-router-dom";

interface ProtectRoutes {
        isLoggedIn: boolean;
        children: React.ReactNode;
}


export function CheckLogin(props: ProtectRoutes) {
    if (!props.isLoggedIn) {
        console.log("로그인 안되있습니다 회원가입 혹은 로그인 부탁드립니다");
        return <Navigate to="/" replace/>
    } 

    return props.children
}

