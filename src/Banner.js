import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./requests";
import banner from "./banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixoriginal);
      setMovie(
        requests.data.results[
          Math.floor((requests.data.results.length - 1) * Math.random())
        ]
      );
      console.log(movie);
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannercontent">
        <h1 className="bannertitle">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="bannerbuttons">
          <button className="buttonbanner">Play</button>
          <button className="buttonbanner">My List</button>
        </div>
        <h1 className="description">{movie?.overview }</h1>
      </div>
        <div className="bannerfade"></div>
    </header>
  );
}

export default Banner;
