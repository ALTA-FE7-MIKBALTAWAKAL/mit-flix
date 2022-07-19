import React, { useState, useEffect} from "react";
import axios from "axios"
import { WithRouter } from "../utils/navigation"
import Navbar from "../components/navbar"

const Detail = (props) => {
    const [detailMovie, setDetailMovie] = useState({});
    const [videos,setVideos] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        setLoading(true);
        const { movie_id } = props.params;
        await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=4e9db22c13a77b3b2d0ba12ec184de7c&language=en-US`)
        .then((response) => {
            const { data } = response;
            setDetailMovie(data);
        })
        .catch((error) => {
            alert(error.toString())
        })
        .finally(() => setLoading(false))
    }

    if(loading){
        return <div className="loading">Please Wait...</div>
    }

    return(
        <>
        <Navbar />
        <div className="backdrop"><img className="backdrop"
            src={`https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`
            }
            alt={detailMovie.title}
            /></div>
        <div className="detail-movie">
            <img
            src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`
            }
            alt={detailMovie.title}
            />
            <div className="get-details">
                <h1>{detailMovie.title} ({detailMovie.release_date})</h1>
                <h2>overview</h2>
                <p>{detailMovie.overview}</p>
                <p></p>
            </div>
        </div>
        </>
    )
}

export default WithRouter(Detail)