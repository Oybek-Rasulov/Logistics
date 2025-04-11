import { Navigate } from 'react-router-dom';

export default function ProtectedAdminRoute({ children }) {
  const isAdminLoggedIn = !!localStorage.getItem('admin');

  // ✅ If admin not logged in, redirect
  if (!isAdminLoggedIn) {
    return <Navigate to="/adminLogin" replace />;
  }

  // ✅ If logged in, render the protected content
  return children;
}
