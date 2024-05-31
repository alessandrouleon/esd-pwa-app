import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

import { LocalStorageToken } from "../services/Storage/token";
import { NotFound } from "../components/notFound";

export function AppRoutes() {
  const registration = LocalStorageToken.getLocalStorageRegistration();
  const location = useLocation();

  const isHomeRoute = location.pathname.toLowerCase().includes("/home");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={!registration && isHomeRoute ? <Navigate to="/" /> : <Home />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
