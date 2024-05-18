import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../../../css/admin/overview.css";

export default function Order() {
    const chartRef = useRef(null);
    const [progressData, setProgressData] = useState([]);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
  
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
  
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Completed", "Cancelled", "Delivery", "Refund"],
          datasets: [
            {
              label: "Orders",
              data: progressData,
              backgroundColor: ["#36a2eb", "#ffcd56", "#4caf50", "#ff6384"],
            },
          ],
        },
      });
    }, [progressData]);
  
    useEffect(() => {
      const initialData = [81, 42, 31, 51];
      setProgressData(initialData);
    }, []);

  return (
    <>
      <div className="overview-order-container shadow">
        <div className="overview-progress">
          <h3 className="overview-title">Overview of orders</h3>
          <div className="overview-progress-item">
            <h4 className="overview-progress-text complete">
              Orders To Completed
            </h4>
            <div className="overview-progress-bar">
              <ProgressBar
                variant="info"
                now={81}
                className="progress-bar complete"
                onClick={() => setProgressData((prevData) => [...prevData, 81])}
              />
            </div>
          </div>
          <div className="overview-progress-item">
            <h4 className="overview-progress-text cancelled">
              Orders To Cancelled
            </h4>
            <div className="overview-progress-bar">
              <ProgressBar
                variant="warning"
                now={42}
                className="progress-bar cancelled"
                onClick={() => setProgressData((prevData) => [...prevData, 42])}
              />
            </div>
          </div>
          <div className="overview-progress-item">
            <h4 className="overview-progress-text delivery">
              Orders To Delivery
            </h4>
            <div className="overview-progress-bar">
              <ProgressBar
                variant="success"
                now={31}
                className="progress-bar delivery"
                onClick={() => setProgressData((prevData) => [...prevData, 31])}
              />
            </div>
          </div>
          <div className="overview-progress-item">
            <h4 className="overview-progress-text refun">Orders To Refun</h4>
            <div className="overview-progress-bar">
              <ProgressBar
                variant="danger"
                now={51}
                className="progress-bar refun"
                onClick={() => setProgressData((prevData) => [...prevData, 51])}
              />
            </div>
          </div>
        </div>
        <div className="overview-chart">
          <canvas ref={chartRef} className="chart"/>
        </div>
      </div>
    </>
  );
}