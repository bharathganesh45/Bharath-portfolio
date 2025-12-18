import React from "react";

import { motion } from "framer-motion";

function Navbar() {
  const navItems = ["Profile", "About", "Projects", "Contact"];

  // Function to smoothly scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "20px",
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {navItems.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => handleScroll(item)}
          whileHover={{
            scale: 1.2,
            color: "#00e5ff",
            textShadow: "0px 0px 8px #00e5ff",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {item}
        </motion.button>
      ))}
    </motion.nav>
  );
}

export default Navbar;

