import React, { useState } from "react";
import "../../../css/admin/accounts.css";
import { Link } from "react-router-dom";
import Pagination from "../../common/Pagination"
import Modal_ from "../../common/Modal_";

export default function listAccounts() {
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
      <div className="accounts container-fluid">
        <div className="accounts-header">
          <h5 className="accounts-title">List Account</h5>
          <form action="" method="post" className="form">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Please enter ID account you want..."
                aria-label="account-search"
                aria-describedby="account-search"
              />
            </div>
          </form>
        </div>
        <div className="accounts-search">
          <form action="" method="post" className="form">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              <input
                type="date"
                className="input-date form-control"
                aria-label="account-search"
                aria-describedby="account-search"
              />
            </div>
          </form>
          <form action="" className="form">
            <div className="input-group">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-outlined"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-check-outlined"
              >
                <i className="fa-solid fa-check"></i>
                <span className="mx-2">Active</span>
              </label>
            </div>
          </form>
        </div>
        <div className="accounts-content row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card active">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2" onClick={openModal}>
            <Link className="card">
              <img
                src="https://res.cloudinary.com/dchefcs07/image/upload/v1716290584/theSneakerHouse/cx9sixlzk21na4pur9qm.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Your name</h5>
                <p className="card-text">28/03/2000</p>
              </div>
            </Link>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={items.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
        <Modal_
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Infomation This Account"
        >
          <div className="container-fluid modal-accounts">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="text" className="form-control" readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Fullname</label>
              <input type="text" className="form-control" readOnly />
            </div>
            <div className="">
              <label className="form-label me-3">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="gender"
                  value="option1"
                  disabled
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="gender"
                  value="option2"
                  disabled
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Birthday</label>
              <input type="text" className="form-control" readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Date Create</label>
              <input type="text" className="form-control" readOnly />
            </div>
            <div className="mb-3 d-flex">
              <label className="form-label me-2">Active</label>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
          </div>
        </Modal_>
      </div>
    </>
  );
}
