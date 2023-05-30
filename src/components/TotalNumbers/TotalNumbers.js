import React from "react";
import './TotalNumbers.css'

const TotalNumbers = ({ cardData }) => {
  return (
    <div className="card-row">
      {cardData.map((item, index) => {
        return (
          <div className="card">
            <h3>{item.title}</h3>
            <p className="total-value">{item.totalValue}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TotalNumbers;
