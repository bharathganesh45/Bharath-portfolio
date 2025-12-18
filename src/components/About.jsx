import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #141E30, #243B55)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "50px 20px",
      }}
    >
      {/* Section Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", color: "#00e5ff", marginBottom: "20px" }}
      >
        About Me
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          maxWidth: "800px",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#eaeaea",
        }}
      >
        I'm a passionate <b>Full Stack Web Developer</b> who loves creating
        modern, user-friendly, and responsive websites. My goal is to transform
        creative ideas into beautiful digital solutions using technologies like
        <span style={{ color: "#00e5ff" }}> React</span>,
        <span style={{ color: "#00e5ff" }}> Node.js</span>, 
        <span style={{ color: "#00e5ff" }}> MongoDB</span>, and
        <span style={{ color: "#00e5ff" }}> Django</span>  
        <br />
        <br />
        I’m always exploring new tools, frameworks, and best practices to
        improve my craft and deliver top-notch web experiences.
      </motion.p>

      {/* Skill Cards */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {["HTML","CSS", "JavaScript","REACT", "Node.js", "MongoDB", "Django",].map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "20px 30px",
              borderRadius: "20px",
              backdropFilter: "blur(5px)",
              color: "#00e5ff",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 0 15px rgba(0, 229, 255, 0.2)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Resume Button */}
      <motion.a
        href="/bharath.resume.pdf"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px #00e5ff",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          marginTop: "50px",
          padding: "12px 30px",
          backgroundColor: "#00e5ff",
          color: "#111",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Download Resume 📄
      </motion.a>
    </section>
  );
}

export default AboutSection;
