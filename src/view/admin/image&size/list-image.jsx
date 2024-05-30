import React, { useEffect, useState } from "react";
import "../../../css/admin/sizes-image.css";
import Pagination from "../../common/Pagination";

export default function list_image() {
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
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <div className="images-table">
            <div className="d-flex">
              <h6 className="images-title">Images</h6>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleEditButtonClick}
              >
                {isFormVisible ? "Close Form" : "Show Form"}
              </button>
            </div>
        <table className="table table-borderless">
          <thead>
            <tr>
              <td>#</td>
              <td>Product</td>
              <td>
                <button className="btn">
                  <i className="fa-solid fa-filter"></i>
                </button>
                URL
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SL Shoes</td>
              <td>41</td>
              <td>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>SL Shoes</td>
              <td>41</td>
              <td>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>SL Shoes</td>
              <td>41</td>
              <td>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>SL Shoes</td>
              <td>41</td>
              <td>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalItems={items.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      {isFormVisible && (
        <div className="images-form">
          <form method="post" className="form">
            <h5>Form Data</h5>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter size of product.."
              />
            </div>
            <div className="mb-3">
              <label className="form-lable mb-2">Product</label>
              <select className="form-select" defaultValue={0}>
                <option value={0}>Choose Product</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="my-5 button">
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
              <button type="submit" className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
