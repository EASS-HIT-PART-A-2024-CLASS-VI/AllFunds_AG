import React from 'react';
import { FaHome, FaChartLine, FaCoins, FaUserTie, FaInfoCircle } from "react-icons/fa";
import BackgroundMusic from './BackgroundMusic';
import { motion } from "framer-motion";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <header 
      className="navbar" 
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: "10px 0",
      }}
    >
      <div>
        <BackgroundMusic />
      </div>
      <motion.button
        className="nav-button"
        onClick={() => setActiveTab("home")}
        whileHover={{ scale: 1.15 }}
      >
        <FaHome /> בית
      </motion.button>
      <motion.button
        className="nav-button"
        onClick={() => setActiveTab("funds")}
        whileHover={{ scale: 1.15 }}
      >
        <FaCoins /> רשימת קרנות
      </motion.button>
      <motion.button
        className="nav-button"
        onClick={() => setActiveTab("comparison")}
        whileHover={{ scale: 1.15 }}
      >
        <FaChartLine /> השוואה
      </motion.button>
      <motion.button
        className="nav-button"
        onClick={() => setActiveTab("management")}
        whileHover={{ scale: 1.15 }}
      >
        ניהול עצמאי
      </motion.button>
      <motion.button
        className="nav-button"
        onClick={() => setActiveTab("advisor")}
        whileHover={{ scale: 1.15 }}
      >
        <FaUserTie /> יועץ קרנות AI
      </motion.button>
      <motion.button
        className="nav-button"
        onClick={() => setActiveTab("about")}
        whileHover={{ scale: 1.15 }}
      >
        <FaInfoCircle /> הכירו אותי
      </motion.button>
    </header>
  );
};

export default Navbar;
