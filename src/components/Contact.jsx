import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";




function ContactSection() {


  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000428, #004e92)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "60px 20px",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.5rem",
          color: "#00e5ff",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </motion.h1>

      {/* Direct Contact Links */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  style={{
    display: "flex",
    gap: "30px",
    marginBottom: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  {/* GitHub */}
  <a
    href="https://github.com/bharathganesh45"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#00e5ff",
      fontSize: "32px",
      transition: "transform 0.3s ease",
      
    }}
  >
    <FaGithub />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/bharathganesh45"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#00e5ff",
      fontSize: "32px",
      transition: "transform 0.3s ease",
    }}
  >
    <FaLinkedin />
  </a>

  {/* Email */}
  <a
    href="mailto:bharathganesh45@gmail.com"
    style={{
      color: "#00e5ff",
      fontSize: "32px",
      transition: "transform 0.3s ease",
    }}
  >
    <FaEnvelope />
  </a>
</motion.div>


      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          maxWidth: "600px",
          color: "#e0e0e0",
          marginBottom: "40px",
          lineHeight: "1.6",
        }}
      >
        Have a project idea or just want to say hi?  
        Feel free to drop a message below — I’d love to connect!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(8px)",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0 0 20px rgba(0, 229, 255, 0.2)",
        }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, borderColor: "#00e5ff" }}
          style={{
            padding: "12px 15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
          required
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, borderColor: "#00e5ff" }}
          style={{
            padding: "12px 15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
          required
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, borderColor: "#00e5ff" }}
          style={{
            padding: "12px 15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            minHeight: "120px",
            resize: "none",
          }}
          required
        />

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#00e5ff",
            color: "#111",
            boxShadow: "0 0 15px #00e5ff",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            padding: "12px 0",
            border: "none",
            borderRadius: "25px",
            backgroundColor: "#00e5ff",
            color: "#111",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Send Message 💌
        </motion.button>
      </motion.form>
      

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          marginTop: "50px",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        © 2025 Bharath Ganesh | Built with 💙 
      </motion.p>
    </section>
  );
}

export default ContactSection;
