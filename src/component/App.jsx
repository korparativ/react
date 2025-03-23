import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import AboutPage from "./AboutPage.jsx";
import HomePage from "./HomePage.jsx";
  
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
     );
}

export default App;