import React, {useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/homepage";
import Detail from "../pages/detail";
import Favorite from "../pages/favorites";
import { ThemeContext } from "../utils/context"


const App = () => {
    const [theme, setTheme] = useState("light");
    const background = useMemo(() => ({theme, setTheme}), [theme])
    const nav = document.querySelector('.nav')
    const favlink = document.querySelector('.favlink')
 
    useEffect (() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            nav.classList.add("dark");
            favlink.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            nav.classList.remove("dark");
            favlink.classList.remove("dark");
        }
    }, [theme]);


    return(
        <ThemeContext.Provider value={background}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/detail/:movie_id" element={<Detail />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="*" element={<div className="errorMessage">404 Error Not Found</div>} />
            </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App