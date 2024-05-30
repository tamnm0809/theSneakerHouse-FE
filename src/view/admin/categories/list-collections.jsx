import React, { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import "../../../css/admin/categories.css";

export default function list_collections() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const items = Array.from({ length: 100 }).map((_, i) => `Item ${i + 1}`);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsFormVisible(false);
      } else {
        setIsFormVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEditButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <div className="collections-wrapper">
        <div className="collections-list">
          <div className="collections-title">
            <h6 className="h6">Collections</h6>
            <form action="" className="form">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Active</label>
              </div>
            </form>
          </div>
          <div className="collections-table">
            <table className="table table-borderless mb-3">
              <thead>
                <tr>
                  <td className="title">#</td>
                  <td className="title">
                    <button className="btn">
                      <i className="fa-solid fa-filter"></i>
                    </button>
                    Name
                  </td>
                  <td className="title">
                    <button className="btn">
                      <i className="fa-solid fa-filter"></i>
                    </button>
                    Category
                  </td>
                  <td className="title"></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sneaker Adidas SL</td>
                  <td>Sneaker</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-edit"
                      onClick={handleEditButtonClick}
                    >
                      Edit
                    </button>
                    <button className="btn btn-delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sneaker Adidas SL</td>
                  <td>Sneaker</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-edit"
                      onClick={handleEditButtonClick}
                    >
                      Edit
                    </button>
                    <button className="btn btn-delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sneaker Adidas SL</td>
                  <td>Sneaker</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-edit"
                      onClick={handleEditButtonClick}
                    >
                      Edit
                    </button>
                    <button className="btn btn-delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sneaker Adidas SL</td>
                  <td>Sneaker</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-edit"
                      onClick={handleEditButtonClick}
                    >
                      Edit
                    </button>
                    <button className="btn btn-delete">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalItems={items.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
        {isFormVisible && (
          <div className="collections-form">
            <form action="" method="post" className="form">
              <button
                className="btn btn-primary btn-close_ w-100"
                onClick={handleCloseButtonClick}
              >
                Close
              </button>
              <div className="mb-4 mt-4">
                <label className="form-label">Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter new collections..."
                />
              </div>
              <div className="mb-4">
                <label className="form-lable mb-2">Category</label>
                <select className="form-select" defaultValue={0}>
                  <option value={0}>Choose category..</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="mb-4 button">
                <button className="btn btn-submit">Submit</button>
                <button className="btn btn-cancel">Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
