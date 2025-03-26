import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
