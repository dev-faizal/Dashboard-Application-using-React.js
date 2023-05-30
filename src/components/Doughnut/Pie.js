import React from "react";
import { Doughnut  } from "react-chartjs-2";



const options = {
    plugins: {
        legend: {
          display: true,
        },
      },
    
  maintainAspectRatio: false,
};

const PieChart = ({labelData}) => {
  return (
    <div style={{width:"20%",border:"1px solid #b7c7be",backgroundColor:'white',padding:'10px' }}>
      <Doughnut data={labelData} options={options} />
    </div>
  );
};

export default PieChart;
