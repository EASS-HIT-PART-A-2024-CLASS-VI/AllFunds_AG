import React from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const { scrollY } = useViewportScroll();
  const yImage1 = useTransform(scrollY, [0, 300], [0, -50]);
  const yImage2 = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      style={{ padding: "30px", lineHeight: "2", textAlign: "center" }}
    >
      <motion.h1
        style={{ marginBottom: "20px" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        ברוכים הבאים ל-AllFunds!
      </motion.h1>
      <motion.p
        style={{ marginBottom: "20px", fontSize: "1.1rem" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        AllFunds הוא הפורטל המקצועי והמוביל בתחום מוצרי הקרנות, המקום שבו תוכלו לקבל את כל המידע העדכני, המעמיק והמקצועי שיעזור לכם לקבל את החלטות ההשקעה הנכונות.
      </motion.p>
      <motion.p
        style={{ marginBottom: "20px", fontSize: "1.1rem" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        אנו כאן כדי להוות עבורכם את היועץ האישי והאמין – עם ניסיון של שנים בתחום, אנו מציגים ניתוחים כלכליים מעמיקים, המלצות מקצועיות, כתבות איכותיות וכלים מתקדמים להשוואת מוצרים פיננסיים.
      </motion.p>
      <motion.img
        src="https://psychology.iresearchnet.com/wp-content/uploads/2016/01/Expertise.png"
        alt="AllFunds Expertise"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          width: "50%",  // Reduced from 80%
          maxWidth: "600px",  // Added max-width
          margin: "30px auto",
          display: "block",
          borderRadius: "10px",
          y: yImage1
        }}
      />
      <motion.p
        style={{ marginBottom: "20px", fontSize: "1.1rem" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        באתר זה תמצאו מידע מפורט על קרנות השתלמות, קופות גמל, פוליסות חיסכון וקרנות פנסיה – כל זאת כדי לאפשר לכם להבין את היתרונות של כל מוצר, להשוות בין אפשרויות ולהגיע להחלטות מושכלות.
      </motion.p>
      <motion.img
        src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3"
        alt="Invest with Confidence"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          width: "50%",  // Reduced from 80%
          maxWidth: "600px",  // Added max-width
          margin: "30px auto",
          display: "block",
          borderRadius: "10px",
          y: yImage2
        }}
      />
      <motion.p
        style={{ marginBottom: "20px", fontSize: "1.1rem" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        כל החומרים, הנתונים והכלים שאנו מספקים נועדו לתת לכם את ההיתרון בשוק ההשקעות. אנחנו כאן כדי להיות השותף האישי שלכם להצלחה – כי כשמדובר בהשקעות, כל פרט חשוב.
      </motion.p>
    </motion.div>
  );
};

export default Home;