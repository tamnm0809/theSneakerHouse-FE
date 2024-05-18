import React from "react";
import { Line } from "react-chartjs-2";
import "../../../css/admin/overview.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SellPro() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Amount",
        data: [
          400000, 200000, 700000, 400000, 390000, 120000, 370000, 150000,
          180000, 1100000, 580000, 430000, 1200000,
        ],
        fill: false,
        borderColor: "#004AAD",
        backgroundColor: "#004AAD",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  

  return (
    <div className="sell shadow">
      <div className="sell-product">
        <div className="card text-center">
          <h5 className="card-title">BEST - SELLING PRODUCT</h5>
          <img
            src="https://res.cloudinary.com/dchefcs07/image/upload/v1715859780/theSneakerHouse/ta6fpkfph6pqeir4nikv.jpg"
            className="card-img-top p-2"
            alt="Product"
          />
          <div className="card-body">
            <p className="card-text">Name of product</p>
          </div>
            <p className="card-amount">Amount: <span className="amount">20.000.000</span></p>
        </div>
      </div>
      <div className="sell-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
