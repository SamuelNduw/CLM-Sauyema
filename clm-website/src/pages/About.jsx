import React from "react";
import Vision from "../components/Vision";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import image1 from "../assets/image2.webp";

const About = () => {
  return (
    <div className="relative w-full  overflow-hidden">
        <Navbar />
        <Vision />
        <Footer />
    </div>
  );
};

export default About;
