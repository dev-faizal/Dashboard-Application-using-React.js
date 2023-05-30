import React from "react";
import './CardInfo.css'
const CardInfo = ({ cardData }) => {
  return (
    <div className="deatils-card">
          <div className="cardItem">
         
            <h2>ID: {cardData[0]?.id}</h2>
            <p>Candidate Name: {cardData[1]?.candidateName}</p>
            <p>Client Name: {cardData[0]?.clientName}</p>
            <p>Role: {cardData[0]?.role}</p>
            <p>Maximun CTC: {cardData[0]?.maxCTC}</p>
            <p>Offered CTC: {cardData[1]?.offeredCTC}</p>
            <p>Discovered On: {cardData[1]?.discoveredOn}</p>
          </div>
       
    </div>
  );
};

export default CardInfo;
