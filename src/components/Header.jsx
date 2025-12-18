import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToProfile = () => {
    const el = document.getElementById("profile");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll down one viewport height
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  return (
    <header style={styles.header}>
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={styles.title}
      >
        Welcome to My Portfolio 🚀
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={styles.subtitle}
      >
        I’m a Full-Stack Developer passionate about modern web design and animations.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#00e6e6", boxShadow: "0px 0px 20px #00e6e6" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={scrollToProfile}
        style={styles.button}
        aria-label="Explore profile"
      >
        Explore Now
      </motion.button>
    </header>
  );
};

const styles = {
  header: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298, #00c6ff, #0072ff)",
    color: "white",
    backgroundSize: "400% 400%",
    animation: "gradientBG 10s ease infinite",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  button: {
    background: "#00bcd4",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.3s",
  },
};

// Add gradient background animation with keyframes
const gradientAnimation = `
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

// Inject CSS keyframes dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(gradientAnimation, styleSheet.cssRules.length);

export default Header;
