import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/admin/nav-admin.css";

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    {
      name: "Management",
      subLinks: [
        {
          name: "Overview",
          path: "/the-sneaker-house/admin/management/overview",
        },
        {
          name: "Accounts",
          path: "/the-sneaker-house/admin/management/accounts",
        },
        {
          name: "Sections",
          path: "/the-sneaker-house/admin/management/categories",
        },
        {
          name: "Products",
          path: "/the-sneaker-house/admin/management/products",
        },
        {
          name: "Sizes & Images",
          path: "/the-sneaker-house/admin/management/sizes-images",
        },
        {
          name: "Orders",
          path: "/the-sneaker-house/admin/management/orders",
        },
      ],
    },
    {
      name: "Analytics",
      subLinks: [
        {
          name: "Order",
          path: "/the-sneaker-house/admin/analytics/order",
        },
        {
          name: "Product",
          path: "/the-sneaker-house/admin/analytics/product",
        },
        {
          name: "Account",
          path: "/the-sneaker-house/admin/analytics/account",
        },
        {
          name: "Revenue",
          path: "/the-sneaker-house/admin/analytics/revenue",
        },
      ],
    },
    {
      name: "Setting",
      subLinks: [
        {
          name: "Information",
          path: "/the-sneaker-house/admin/setting/information",
        },
        {
          name: "Log out",
          path: "/the-sneaker-house/logout",
        },
      ],
    },
  ];

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (window.innerWidth < 768) {
      setIsCollapsed(!isCollapsed);
    }
  };

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
          bottom: isCollapsed ? "2rem" : "",
          top: isCollapsed ? "auto" : "15px",
          left: isCollapsed ? "45%" : "5px",
          zIndex: "1100",
          backgroundColor: "#004aad",
          border: "1px solid #1d2c69",
        }}
      >
        {isCollapsed ? <span>X</span> : <i className="fa-solid fa-bars"></i>}
      </button>
      <nav
        className={`navbar-vertical d-flex flex-column ${
          isCollapsed ? "collapsed" : ""
        }`}
      >
        <ul className="nav nav-pills flex-column">
          {navLinks.map((navItem) => (
            <li className="nav-item" key={navItem.name}>
              <div className="d-flex">
                <span className="nav-title nav-link">{navItem.name}</span>
                <hr />
              </div>
              <ul className="nav-sub nav nav-pills flex-column">
                {navItem.subLinks.map((subLink) => (
                  <li className="nav-item" key={subLink.name}>
                    <Link
                      to={subLink.path}
                      className={`nav-link ${
                        activeLink === subLink.name ? "active" : ""
                      }`}
                      onClick={() => handleNavLinkClick(subLink.name)}
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
