import React from "react";
import "../../css/common/pagination.css"

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPages = () => {
    const pageLinks = [];
    const leftDots = 'leftDots';
    const rightDots = 'rightDots';

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageLinks.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageLinks.push(1, 2, 3, rightDots, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageLinks.push(1, leftDots, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageLinks.push(1, leftDots, currentPage - 1, currentPage, currentPage + 1, rightDots, totalPages);
      }
    }

    return pageLinks;
  };

  const pages = getPages();

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <div className="page-numbers d-flex">
          {pages.map((page, index) =>
            page === 'leftDots' || page === 'rightDots' ? (
              <li key={`ellipsis-${index}`} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            ) : (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </button>
              </li>
            )
          )}
        </div>
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
