import React from "react";
import Vision from "../components/Vision";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import image1 from "../assets/pastor.jpg";

const About = () => {
  return (
    <div className="relative w-full  overflow-hidden bg-[#e1f3f9]">
        <Navbar />
        <div className="py-10 flex flex-col text-[#2ea7e4]">
          <h1 className="uppercase text-[2.5rem] md:text-[3rem] font-semibold text-center">Our Pastor</h1>
          <div className="flex justify-center gap-5 w-full pt-5">
            <img src={image1} alt="" className="sm:w-[450px] w-[250px] rounded-md"/>
            <h1>Pastor Soji Ajiboso</h1>
          </div>
        </div>
        <Vision />
        <Footer />
    </div>
  );
};

export default About;
