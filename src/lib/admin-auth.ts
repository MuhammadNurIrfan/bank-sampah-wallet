/**
 * Admin auth helpers - siap diganti dengan auth real (JWT, API, dll)
 */

const ADMIN_SESSION_KEY = "bank_sampah_admin_session";

export const isAdminAuthenticated = (): boolean => {
  return Boolean(sessionStorage.getItem(ADMIN_SESSION_KEY));
};

export const setAdminSession = (): void => {
  sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
};

export const clearAdminSession = (): void => {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
};
