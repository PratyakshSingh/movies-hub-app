import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-section">
          <div className="left-section">
            <div className="logo-text">Movies Hub</div>
          </div>
          <div className="right-section">
            <ul className="header-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/tvshows">TV Shows</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
