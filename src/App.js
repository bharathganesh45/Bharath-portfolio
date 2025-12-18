import React from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import AnimatedNavbar from "./components/Navbar.jsx";
import ProfileSection from "./components/Profile.jsx";
import AboutSection from "./components/About.jsx";
import ProjectsSection from "./components/Project.jsx";
import ContactSection from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      
      <Header />

      <ProfileSection />

      <AboutSection/>

      <ProjectsSection/>

      <ContactSection/>
      
      <div>
      <AnimatedNavbar />

      

      
      
    </div>
    </>
    
  );
}

export default App;
