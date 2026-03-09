import { Outlet, Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "@/lib/admin-auth";

/**
 * Melindungi rute admin - redirect ke /login jika tidak terautentikasi sebagai admin.
 * Ganti pengecekan isAdminAuthenticated() dengan auth real (JWT, API) saat backend siap.
 */
const AdminRouteGuard = () => {
  const isAdmin = isAdminAuthenticated();

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return <Outlet />;
};

export default AdminRouteGuard;
