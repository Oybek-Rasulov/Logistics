import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Setup from "./pages/Setup";
import Policy from "./pages/Policy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Settings from "./components/admin/Settings";
import { Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import ProtectedAdminRoute from "./components/Auth/ProtectedAdminRoute";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
      {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}

    </Routes>
  </BrowserRouter>
}