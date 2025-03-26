import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Routes, Route } from "react-router";
import Home from "./views/Home";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
