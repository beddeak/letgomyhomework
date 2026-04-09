import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Signuppage";
import PostListPage from "./pages/Postlistpage";
import PostDetailPage from "./pages/Postdetailpage";
import PostCreatePage from "./pages/Postcreatepage";
import PostEditPage from "./pages/Posteditpage";
import MyPostsPage from "./pages/MyPostsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/create" element={<PostCreatePage />} />
        <Route path="/posts/:id/edit" element={<PostEditPage />} />
        <Route path="/my-posts" element={<MyPostsPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;