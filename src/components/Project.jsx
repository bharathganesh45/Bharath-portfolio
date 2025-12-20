import React from "react";
import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    
     {
      title: "Learning platform",
      description:
        "a Learning platform for update your skills.and showcase my skills. and experiance with smooth scrolls",
      tech: ["React", "Django", "MongoDB"],
      link: "https://learning-platform-three-rho.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce app with user authentication, product management, and secure payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/bharathganesh45/E-comerce-web",
    },
    {
      title: "social media web",
      description:
        "Build a social media application, showcasing my project, skills, and experience with smooth animations.",
      tech: ["React", "Express.js", "Node.js"],
      link: "https://github.com/bharathganesh45/social-media-platform",
    },
    
   
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", color: "#00e5ff", marginBottom: "40px" }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(0, 229, 255, 0.4)",
            }}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "20px",
              padding: "25px",
              textAlign: "left",
              backdropFilter: "blur(6px)",
            }}
          >
            <h2 style={{ color: "#00e5ff", fontSize: "1.5rem" }}>
              {project.title}
            </h2>
            <p style={{ color: "#e0e0e0", margin: "10px 0" }}>
              {project.description}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#00e5ff",
                    color: "#111",
                    borderRadius: "15px",
                    padding: "5px 10px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              style={{
                display: "inline-block",
                marginTop: "20px",
                color: "#00e5ff",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              🔗 View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
