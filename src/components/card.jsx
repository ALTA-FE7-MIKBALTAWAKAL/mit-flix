import React from "react";
import Button from "./button";
import { WithRouter } from "../utils/navigation"
import { Link } from "react-router-dom"

const Card = ({data,navigate}) => {
    return(
        <div className="movie-item" onClick={()=>navigate(`/detail/${data.id}`,{replace:true})}>
            <img src={ data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image" } alt={data.title} height="750" />
            <div className="vote">{data.vote_average}⭐</div>
            <h3>{data.title}</h3>
            <Button label="Add To Favorite"/>
        </div>
    )
}

export default WithRouter(Card)