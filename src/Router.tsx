import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dt from "./pages/work/Components/port1/Dt";
import Pw from "./pages/work/Components/port2/Pw";
import Intern from "./pages/work/Components/port3/Intern";
import App from "./App";
import ScrollTop from "./ScrollTop";

export default function Router() {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dt" element={<Dt />} />
                <Route path="/pw" element={<Pw />} />
                <Route path="/intern" element={<Intern />} />
            </Routes>
        </BrowserRouter>
    );
}
