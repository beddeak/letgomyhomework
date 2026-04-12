import { Navigate } from "react-router-dom";

interface IsAdmincheck {
    isAdmin: boolean;
    children: React.ReactNode;
}


export default function CheckAdmin(props: IsAdmincheck) {
    if (!props.isAdmin) {
        console.log("잘못된 접근")
        return <Navigate to="/" replace />;
    } 

    return <>{props.children}</>;
}

