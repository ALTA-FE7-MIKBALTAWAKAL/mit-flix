import React, { useContext } from "react";
import Mitflix from "../asset/mitflix.png";
import {Link} from "react-router-dom"
import { IoSunny, IoMoon } from "react-icons/io5";
import { ThemeContext } from "../utils/context";

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleChangeTheme = (mode) => {
        setTheme(mode);
    }
    return(
        <nav className="nav">
            <Link to={"/"}><div className="logo">
                <img src={Mitflix} alt="mitflix" />
            </div></Link>
            <ul>
                <Link to={"/favorite"}><li className="favlink">Favorites</li></Link>
                <li>{theme === "dark" ? <IoSunny color="#ecf0f1" onClick={() => handleChangeTheme("light")} /> : <IoMoon color="#2c3e50" onClick={() => handleChangeTheme("dark")} />}</li>
            </ul>
            
        </nav>
    )
}

export default Navbar