import React from "react";
import { Link } from "react-router-dom";
import "../../../css/user/nav.css";

export default function nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand">
            <img
              src="https://res.cloudinary.com/dchefcs07/image/upload/v1714973152/theSneakerHouse/uo41ew4pdolksmqyimkd.png"
              alt="Logo"
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Sneaker
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Adidas</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Nike</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Puma</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Vans</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">FIla</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">MLB</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Accessories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Caps</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Socks</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Clothing
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Top</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Pants</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link">sale off</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">news</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="collapse navbar-collapse text-decoration-none"id="navbarSupportedContent">
            <span className="span-cart">Cart / Amout</span>
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}
