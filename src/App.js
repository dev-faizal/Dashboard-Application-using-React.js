import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import BarGraph from "./components/Bar/Bar";
import PieChart from "./components/Doughnut/Pie";
import TotalNumbers from "./components/TotalNumbers/TotalNumbers";
import LineChart from "./components/Line/Line";
import CardInfo from "./components/CardInfo/CardInfo";
import {
  candiDateData,
  candidatetableHeadings,
  reqtableHeadings,
  requirmentData,
} from "./data";

// Inline css has been used throughout the Application, later can integrate to external file or
// use CSS frameworks(TailwindCSS,ChakraUI etc..)

const barData = {
  labels: requirmentData?.map((item) => item.role),
  datasets: [
    {
      label: "Openings",
      data: requirmentData?.map((item) => item.numOfPositions),
      backgroundColor: requirmentData?.map((item) =>
        item.status === "Active" ? "rgba(75, 192, 192, 0.6)" : "red"
      ),
    },
  ],
};

const piedata = {
  labels: ["Selected", "Joined", "Dropped", "Ongoing"],
  datasets: [
    {
      data: [25, 35, 25, 15],
      backgroundColor: ["#e8e348", "#7ae640", "#d040e6", "#331919"],
    },
  ],
};

const lineData = {
  labels: candiDateData?.map((item) => item.candidateName),
  datasets: [
    {
      label: "Offered CTC",
      data: candiDateData?.map((item) => item.offeredCTC),
      fill: true,
      borderColor: "#007bff",
    },
  ],
};

const App = () => {

  const [open, setOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [totalOpenings, setTotalOpenings] = useState(0);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    const FindOpenings = requirmentData.map((item) => item.numOfPositions);
    const total = FindOpenings.reduce((acc, cur) => +acc + +cur, 0);
    setTotalOpenings(total);
  }, [totalOpenings]);

  const cardData = [
    { title: "Offer Acceptance Rate", totalValue: "79%" },
    { title: "Total Openings", totalValue: totalOpenings },
    { title: "Awaiting application", totalValue: 14 },
    { title: "Employee Count", totalValue: 400 },
    { title: "Applications Rejected", totalValue: 23 },
  ];

  const handledetails = (person) => {
    setShowCard(true);
    const filterReqCard = requirmentData.filter(
      (item) => item.id === person.requirementId
    );
    const filterCandidateCard = candiDateData.filter(
      (item) => item.requirementId === person.requirementId
    );
    setSelectedCard([...filterReqCard, ...filterCandidateCard]);
  };

  return (
    <>
      <p className="job-dash"> Dashboard Application</p>
      <TotalNumbers cardData={cardData} />
      <div className="charts-visual">
        <PieChart labelData={piedata} />
        <BarGraph labelData={barData} />
        <LineChart lineData={lineData} />
      </div>
      <div className="Requirements">
        <h1>Requirements</h1>
        <Table data={requirmentData} tableHeadings={reqtableHeadings} />
      </div>
      <button onClick={() => setOpen(!open)} className="candidate-button">
        View Candidate Discoveries
      </button>
      {open && (
        <>
          <div className="candidate-card">
            <div className="candidate-discoverirs">
              <h1>Candidate Discoveries</h1>
              <Table
                key={candiDateData.id}
                data={candiDateData}
                tableHeadings={candidatetableHeadings}
                handledetails={(person) => handledetails(person)}
              />
            </div>
            <div>{showCard && <CardInfo cardData={selectedCard} />}</div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
