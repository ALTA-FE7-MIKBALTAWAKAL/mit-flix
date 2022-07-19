import React from "react";
import Mitflix from "../asset/mitflix.png";
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <Link to={"/"}><div className="logo">
                <img src={Mitflix} alt="mitflix" />
            </div></Link>
            <ul>
            <Link to={"/"}><li><a>Home</a></li></Link>
                <Link to={"/favorite"}><li><a>Favorites</a></li></Link>
            </ul>
            <div className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar