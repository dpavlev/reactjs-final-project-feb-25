import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AddStudio from "./views/AddStudio";
import UserProfile from "./views/UserProfile";
import Dashboard from "./views/Dashboard";
import Logout from "./views/empty_render/Logout";
import { UserContext } from "./contexts/UserContext";
import initialAuthData from "./utils/initialAuthData";
import DeleteUser from "./views/empty_render/DeleteUser";
import StudioView from "./views/StudioView";
import EditStudio from "./views/EditStudio";
import DeleteStudio from "./views/empty_render/DeleteStudio";

function App() {
    const [authData, setAuthData] = useState(initialAuthData());

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    const addMoreAuthData = (data) => {
        setAuthData((prev) => ({ ...prev, ...data }));
    };

    const userLogoutHandler = () => {
        for (const key in authData) {
            localStorage.removeItem(key);
        }
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler, addMoreAuthData }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/studioView/none" element={<AddStudio />} />
                <Route path="/studioView/:id" element={<StudioView />} />
                {authData.id && (
                    <>
                        {authData.isStudio && !authData.hasStudio && <Route path="/addStudio" element={<AddStudio />} />}
                        {authData.isStudio && authData.hasStudio && (
                            <>
                                <Route path="/studioView/:id/edit" element={<EditStudio />} />
                                <Route path="/studioView/:id/delete" element={<DeleteStudio />} />
                            </>
                        )}
                        <Route path="/userProfile" element={<UserProfile />} />
                        <Route path="/deleteUser/:id" element={<DeleteUser />} />
                        <Route path="/logout" element={<Logout />} />
                    </>
                )}
                {/* TODO: Add error page */}
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            <Footer />
        </UserContext.Provider>
    );
}

export default App;
