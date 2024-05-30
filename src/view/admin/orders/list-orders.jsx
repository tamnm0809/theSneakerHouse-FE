import React, { useState } from "react";
import Pagination from "../../common/Pagination";
import Modal_ from "../../common/Modal_";
import "../../../css/admin/orders.css";

export default function listOrders() {
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
      <div className="orders">
        <div className="orders-header">
          <div className="orders-header-title">
            <h5>E-Commerce Order Management</h5>
          </div>
          <div className="orders-header-form">
            <form action="" className="form">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter anything you want.."
                />
              </div>
            </form>
          </div>
        </div>
        <div className="orders-table">
          <table className="table table-borderless">
            <thead>
              <tr>
                <td>#</td>
                <td>Product</td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Price
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
                  Quantity
                </td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Amount
                </td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-filter"></i>
                  </button>
                  Status
                </td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="delivery">To Delivery</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="complete">Complete</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="refun">Refun</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="uncomfirm">UnComfirm</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="delivery">To Delivery</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="complete">Complete</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="refun">Refun</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="uncomfirm">UnComfirm</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="delivery">To Delivery</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="complete">Complete</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="refun">Refun</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>SL Shoe Sneaker Adidas</td>
                <td>560.000</td>
                <td>42</td>
                <td>1</td>
                <td>560000</td>
                <td className="uncomfirm">UnComfirm</td>
                <td>
                  <button className="btn btn-view" onClick={openModal}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
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
        <Modal_ isOpen={isModalOpen} onClose={closeModal} title="Order Detail">
          <div className="container-fluid">
            <div className="modal-title-orders">
              <h5>
                Order ID: <span className="idOrder">151432412415454</span>
              </h5>
            </div>
            <div className="orders-info">
              <div className="info info-address">
                <h6>Adress Delivery</h6>
                <span className="name">Your name</span>
                <span className="address">
                  35/11d, To Ky Street, district 12
                </span>
                <span className="note">
                  Note: <span></span>
                </span>
              </div>
              <div className="info method-delivery">
                <h6>Orther</h6>
                <span className="date">
                  Date Order: <span>23/11/2022</span>
                </span>
                <span className="date">
                  Method Payment: <span>VNPay</span>
                </span>
                <span className="date">
                  Method Delivery: <span>Express</span>
                </span>
              </div>
            </div>
            <div className="product-info">
              <div className="product-title">
                <h6>Infomation Product</h6>
              </div>
              <div className="">
                <div className="orders-product my-2">
                  <div className="orders-product-item">
                    <div className="image">
                      <img
                        src="https://res.cloudinary.com/dchefcs07/image/upload/v1716655848/theSneakerHouse/hspvfnweyys22eelsnfd.png"
                        alt="Product"
                      />
                    </div>
                    <div className="orders-product-item-info">
                      <span>Name product</span>
                      <span>Size</span>
                      <span>Quantity</span>
                    </div>
                  </div>
                  <div className="orders-product-price">
                    <div className="text-decoration-line-through">
                      Price Origin
                    </div>
                    <div className="price">Price Sale</div>
                  </div>
                </div>
                <div className="orders-product my-2">
                  <div className="orders-product-item">
                    <div className="image">
                      <img
                        src="https://res.cloudinary.com/dchefcs07/image/upload/v1716655848/theSneakerHouse/hspvfnweyys22eelsnfd.png"
                        alt="Product"
                      />
                    </div>
                    <div className="orders-product-item-info">
                      <span>Name product</span>
                      <span>Size</span>
                      <span>Quantity</span>
                    </div>
                  </div>
                  <div className="orders-product-price">
                    <div className="text-decoration-line-through">
                      Price Origin
                    </div>
                    <div className="price">Price Sale</div>
                  </div>
                </div>
              </div>
              <h6 className="mt-3 mb-0">Payment</h6>
              <div className="orders-amount">
                <span className="title">
                  <div className="me-3">Merchandise Subtotal:</div>
                  <div className="price">12000</div>
                </span>
                <span className="title">
                  <div className="me-3">Voucher Applied:</div>
                  <div className="price">21000</div>
                </span>
                <span className="title">
                  <div className="me-3">Total:</div>
                  <div className="price">3123481234</div>
                </span>
              </div>
            </div>
          </div>
        </Modal_>
      </div>
    </>
  );
}
