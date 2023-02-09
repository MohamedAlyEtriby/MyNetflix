import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Bear from "./Bear.jpg";
import YouTube from "react-youtube";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, islarger }) {
  const [movies, setMovies] = useState([]);
  const xdjdj = "";
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${islarger && "row__posterlarger"}`}
              src={`${baseUrl}${
                islarger ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
