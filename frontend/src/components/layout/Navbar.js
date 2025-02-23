import React from 'react';
import { FaHome, FaChartLine, FaCoins, FaUserTie } from "react-icons/fa";
import BackgroundMusic from './BackgroundMusic';
import { motion } from "framer-motion";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <header className="navbar">
      <div style={{ flex: 1, textAlign: "center" }}>
        <BackgroundMusic />
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <motion.button
          className="nav-button"
          onClick={() => setActiveTab("home")}
          whileHover={{ scale: 1.15 }}
        >
          <FaHome /> בית
        </motion.button>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <motion.button
          className="nav-button"
          onClick={() => setActiveTab("funds")}
          whileHover={{ scale: 1.15 }}
        >
          <FaCoins /> רשימת קרנות
        </motion.button>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <motion.button
          className="nav-button"
          onClick={() => setActiveTab("comparison")}
          whileHover={{ scale: 1.15 }}
        >
          <FaChartLine /> השוואה
        </motion.button>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <motion.button
          className="nav-button"
          onClick={() => setActiveTab("management")}
          whileHover={{ scale: 1.15 }}
        >
          ניהול עצמאי
        </motion.button>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <motion.button
          className="nav-button"
          onClick={() => setActiveTab("advisor")}
          whileHover={{ scale: 1.15 }}
        >
          <FaUserTie /> יועץ קרנות AI
        </motion.button>
      </div>
    </header>
  );
};

export default Navbar;