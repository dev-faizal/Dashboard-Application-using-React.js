import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true, 
    },
  },
};

const BarGraph = ({ labelData }) => {
  return (
    <div style={{ width: "40%",border: "1px solid #b7c7be",backgroundColor:'white',padding:'10px'}}>
      <Bar data={labelData} options={options} />
    </div>
  );
};

export default BarGraph;
