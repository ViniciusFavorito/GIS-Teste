import { Route, BrowserRouter, Routes as RoutesCustom } from "react-router-dom";

import Home from "./pages/Home";
import { CreateAccount } from "./pages/CreateAccount";
import { DashBoard } from "./pages/DashBoard";
import LoginPage from "./pages/Login";
import { ChangePassword } from "./pages/ChangePassword";
import NewCall from "./pages/NewCall";
import EditCall from "./pages/EditCall";

const Routes = () => {
    return (
        <RoutesCustom>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create_account" element={<CreateAccount />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/changePass" element={<ChangePassword />} />
            <Route path="/newCall" element={<NewCall />} />
            <Route path="/editCall/:id" element={<EditCall />} />
        </RoutesCustom>
    )
}

export default Routes;