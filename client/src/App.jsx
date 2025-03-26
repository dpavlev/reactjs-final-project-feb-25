import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
