import React from "react";
import { Line } from "react-chartjs-2";


const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const LineChart = ({lineData}) => {
  return (
    <div
      style={{
        width: "30%",
        border: "1px solid #b7c7be",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <Line data={lineData} options={options} />
    </div>
  );
};

export default LineChart;
