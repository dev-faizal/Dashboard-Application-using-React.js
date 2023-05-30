import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import BarGraph from "./components/Bar/Bar";
import PieChart from "./components/Doughnut/Pie";
import TotalNumbers from "./components/TotalNumbers/TotalNumbers";
import LineChart from "./components/Line/Line";
import CardInfo from "./components/CardInfo/CardInfo";

// Inline css has been used throughout the Application, later can integrate to external file or
// use CSS frameworks(TailwindCSS,ChakraUI etc..)

const requirmentData = [
  {
    id: "REQ-001",
    clientName: "Client A",
    role: "Software Developer",
    maxCTC: 1200000,
    minCTC: 800000,
    numOfPositions: 5,
    status: "Active",
  },
  {
    id: "REQ-002",
    clientName: "Client B",
    role: "Software Engineer",
    maxCTC: 1000000,
    minCTC: 600000,
    numOfPositions: 3,
    status: "Inactive",
  },
  {
    id: "REQ-003",
    clientName: "Client C",
    role: "UI/UX Designer",
    maxCTC: 800000,
    minCTC: 500000,
    numOfPositions: 7,
    status: "Active",
  },
  {
    id: "REQ-004",
    clientName: "Client D",
    role: "Quality Assurance Engineer",
    maxCTC: 1500000,
    minCTC: 900000,
    numOfPositions: 2,
    status: "Active",
  },
  {
    id: "REQ-005",
    clientName: "Client E",
    role: "Frontend Developer",
    maxCTC: 1200000,
    minCTC: 800000,
    numOfPositions: 5,
    status: "Active",
  },
  {
    id: "REQ-006",
    clientName: "Client F",
    role: "Backend Developer",
    maxCTC: 1000000,
    minCTC: 600000,
    numOfPositions: 3,
    status: "Inactive",
  },
  {
    id: "REQ-007",
    clientName: "Client G",
    role: "QA Tester",
    maxCTC: 800000,
    minCTC: 500000,
    numOfPositions: 7,
    status: "Active",
  },
  {
    id: "REQ-008",
    clientName: "Client H",
    role: "BA Analyst",
    maxCTC: 1500000,
    minCTC: 900000,
    numOfPositions: 2,
    status: "Active",
  },
];

const candiDateData = [
  {
    id: 1,
    requirementId: "REQ-001",
    candidateName: "John Doe",
    offeredCTC: 1200000,
    discoveredOn: "2023-05-15",
    discoveredBy: "Jane Smith",
    status: "Selected",
  },
  {
    id: 2,
    requirementId: "REQ-002",
    candidateName: "Jane Doe",
    offeredCTC: 900000,
    discoveredOn: "2023-05-20",
    discoveredBy: "John Smith",
    status: "Dropped",
  },
  {
    id: 3,
    requirementId: "REQ-001",
    candidateName: "Alice Johnson",
    offeredCTC: 1500000,
    discoveredOn: "2023-05-10",
    discoveredBy: "Robert Anderson",
    status: "Joined",
  },
  {
    id: 4,
    requirementId: "REQ-004",
    candidateName: "Sarah Berry",
    offeredCTC: 1100000,
    discoveredOn: "2023-02-20",
    discoveredBy: "Cliston Anderson",
    status: "Ongoing",
  },
  {
    id: 5,
    requirementId: "REQ-003",
    candidateName: "Chris Hems",
    offeredCTC: 2000000,
    discoveredOn: "2023-01-10",
    discoveredBy: "Robert Davis",
    status: "Selected",
  },
  {
    id: 6,
    requirementId: "REQ-006",
    candidateName: "Alan Loi",
    offeredCTC: 800000,
    discoveredOn: "2023-05-10",
    discoveredBy: "Chris brews",
    status: "Joined",
  },
  {
    id: 7,
    requirementId: "REQ-007",
    candidateName: "Alice Johnson",
    offeredCTC: 1400000,
    discoveredOn: "2023-05-10",
    discoveredBy: "Robert Anderson",
    status: "Ongoing",
  },
  {
    id: 8,
    requirementId: "REQ-008",
    candidateName: "Park Risie",
    offeredCTC: 2200000,
    discoveredOn: "2023-06-17",
    discoveredBy: "Rob Joe",
    status: "Dropped",
  },
  {
    id: 9,
    requirementId: "REQ-001",
    candidateName: "Chris Mark",
    offeredCTC: 1200000,
    discoveredOn: "2023-05-21",
    discoveredBy: "Alexandar jay",
    status: "Selected",
  },
  {
    id: 10,
    requirementId: "REQ-008",
    candidateName: "Alex Mark",
    offeredCTC: 900000,
    discoveredOn: "2023-05-21",
    discoveredBy: "Mister clay",
    status: "Dropped",
  },
];

const reqtableHeadings = [
  "id",
  "Client Name",
  "role",
  "max CTC",
  "min CTC",
  "no. of position",
  "Status",
];

const candidatetableHeadings = [
  "id",
  "Requirement id",
  "Candidate Name",
  "Offered CTC",
  "Discovered On (Date)",
  "Discovered By (Name of member)",
  "Status(Selection/Ongoing/Dropped/Selected/Joined)",
];

const barData = {
  labels: requirmentData?.map((item) => item.role),
  datasets: [
    {
      label: "Openings",
      data: requirmentData?.map((item) => item.numOfPositions),
      backgroundColor: requirmentData?.map((item) =>
        item.status == "Active" ? "rgba(75, 192, 192, 0.6)" : "red"
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
  }, [requirmentData]);

  const cardData = [
    { title: "Offer Acceptance Rate", totalValue: "79%" },
    { title: "Total Openings", totalValue: totalOpenings },
    { title: "Awaiting application", totalValue: 14 },
    { title: "Employee Count", totalValue: 400 },
    { title: "Applications Rejected", totalValue: 23 },
  ];

  const handledetails = (person) => {
    setShowCard(true)
    const filterReqCard = requirmentData.filter(
      (item) => item.id == person.requirementId
    );
    const filterCandidateCard = candiDateData.filter(
      (item) => item.requirementId == person.requirementId
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
      <div className="App">
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
            <div>
              {showCard && <CardInfo cardData={selectedCard} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
