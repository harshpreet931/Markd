import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import GetStarted from "../pages/GetStarted";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="getstarted" element={<GetStarted />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;