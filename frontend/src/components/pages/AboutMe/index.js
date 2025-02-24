// frontend/src/components/pages/AboutMe/index.js
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      style={{
        padding: "30px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h2>הכירו אותי</h2>
      <p>שלום, אני [שמך]. אני [תיאור מקצועי קצר].</p>
      <section>
        <h3>ביוגרפיה מקצועית</h3>
        <p>[הכנס את הביוגרפיה]</p>
      </section>
      <section>
        <h3>פורטפוליו</h3>
        <p>[קישורים או תיאורים של פרויקטים]</p>
      </section>
      <section>
        <h3>קורות חיים</h3>
        <p>[קישור/הצגה של קורות החיים]</p>
      </section>
      <section>
        <h3>רשתות חברתיות מקצועיות</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">GitHub</a></li>
          {/* Add more links as needed */}
        </ul>
      </section>
    </motion.div>
  );
};

export default AboutMe;
