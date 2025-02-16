import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const SelfManagement = () => {
  // Initialize state from localStorage to persist user entries across navigation
  const [companyName, setCompanyName] = useState("");
  const [fundProduct, setFundProduct] = useState("קרנות השתלמות");
  const [routeName, setRouteName] = useState("");
  const [amount, setAmount] = useState("");
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("selfManagementEntries");
    return stored ? JSON.parse(stored) : [];
  });

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("selfManagementEntries", JSON.stringify(entries));
  }, [entries]);

  // Handle form submission to add a new investment entry
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      companyName.trim() === "" ||
      routeName.trim() === "" ||
      amount.trim() === ""
    ) {
      return;
    }
    const newEntry = {
      companyName,
      fundProduct,
      routeName,
      amount: parseFloat(amount),
    };
    setEntries([...entries, newEntry]);
    // Clear form inputs
    setCompanyName("");
    setRouteName("");
    setAmount("");
  };

  // Delete an entry by index
  const deleteEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  // Download entries as CSV
  const downloadCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    // Header row (in Hebrew)
    csvContent += "שם חברה,מוצר קרן,שם מסלול,סכום\n";
    entries.forEach((entry) => {
      csvContent += `${entry.companyName},${entry.fundProduct},${entry.routeName},${entry.amount}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "self_management_funds.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download entries as PDF using jsPDF and autoTable
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("ניהול השקעות עצמאי", 14, 20);
    const headers = [["שם חברה", "מוצר קרן", "שם מסלול", "סכום"]];
    const data = entries.map((e) => [
      e.companyName,
      e.fundProduct,
      e.routeName,
      e.amount.toString(),
    ]);
    doc.autoTable({
      startY: 30,
      head: headers,
      body: data,
    });
    doc.save("self_management_funds.pdf");
  };

  // Group entries by fundProduct to produce one pie chart per product type
  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.fundProduct]) {
      acc[entry.fundProduct] = [];
    }
    acc[entry.fundProduct].push(entry);
    return acc;
  }, {});

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>ניהול השקעות עצמאי</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Company Name Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ marginBottom: "5px" }}>שם חברה:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="הכנס שם חברה"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minWidth: "250px",
            }}
          />
        </div>
        {/* Fund Product Dropdown */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ marginBottom: "5px" }}>מוצר קרן:</label>
          <select
            value={fundProduct}
            onChange={(e) => setFundProduct(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minWidth: "250px",
            }}
          >
            <option value="קרנות השתלמות">קרנות השתלמות</option>
            <option value="קופות גמל">קופות גמל</option>
            <option value="קופות גמל להשקעה">קופות גמל להשקעה</option>
            <option value="פוליסות חיסכון">פוליסות חיסכון</option>
            <option value="קרנות פנסיה">קרנות פנסיה</option>
          </select>
        </div>
        {/* Route Name Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ marginBottom: "5px" }}>שם מסלול:</label>
          <input
            type="text"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            placeholder="הכנס שם מסלול"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minWidth: "250px",
            }}
          />
        </div>
        {/* Amount Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ marginBottom: "5px" }}>סכום:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="הכנס סכום"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minWidth: "250px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            backgroundColor: "#36A2EB",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          שמירה
        </button>
      </form>
      {/* Download buttons */}
      <div style={{ marginBottom: "30px" }}>
        <button
          onClick={downloadCSV}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            backgroundColor: "#4BC0C0",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          הורד כ- CSV
        </button>
        <button
          onClick={downloadPDF}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            backgroundColor: "#9966FF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          הורד כ- PDF
        </button>
      </div>
      {/* Display entries with delete buttons */}
      <div style={{ marginBottom: "30px" }}>
        <h3>רשימת השקעות</h3>
        {entries.length === 0 ? (
          <p>אין רשומות להצגה</p>
        ) : (
          <table
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "80%",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  שם חברה
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  מוצר קרן
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  שם מסלול
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  סכום
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  פעולות
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {entry.companyName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {entry.fundProduct}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {entry.routeName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {entry.amount}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <button
                      onClick={() => deleteEntry(index)}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "4px",
                        backgroundColor: "#FF6384",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      מחיקה
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Render one pie chart per fund product */}
      {Object.keys(groupedEntries).map((product) => {
        const group = groupedEntries[product];
        const total = group.reduce((acc, entry) => acc + entry.amount, 0);
        const chartData = {
          labels: group.map(
            (entry) => `${entry.companyName} - ${entry.routeName}`
          ),
          datasets: [
            {
              data: group.map((entry) => entry.amount),
              backgroundColor: group.map((_, index) => {
                const colors = [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                  "#FF9F40",
                ];
                return colors[index % colors.length];
              }),
              hoverBackgroundColor: group.map((_, index) => {
                const colors = [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                  "#FF9F40",
                ];
                return colors[index % colors.length];
              }),
            },
          ],
        };
        return (
          <div key={product} style={{ maxWidth: "500px", margin: "30px auto" }}>
            <h3>
              {product} - פיזור השקעות (סה"כ: {total})
            </h3>
            <Pie data={chartData} />
          </div>
        );
      })}
    </div>
  );
};

export default SelfManagement;
