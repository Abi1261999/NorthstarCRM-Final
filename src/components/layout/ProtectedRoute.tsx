import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import type { UserRole } from "../../features/auth/authSlice";
export default function ProtectedRoute({allowed}:{allowed?:UserRole[]}) {
 const {authenticated,user}=useAppSelector(s=>s.auth);
 if(!authenticated||!user)return <Navigate to="/login" replace/>;
 if(allowed&&!allowed.includes(user.role))return <Navigate to="/user" replace/>;
 return <Outlet/>;
}
