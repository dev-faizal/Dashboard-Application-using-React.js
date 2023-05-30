import React from "react";
import './Table.css'


const tableDataStyles = { border: "2px solid #ffd8d8", padding: "7px",cursor:'pointer' };

// Inline css has been used throughout the Application, later can integrate to external file or
// use CSS frameworks(TailwindCSS,ChakraUI etc..)

const Table = ({ data, tableHeadings,handledetails }) => {

  const handleShowDetails = (id) => {
    handledetails(id);
  };

  return (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "2px solid #ffd8d8",
          borderRadius : "20px"
        }}
      >
        <thead>
          <tr>
            {tableHeadings?.map((tName, index) => (
              <th key={index} style={tableDataStyles}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {tName}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((person, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "white" : "#fce6e6" }}
            >
              <td style={tableDataStyles}>{person.id}</td>
              <td style={tableDataStyles}>{person?.clientName || person?.requirementId}</td>
              <td style={tableDataStyles}>{person.role || person.candidateName}</td>
              <td style={tableDataStyles}>{person.maxCTC || person.offeredCTC}</td>
              <td style={tableDataStyles}>{person.minCTC || person.discoveredOn}</td>
              <td style={tableDataStyles}>{person.numOfPositions || person.discoveredBy}</td>
              <td className="text-status" onClick={()=>handleShowDetails(person)}>{person.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;
