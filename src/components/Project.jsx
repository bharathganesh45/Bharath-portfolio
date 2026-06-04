import React from "react";
import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    
    {
      title: "Msme Scheme Recomentation system",
      description:
        "The MSME Scheme Recommendation Platform is a comprehensive web application designed to help Micro, Small, and Medium Enterprises (MSMEs) discover and access government schemes. The platform intelligently recommends appropriate government schemes based on business characteristics and eligibility criteria.",
      tech: ["React.js" ,"Node.js", "Express.js", "Jwt", "PostgreSQL"],
      link: "https://msme-scheme-recommender-systems.vercel.app/"
    },
    {
      title: "E-commerce-Landing-page",
      description:
        "A modern React-powered e-commerce web application deployed on Vercel. This project simulates a real online store and demonstrates handling dynamic product data, responsive UI, and essential shopping flows — all built using React’s component-based architecture.",
      tech: ["React.js", "Bootstrap"],
      link: "https://e-commerce-react-chi-nine.vercel.app/",
    },
    {
      title: "Youtube-clone",
      description:
        "Built a fully functional YouTube clone using React.js and the YouTube Data API v3 to replicate core video streaming platform features. The application fetches real-time video data, displays dynamic content, and provides an interactive user experience similar to YouTube.This project strengthened my understanding of frontend architecture, API integration, and building scalable UI components in React.",
      tech: ["React.js","Youtube API"],
      link: "https://youtube-clone-lake-ten.vercel.app/",
    },
    {
      title: "Car Showroom",
      description:
        "SKCars is an online presence for a premium pre-owned car dealership that focuses on helping customers buy and sell certified used vehicles. The website showcases a curated inventory of second-hand cars and offers services around vehicle inspection, transparency, and customer support. ",
      tech: ["Html", "Css", "JavaScript"],
      link: "https://www.skcars.in/",
      
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
