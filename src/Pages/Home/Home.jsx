import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useEffect } from "react";
import api_key from "../../util/config";
import MovieCard from "../../components/MovieCard/MovieCard";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchResults = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`
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
    <div className="container main">
      <div className="title-section">
        <h1>Welcome.</h1>
        <h1>Open Your Eyes to the Best Movies and TV Shows around...</h1>
        <hr />
      </div>
      <div className="trending-section">
        <h2>Trending</h2>
        <div className="movie-container">
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

export default Home;
