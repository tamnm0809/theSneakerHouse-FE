import { Link } from "react-router-dom";
import "../../../css/admin/header-admin.css";

export default function header() {
  return (
    <>
      <header className="header shadow">
        <Link className="header-logo">
          <img
            src="https://res.cloudinary.com/dchefcs07/image/upload/v1714973152/theSneakerHouse/uo41ew4pdolksmqyimkd.png"
            alt="Logo"
          />
        </Link>
        <div className="header-icon">
          <ul className="header-ul">
            <li className="header-item">
              <Link className="header-li-link">
                <i className="fa-solid fa-envelope"></i>
              </Link>
            </li>
            <li className="header-item">
              <Link className="header-li-link">
                <i className="fa-solid fa-bell"></i>
              </Link>
            </li>
            <li className="header-item">
              <Link className="header-li-link">
                <i className="fa-solid fa-user"></i>
                <span className="mx-3">Your name</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
