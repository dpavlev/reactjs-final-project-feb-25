import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AddStudio from "./views/AddStudio";
import UserProfile from "./views/UserProfile";
import Dashboard from "./views/Dashboard";
import Logout from "./views/Logout";
import { UserContext } from "./contexts/UserContext";

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    const userLogoutHandler = () => {
        for (const key in authData) {
            localStorage.removeItem(key);
        }
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addStudio" element={<AddStudio />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
            <Footer />
        </UserContext.Provider>
    );
}

export default App;
