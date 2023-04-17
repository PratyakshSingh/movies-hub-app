import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import axios from "axios";
import "./TvShows.css";
import api_key from "../../util/config";

const TvShows = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  // console.log(content);
  const fetchResults = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=${page}`
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
    <div className="container tvShows-section">
      <div className="top-rated-section">
        <h2>Top Rated TV Shows</h2>
        <div className="tvShow-container">
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

export default TvShows;
