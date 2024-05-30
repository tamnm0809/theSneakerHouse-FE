import React, { useState } from "react";
import Pagination from "../../common/Pagination";
import "../../../css/admin/products.css";
import Modal_ from "../../common/Modal_";

export default function list_products() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const items = Array.from({ length: 100 }).map((_, i) => `Item ${i + 1}`);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="products">
        <div className="products-title">
          <h5>Current Inventory Product List</h5>
          <button className="btn btn-new-product" onClick={openModal}>
            <i className="fa-solid fa-plus"></i>
            <span>Add New Product</span>
          </button>
        </div>
        <div className="products-table">
          <table className="table table-borderless">
            <thead>
              <tr>
                <td>#</td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Collections
                </td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Name
                </td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Size
                </td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Price Origin
                </td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Price Sale
                </td>
                <td>Descriptions</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
                    Edit
                  </button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Adidas</td>
                <td>Sneaker Adidas SL</td>
                <td>43</td>
                <td>560.000</td>
                <td>500.000</td>
                <td>The sneaker for adidas</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-edit" onClick={openModal}>
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
      <Modal_
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add/ Update Product"
      >
        <form action="" className="form px-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name product.."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Size</label>
            <select className="form-select" defaultValue={0}>
              <option value={0}>Choose size</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Collections</label>
            <select className="form-select" defaultValue={0}>
              <option value={0}>Choose collections</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Discounts</label>
            <select className="form-select" defaultValue={0}>
              <option value={0}>Choose code discount</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price product.."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descriptions</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                Active
              </label>
            </div>
          </div>
        </form>
      </Modal_>
    </>
  );
}
