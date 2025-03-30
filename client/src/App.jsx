import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AddStudio from "./views/AddStudio";
import UserProfile from "./views/UserProfile";
import Dashboard from "./views/Dashboard";
import Notification from "./components/layout/Notification";
import { NotificationProvider } from "./contexts/NotificationContext";

function App() {
    return (
        <NotificationProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addStudio" element={<AddStudio />} />
                <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
            <Notification />
            <Footer />
        </NotificationProvider>
    );
}

export default App;
