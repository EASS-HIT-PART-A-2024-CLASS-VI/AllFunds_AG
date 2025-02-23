import React from 'react';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FundsList = ({ funds, error, loading }) => {
  const headerStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#343a40", // Changed from light to dark
    color: "#fff"               // White text
  };

  if (loading) return <p style={{ textAlign: "center" }}>טוען...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  if (!funds || (Array.isArray(funds) && funds.length === 0))
    return <p style={{ textAlign: "center" }}>אין נתונים להצגה</p>;

  if (Array.isArray(funds)) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>רשימת קרנות</h2>
        <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
          <thead>
            <tr>
              <th style={headerStyle}>שם</th>
              <th style={headerStyle}>חודש</th>
              <th style={headerStyle}>שנה</th>
              <th style={headerStyle}>3 שנים</th>
              <th style={headerStyle}>5 שנים</th>
            </tr>
          </thead>
          <tbody>
            {funds.map((fund) => (
              <tr key={fund.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.month_performance}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.last_year}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.last_3_years}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.last_5_years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    );
  } else if (typeof funds === "object") {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>רשימת קרנות</h2>
        {Object.keys(funds).map((category) => (
          <motion.div
            key={category}
            style={{ marginBottom: "40px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>מסלול: {category}</h3>
            <p style={{ textAlign: "center", marginBottom: "15px" }}>
              במסלול זה מוצגים נתונים לפי ביצועים חודשיים, שנתיים, ל-3 שנים ול-5 שנים. אנא עיינו בנתונים בעיון.
            </p>
            <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
              <thead>
                <tr>
                  <th style={headerStyle}>שם</th>
                  <th style={headerStyle}>חודש</th>
                  <th style={headerStyle}>שנה</th>
                  <th style={headerStyle}>3 שנים</th>
                  <th style={headerStyle}>5 שנים</th>
                </tr>
              </thead>
              <tbody>
                {funds[category].map((fund) => (
                  <tr key={fund.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.name}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.month_performance}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.last_year}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.last_3_years}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{fund.last_5_years}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default FundsList;