import { Outlet, Navigate, useLocation } from "react-router-dom";
import { isAdminAuthenticated } from "@/lib/admin-auth";

/**
 * Melindungi rute admin - redirect ke /login jika tidak terautentikasi sebagai admin.
 * Ganti pengecekan isAdminAuthenticated() dengan auth real (JWT, API) saat backend siap.
 */
const AdminRouteGuard = () => {
  const location = useLocation();
  const isAdmin = isAdminAuthenticated();

  if (!isAdmin) {
    return (
      <Navigate
        to="/login"
        state={{ from: location, adminRequired: true }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default AdminRouteGuard;
