import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dt from "./pages/work/Components/port1/Dt";
import Pw from "./pages/work/Components/port2/Pw";
import Intern from "./pages/work/Components/port3/Intern";
import Personal from "./pages/work/Components/port4/Personal";
import App from "./App";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dt" element={<Dt />} />
                <Route path="/pw" element={<Pw />} />
                <Route path="/inturn" element={<Intern />} />
                <Route path="/personal" element={<Personal />} />
            </Routes>
        </BrowserRouter>
    );
}
