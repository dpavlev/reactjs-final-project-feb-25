import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/features/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ScrollToTop />

        {/* <StrictMode> */}
        <App />
        {/* </StrictMode> */}
    </BrowserRouter>
);
