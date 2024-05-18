import React from "react";
import Sellerpro from "./SellPro";
import Order from "./Order";
import Header from "../common/Header";
import "../../../css/admin/overview.css";
import Navigation from "../common/Navigation";

export default function Overview() {
  return (
    <>
      <div className="container-fluid p-0 m-0">{<Header />}</div>
      <div className="container-fluid p-0 m-0 d-flex">
        {<Navigation />}
        <div className="overview container-fluid p-0 m-0">
          {<Sellerpro />}
          {<Order />}
        </div>
      </div>
    </>
  );
}
