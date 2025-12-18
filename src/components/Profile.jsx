import React from "react";
import { motion } from "framer-motion";

function ProfileSection() {
  return (
    <section
      id="profile"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
      }}
    >
      {/* Profile Image Animation */}
      <motion.img
        src="/bharath.png" 
        alt="Profile"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #00e5ff",
          boxShadow: "0 0 20px #00e5ff",
          marginBottom: "25px",
        }}
      />

      {/* Name */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "10px" }}
      >
        Hi, I'm <span style={{ color: "#00e5ff" }}>Bharath Ganesh</span>
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ fontSize: "1.5rem", color: "#ccc" }}
      >
        Full Stack Web Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          maxWidth: "600px",
          lineHeight: "1.6",
          marginTop: "20px",
          fontSize: "1.1rem",
          color: "#eaeaea",
        }}
      >
        Passionate about building modern web applications with clean designs,
        interactive animations, and user-friendly experiences. I love working
        with React, Node.js, Django and everything in between.
      </motion.p>

      {/* Animated Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px #00e5ff",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          marginTop: "40px",
          padding: "12px 30px",
          backgroundColor: "#00e5ff",
          color: "#111",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Explore My Work 🚀
      </motion.a>
    </section>
  );
}

export default ProfileSection;
