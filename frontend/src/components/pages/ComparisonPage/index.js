import React from 'react';
import { motion } from "framer-motion";
import InvestmentPrediction from './InvestmentPrediction';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ComparisonPage = () => {
  return (
    <motion.div
      style={{ padding: "30px", lineHeight: "2", textAlign: "center" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2>השוואה</h2>
      <p>
        בעמוד זה תוכלו למצוא לא רק השוואה בין נתוני ביצוע של מוצרים פיננסיים שונים, אלא גם כלי חיזוי מתקדם המאפשר לכם לבדוק מה היה הערך העתידי של ההשקעה – בהתאם לפרמטרים שבחרתם, לפני תקופת זמן שבחרתם.
      </p>
      <p>
        לאחר בחירת סוג הקרן ותכנית מסוימת מתוך הרשימה, תוכלו להזין סכום השקעה ובחירת תקופה (שנה, 3 שנים או 5 שנים). המערכת מחשבת את הערך העתידי באמצעות נוסחת ריבית דריבית ומציגה זאת בצורה גרפית, עם גרף קו המדגים את צמיחת ההשקעה בכל שנה לאורך התקופה.
      </p>
      <p>
        הכל נעשה בצורה אובייקטיבית וברורה, כך שתוכלו לקבל תמונה אמינה של מגמות השוק – כי ככה זה אצל AllFunds, האמת מוצגת שחור על גבי לבן, "תפוחים לתפוחים, תפוזים לתפוזים"!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px auto",
          flexWrap: "wrap"
        }}
      >
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1683133438751-abb68a5c2270?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Comparison Image 1"
          style={{
            width: "40%",  // Reduced from 45%
            maxWidth: "500px",  // Added max-width
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "90%"
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1464374288807-174911d4adb9?q=80&w=990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Comparison Image 2"
          style={{ 
            width: "40%",  // Reduced from 45%
            maxWidth: "500px",  // Added max-width
            borderRadius: "10px" 
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
      <InvestmentPrediction />
    </motion.div>
  );
};

export default ComparisonPage;