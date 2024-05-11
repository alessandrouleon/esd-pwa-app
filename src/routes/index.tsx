import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Unauthorized } from "../components/unautorized";
//import { UserTokenHelper } from "../services/history/history";
import { Home } from "../pages/home";

export function AppRoutes() {
    //  const registration = UserTokenHelper.getLocalStorageRegistration();
    // const isAuthenticated = registration !== null;

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Unauthorized />} />
        </Routes>
    );
}
