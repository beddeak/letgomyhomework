import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./LoginPage.css";

function LoginPage() {
    const navigate = useNavigate();
    const context = useContext(AuthContext)
    if (!context) return (<p>회원정보를 찾을수가없습니다</p>)
    const { login } = context;
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        login(1,username,"user")
        navigate(`/`)
    }


    return (
        <div className="Login-Page">
            <div className="Login-Body">
                <div className="username-set">
                    <label>아이디 입력</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="password-set">
                    <label>비밀번호 입력</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="actions-login">
                    <button onClick={handleLogin}>로그인버튼</button>
                </div>
            </div>
        </div>
    )

}

export default LoginPage