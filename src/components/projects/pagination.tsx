import React from "react";
import styles from "./projects.module.scss";

export const Pagination = ({
  postPerPage,
  length,
  handlePageClick,
}: {
  postPerPage: number;
  length: number;
  handlePageClick?: () => void;
}) => {
  const paginationNumbers = [];
  for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
    paginationNumbers.push(i);
  }
  return (
    <div className={styles.pagination}>
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={handlePageClick}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
