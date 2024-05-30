import React from "react";
import Sellerpro from "./SellPro";
import Order from "./Order";
import "../../../css/admin/overview.css";

export default function Overview() {
  return (
    <>
      <div className="overview container-fluid p-0 mx-1">
        {<Sellerpro />}
        {<Order />}
      </div>
    </>
  );
}
