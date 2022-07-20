import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/navbar";
import { WithRouter } from "../utils/navigation";
import Card from "../components/card"

const Favorite = () => {

const favorites = useSelector((state) => state.favorites)

    return(
        <>
        <Navbar />
        <div className="movies">
            <h2>My Favorites</h2>
            <div className="movie-box">
                {favorites.map((movie) => (
                    <Card key={movie.id} data={movie} />
                ))}
            </div>
        </div>
        </>
    )
}

export default WithRouter(Favorite)