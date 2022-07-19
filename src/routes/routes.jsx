import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/homepage";
import Detail from "../pages/detail";
import Favorite from "../pages/favorites";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/detail/:movie_id" element={<Detail />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="*" element={<div className="errorMessage">404 Error Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App