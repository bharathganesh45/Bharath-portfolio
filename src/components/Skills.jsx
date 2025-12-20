import React from "react";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGit,
  DiMysql,
} from "react-icons/di";
import { SiGithub, SiJavascript, SiPython } from "react-icons/si";

const skills = [
  { name: "HTML", icon: DiHtml5 },
  { name: "CSS", icon: DiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: DiReact },
  { name: "Node.js", icon: DiNodejsSmall },
  { name: "MongoDB", icon: DiMongodb },
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: DiMysql },
  { name: "Git", icon: DiGit },
  { name: "GitHub", icon: SiGithub },
];

function SkillSection() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
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
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", color: "#00e5ff" }}
      >
        Skills
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
          marginTop: "20px",
        }}
      >
        I'm a passionate <b>Full Stack Web Developer</b> who builds modern,
        responsive web applications using
        <span style={{ color: "#00e5ff" }}> React</span>,
        <span style={{ color: "#00e5ff" }}> Node.js</span>,
        <span style={{ color: "#00e5ff" }}> MongoDB</span>, and
        <span style={{ color: "#00e5ff" }}> Python</span>   for scripting and backend fundamentals

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
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(0,229,255,0.6)",
              }}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "22px 28px",
                borderRadius: "20px",
                backdropFilter: "blur(6px)",
                width: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                color: "#00e5ff",
                fontWeight: "600",
              }}
            >
              <Icon size={42} />
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Resume Button */}
      <motion.a
        href="/bharath.resume.pdf"
        whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00e5ff" }}
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

export default SkillSection;

