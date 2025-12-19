import React from "react";
import Navbar from "./components/Navbar.jsx";

import AnimatedNavbar from "./components/Navbar.jsx";
import ProfileSection from "./components/Profile.jsx";
import SkillSection from "./components/Skills.jsx";
import ProjectsSection from "./components/Project.jsx";
import ContactSection from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      
     

      <ProfileSection />

      <SkillSection />
    

      <ProjectsSection/>

      <ContactSection/>
      
      <div>
      <AnimatedNavbar />

      

      
      
    </div>
    </>
    
  );
}

export default App;
