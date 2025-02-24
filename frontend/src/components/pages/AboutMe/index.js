import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      style={{
        direction: "rtl",
        textAlign: "right",
        padding: "40px",
        lineHeight: "2",
        background: "linear-gradient(135deg, #ffffff, #f7f7f7)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        maxWidth: "1200px",
        margin: "40px auto",
        borderRadius: "12px",
        color: "#333",
        fontSize: "1.2rem",
      }}
    >
      {/* ניסיון מקצועי */}
      <h2
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffefba, #ffffff)",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "inline-block",
          color: "#333",
        }}
      >
        ניסיון מקצועי
      </h2>
      <hr />

      {/* Gilat Telecom – Solutions Architect & Presales Engineer */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        Gilat Telecom – Solutions Architect &amp; Presales Engineer
      </h3>
      <p>
        <strong>תפקיד:</strong> מהנדס פתרונות
      </p>
      <p>
        <strong>תקופת העסקה:</strong> יולי 2023 – היום (כ-1 שנה ו-8 חודשים)
      </p>
      <p>
        <strong>מחלקה:</strong> ממשלתית D&amp;HLS
      </p>
      <h4
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #d5f3da, #ffffff)",
          borderRadius: "10px",
          padding: "6px 12px",
          display: "inline-block",
          color: "#333",
        }}
      >
        תחומי אחריות
      </h4>
      <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <li>
          ניהול פרויקטים במגזר הממשלתי-בטחוני – ניהול תהליכי מכרזים מקצה לקצה, שלבי הצעות עסקיות (RFI, RFP, RFQ), תכנון וביצוע פרויקטים מורכבים באמצעות כלי ניהול מתקדמים ומתודולוגיות Agile, כולל קביעת יעדים, מעקב ביצועים וניהול סיכונים.
        </li>
        <li>
          תכנון ויישום ארכיטקטורת פתרונות רשת – עיצוב מערכות תקשורת מתקדמות, אינטגרציה של טכנולוגיות IP ו-RF, והטמעת פרוטוקולי תקשורת מתקדמים להעברת נתונים תוך עמידה בסטנדרטים גבוהים של אבטחת מידע ואמינות.
        </li>
        <li>BIZ-DEV in the making (;</li>
      </ul>
      <hr />

      {/* Gilat Telecom – Technical Account Manager */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        Gilat Telecom – Technical Account Manager
      </h3>
      <p>
        <strong>תקופת העסקה:</strong> ינואר 2023 – אוגוסט 2023 (8 חודשים)
      </p>
      <h4
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #d5f3da, #ffffff)",
          borderRadius: "10px",
          padding: "6px 12px",
          display: "inline-block",
          color: "#333",
        }}
      >
        תחומי אחריות
      </h4>
      <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <li>
          הפקת נהלים ודיווחים טכניים – כתיבת מסמכי נהלים, הפקת דו"חות תקופתיים וניתוח ביצועים לשיפור תהליכי עבודה והבטחת איכות השירות.
        </li>
        <li>
          זיהוי חריגות וניהול דיונים טכניים – ניטור מתמיד של ביצועי הרשת, ניתוח חריגות והובלת מפגשים טכניים למציאת פתרונות מתודולוגיים לבעיות תקשורת.
        </li>
      </ul>
      <hr />

      {/* RF Networks Professional Services */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        RF Networks Professional Services
      </h3>
      <p>
        <strong>תקופת העסקה:</strong> יולי 2022 – אוגוסט 2023 (1 שנה ו-2 חודשים)
      </p>
      <h4
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #d5f3da, #ffffff)",
          borderRadius: "10px",
          padding: "6px 12px",
          display: "inline-block",
          color: "#333",
        }}
      >
        תחומי אחריות
      </h4>
      <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <li>
          התמחות בתחום IP ורשתות תקשורת – תכנון וניהול מערכות ניהול רשת מתקדמות, כולל פתרונות לווייניים, תוך יישום שיטות לאופטימיזציה ובקרת ביצועים.
        </li>
        <li>
          ניהול מערכות ניטור ובקרה – הפעלה ואינטגרציה של מערכות מבוססות נתונים (כגון PRTG, Allot, Grafana) לניטור בזמן אמת, ניתוח ביצועים וקביעת אמצעים לשיפור תהליכי הניטור.
        </li>
      </ul>
      <hr />

      {/* כישורים וניסיון טכנולוגי מתקדם */}
      <h2
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffefba, #ffffff)",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "inline-block",
          color: "#333",
        }}
      >
        כישורים וניסיון טכנולוגי מתקדם
      </h2>
      <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <li>מומחיות בניהול פרויקטים והובלת צוותי פיתוח באמצעות מתודולוגיות Agile.</li>
        <li>כתיבת סקריפטים מתקדמים בשפת Python לאוטומציה, ניתוח נתונים ושיפור תהליכים.</li>
        <li>הבנה מעמיקה בטכנולוגיות IP, פרוטוקולי תקשורת ובניית ארכיטקטורות IT מתקדמות לאבטחת מידע ושיפור ביצועים.</li>
        <li>רקורד מוכח בפיתוח מערכות תוכנה, תכנון פתרונות מורכבים והטמעת טכנולוגיות חדשניות במגזר העסקי והממשלתי.</li>
      </ul>
      <hr />

      {/* השכלה */}
      <h2
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffefba, #ffffff)",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "inline-block",
          color: "#333",
        }}
      >
        השכלה
      </h2>
      <br />

      {/* Holon Institute of Technology */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        המכון הטכנולוגי חולון
      </h3>
      <p>
        <strong>תואר:</strong> B.Sc. במדעי המחשב
      </p>
      <p>
        <strong>תקופה:</strong> אוקטובר 2022 – יוני 2025
      </p>
      <h4
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #d5f3da, #ffffff)",
          borderRadius: "10px",
          padding: "6px 12px",
          display: "inline-block",
          color: "#333",
        }}
      >
        נושאים
      </h4>
      <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <li>אלגוריתמיקה ותורת החישוב</li>
        <li>מבני נתונים מתקדמים</li>
        <li>תכנות מונחה עצמים ופונקציונלי</li>
        <li>עקרונות הנדסת תוכנה ועיצוב ארכיטקטורה</li>
        <li>מערכות הפעלה וניהול זיכרון</li>
        <li>רשתות מחשבים ופרוטוקולי תקשורת</li>
        <li>בינה מלאכותית ולמידת מכונה</li>
        <li>מחשוב ענן וטכנולוגיות וירטואליזציה</li>
        <li>ניתוח ביצועים ואופטימיזציה</li>
      </ul>
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        מכללות ORT
      </h3>
      <p>
        <strong>דיפלומה:</strong> הנדסת תוכנה
      </p>
      <p>
        <strong>תקופה:</strong> 2018 – 2019
      </p>
      <h4
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #d5f3da, #ffffff)",
          borderRadius: "10px",
          padding: "6px 12px",
          display: "inline-block",
          color: "#333",
        }}
      >
        נושאים
      </h4>
      <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <li>Java</li>
        <li>SQL</li>
        <li>ניתוח מערכות מידע</li>
        <li>מבני נתונים</li>
        <li>אלגוריתמיקה</li>
        <li>C</li>
        <li>C#</li>
        <li>Assembly</li>
        <li>Solaris OS</li>
      </ul>
      <hr />

      {/* הסמכות והסמכות מקצועיות */}
      <h2
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffefba, #ffffff)",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "inline-block",
          color: "#333",
        }}
      >
        הסמכות והסמכות מקצועיות
      </h2>

      {/* NVIDIA */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
          alt="NVIDIA Logo"
          style={{ verticalAlign: "middle", marginLeft: "10px", height: "30px" }}
        />
        NVIDIA – BUILDING RAG AGENTS USING LLMS
      </h3>
      <p>
        <strong>נושאים:</strong> בניית agents מבוססי LLM, Retrieval-Augmented Generation (RAG), אסטרטגיות אינטגרציה ואוטומציה מתקדמת
      </p>

      {/* AWS */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS Logo"
          style={{ verticalAlign: "middle", marginLeft: "10px", height: "30px" }}
        />
        AWS Academy Graduate - AWS Academy Cloud Foundations
      </h3>
      <p>
        <strong>נושאים:</strong> מחשוב ענן, שירותי AWS, תשתיות ענן, אוטומציה בענן
      </p>

      {/* Cisco */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
          alt="Cisco Logo"
          style={{ verticalAlign: "middle", marginLeft: "10px", height: "30px" }}
        />
        Cisco CCNA
      </h3>
      <p>
        <strong>נושאים:</strong> רשתות מחשבים, פרוטוקולי תקשורת, ניהול NMS, אבטחת רשתות
      </p>

      {/* Microsoft Azure */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
          alt="Microsoft Azure Logo"
          style={{ verticalAlign: "middle", marginLeft: "10px", height: "30px" }}
        />
        Microsoft Certified: Azure Fundamentals
      </h3>
      <p>
        <strong>נושאים:</strong> יסודות ענן, שירותי Azure, ניהול תשתיות, אבטחת מידע בענן
      </p>

      {/* Ribbon */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        Ribbon Communications – Packet Course
      </h3>
      <p>
        <strong>נושאים:</strong> מערכות ניהול רשת (NMS), תעבורת נתונים, ניתוח פרוטוקולים
      </p>

      {/* Gilat Satellite Networks */}
      <h3
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd6da, #ffffff)",
          borderRadius: "15px",
          padding: "8px 16px",
          display: "inline-block",
          color: "#333",
        }}
      >
        Gilat Satellite Networks – SE-IIc X-Hub Advanced
      </h3>
      <p>
        <strong>נושאים:</strong> תקשורת לוויינית, תכנון רשת מתקדמת, ניהול עומסים, אופטימיזציה של ביצועים
      </p>
      <hr />

      {/* אמצעי קשר */}
      <h2
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ffefba, #ffffff)",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "inline-block",
          color: "#333",
        }}
      >
        אמצעי קשר
      </h2>
      <p>
        קישור ל-GitHub שלי:&nbsp;
        <a
          href="https://github.com/AdirGelkop"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#007bff", textDecoration: "underline" }}
        >
          AdirGelkop
        </a>
      </p>
      <p>
        לפרטים נוספים ויצירת קשר דרך LinkedIn או מייל, אנא עיינו בפרטי הקשר המופיעים בפוטר.
      </p>
    </motion.div>
  );
};

export default AboutMe;
