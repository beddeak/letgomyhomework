import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/Signuppage";
import PostlistPage from "./pages/Postlistpage";
import PostDetailPage from "./pages/Postdetailpage";
import PostEditPage from "./pages/Posteditpage";
import MyPostsPage from "./pages/MyPostsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import ProtectRoute from "./Route/ProtectRoute";
import PostCreatePage from "./pages/Postcreatepage";
import AdminRoute from "./Route/AdminRoute";

const isLoggedIn = true;
const isAdmin = true;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/posts" element={<PostlistPage />}/>
        <Route path="/posts/:id/detail" element={<PostDetailPage />}/>
        <Route path="/posts/write" element={<ProtectRoute isLoggedIn={isLoggedIn}><PostCreatePage/></ProtectRoute>}/> {/* 나중엔 user정보로 쓰기 */}
        <Route path="/posts/:id/edit" element={<ProtectRoute isLoggedIn={isLoggedIn}><PostEditPage /></ProtectRoute>}/>
        <Route path="/mypage/posts" element={<ProtectRoute isLoggedIn={isLoggedIn}><MyPostsPage/></ProtectRoute>}/>
        <Route path="/admin" element={<AdminRoute isAdmin={isAdmin}><AdminDashboardPage/></AdminRoute>}/> {/* 나중엔 user정보로 쓰기 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;