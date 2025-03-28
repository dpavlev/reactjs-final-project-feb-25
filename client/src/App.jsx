import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AddStudio from "./views/AddStudio";
import UserProfile from "./views/UserProfile";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addStudio" element={<AddStudio />} />
                <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
