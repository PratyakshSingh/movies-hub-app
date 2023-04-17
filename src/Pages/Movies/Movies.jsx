import React, { useEffect, useState } from "react";
import "./Movies.css";
import api_key from "../../util/config";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchResults = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`
      );
      setContent(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchResults();
  }, [page]);
  return (
    <div className="container movies-section">
      <div className="top-rated-section">
        <h2>Top Rated Movies</h2>
        <div className="movies-container">
          {content &&
            content.map((data) => {
              return <MovieCard movie={data} key={data.id} />;
            })}
        </div>
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Movies;
