import { Navigate,Route,Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { LoginPage,ForgotPasswordPage,OtpPage,ResetPasswordPage } from "./features/auth/AuthPages";
import UserDashboardPage from "./features/dashboard/UserDashboardPage";
import LeadsPage from "./features/leads/LeadsPage";
import PipelinePage from "./features/pipeline/PipelinePage";
import CustomersPage from "./features/customers/CustomersPage";
import TasksPage from "./features/tasks/TasksPage";
import ActivitiesPage from "./features/activities/ActivitiesPage";
import ReportsPage from "./features/reports/ReportsPage";
import NotificationsPage from "./features/notifications/NotificationsPage";
import ProfilePage from "./features/profile/ProfilePage";
export default function App(){
 return <Routes>
  <Route path="/login" element={<LoginPage/>}/><Route path="/forgot-password" element={<ForgotPasswordPage/>}/><Route path="/verify-otp" element={<OtpPage/>}/><Route path="/reset-password" element={<ResetPasswordPage/>}/>
  <Route element={<ProtectedRoute/>}><Route element={<AppShell/>}>
   <Route path="/user" element={<UserDashboardPage/>}/><Route path="/user/leads" element={<LeadsPage/>}/><Route path="/user/pipeline" element={<PipelinePage/>}/><Route path="/user/customers" element={<CustomersPage/>}/><Route path="/user/tasks" element={<TasksPage/>}/><Route path="/user/activities" element={<ActivitiesPage/>}/><Route path="/user/reports" element={<ReportsPage/>}/><Route path="/user/notifications" element={<NotificationsPage/>}/><Route path="/user/profile" element={<ProfilePage/>}/>
   <Route path="/admin/*" element={<Navigate to="/user" replace/>}/>
  </Route></Route>
  <Route path="*" element={<Navigate to="/user" replace/>}/>
 </Routes>;
}
