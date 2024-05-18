import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../css/admin/nav-admin.css";

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <button
        className="btn btn-primary d-md-none"
        onClick={toggleNavbar}
        style={{
          position: "fixed",
          top: "20px",
          left: "10px",
          zIndex: "1100",
          backgroundColor: "#004aad",
          border: "1px solid #004aad",
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav
        className={`navbar-vertical d-flex flex-column ${
          isCollapsed ? "collapsed" : ""
        }`}
      >
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <div className="d-flex">
              <span className="nav-title nav-link">Management</span>
              <hr />
            </div>
            <ul className="nav-sub nav nav-pills flex-column">
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/overview"}
                  className="nav-link active"
                >
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/accounts"}
                  className="nav-link"
                >
                  Accounts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/categories"}
                  className="nav-link"
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/products"}
                  className="nav-link"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/sizes-images"}
                  className="nav-link"
                >
                  Sizes & Images
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/orders"}
                  className="nav-link"
                >
                  Orders
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <div className="d-flex">
              <span className="nav-title nav-link">Analytics</span>
              <hr />
            </div>
            <ul className="nav-sub nav nav-pills flex-column">
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/analytics/orders"}
                  className="nav-link"
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/analytics/products"}
                  className="nav-link"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/analytics/accounts"}
                  className="nav-link"
                >
                  Accounts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/analytics/revenue"}
                  className="nav-link"
                >
                  Revenue
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/sizes-images"}
                  className="nav-link"
                >
                  Sizes & Images
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/the-sneaker-house/managemen/orders"}
                  className="nav-link"
                >
                  Orders
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <div className="d-flex">
              <span className="nav-title nav-link">Setting</span>
              <hr />
            </div>
          </li>
          <ul className="nav-sub nav nav-pills flex-column">
            <li className="nav-item">
              <Link
                to={"/the-sneaker-house/analytics/infomation"}
                className="nav-link"
              >
                Infomation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/the-sneaker-house/analytics/logout"}
                className="nav-link"
              >
                Logout
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
}
