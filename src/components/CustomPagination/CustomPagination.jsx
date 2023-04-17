import React from "react";
import "./CustomPagination.css";
import { Pagination } from "@mui/material";

const CustomPagination = ({ setPage, numPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="paginate-container">
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numPages}
        color="primary"
        hideNextButton
        hidePrevButton
        size="large"
      />
    </div>
  );
};

export default CustomPagination;
