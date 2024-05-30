import React, { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import ListCollections from "./list-collections";
import "../../../css/admin/categories.css";

export default function list_categories() {
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
      <div className="categories">
        <div className="categories-header">
          <h5>Management Sections</h5>
        </div>
        <div className="categories-wrapper">
          <div className="categories-list">
            <div className="categories-title">
              <h6 className="h6">Categories</h6>
              <form action="" className="form">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Active</label>
                </div>
              </form>
            </div>
            <div className="categories-table">
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
                    <td className="title">Active</td>
                    <td className="title"></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sneaker Adidas SL</td>
                    <td className="active">isActive</td>
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
                    <td className="unactive">unActive</td>
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
                    <td className="active">isActive</td>
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
                    <td className="active">isActive</td>
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
            <div className="categories-form">
              <div className="categories-form-title">
                <h5>Form Data</h5>
              </div>
              <form action="" method="post" className="form">
                <button
                  className="btn btn-primary btn-close_ w-100"
                  onClick={handleCloseButtonClick}
                >
                  Close
                </button>
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new category..."
                  />
                </div>
                <div className="mb-4">
                  <label className="form-lable">Active</label>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </div>
                <div className="mb-4 button">
                  <button className="btn btn-submit">Submit</button>
                  <button className="btn btn-cancel">Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <ListCollections />
      </div>
    </>
  );
}
