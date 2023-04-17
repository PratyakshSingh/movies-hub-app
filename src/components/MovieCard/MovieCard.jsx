import React, { useState } from "react";
import "./MovieCard.css";
import { Rating } from "@mui/material";

const MovieCard = ({ movie, id }) => {
  const rating = movie.popularity ? (movie.popularity / 200) * 10 : 3;

  return (
    <div className="movie-card">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={id}
        />
      </div>
      <div className="movie-data">
        <h3>{movie.title || movie.name}</h3>
        <h4>{movie.release_date || movie.first_air_date}</h4>
      </div>
      <div className="rating">
        <Rating readOnly value={rating} />
      </div>
    </div>
  );
};

export default MovieCard;
