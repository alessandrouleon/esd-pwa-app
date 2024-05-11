import {  Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Unauthorized } from "../components/unautorized";

import { Home } from "../pages/home";
import { UserTokenHelper } from "../services/history/history";

export function AppRoutes() {

    const registration = UserTokenHelper.getLocalStorageRegistration();
    const isAuthenticated = registration !== null;

    const isHomeRoute = location.pathname
    .toLowerCase()
    .includes('/home');

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
                isAuthenticated === false && isHomeRoute ? 
                <Navigate to="/" /> : <Home /> } 
                 />

            <Route path="*" element={<Unauthorized />} />
        </Routes>
    );
}
