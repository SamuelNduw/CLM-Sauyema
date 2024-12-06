import React from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/image5.webp";
import image2 from "../assets/youthImg.webp";
import image3 from "../assets/youthImg1.webp";
import image4 from "../assets/youthImg2.webp";
import image5 from "../assets/youthImg4.webp";
import PicBoard from "../components/PicBoard";
import Footer from "../components/Footer";

const Youth = () => {
  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Fullscreen Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        ></div>

        {/* Centered Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="uppercase md:text-[3.5rem] text-[2.5rem] font-bold textShadow">
            Youth Empowerment
          </h1>
          <p className="text-lg mt-2 textShadow">
            Building a foundation of faith and purpose
          </p>
        </div>
      </div>

      {/* Empowering Youth for Faith and Purpose */}
      <div className="w-full bg-[#e1e6f9] flex md:flex-row flex-col justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-24 px-16 py-16 md:py-24">
        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold">
          Empowering Youth for Faith and Purpose
        </h1>
        <div
          className="w-[275px] min-h-[175px] sm:w-[350px] sm:h-[250px] md:w-[500px] md:h-[300px] bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        ></div>
      </div>

      <div className="relative pt-10 px-6">
        <div className="md:flex items-center h-[600px] bg-[#d9d9d9] my-10 container hidden overflow-hidden">
        {/* First Col */}
          <div className="relative w-1/2 h-full mr-2">
            <img src={image4} alt="" className="h-full w-full object-cover" />
            <div className="flex flex-col absolute inset-0 items-center justify-center text-white text-center bg-black/50 hover:bg-black/25 duration-200 ease-in-out">
                <h2 className="text-4xl font-semibold text-center">Building Lifelong Connections</h2>
                <h2>
                    Together, we create a supportive and uplifting
                    environment.
                </h2>
            </div>
          </div>
          {/* Second Col */}
          <div className="flex flex-col w-1/2 h-full">
          {/* Top Image */}
            <div className="relative w-full h-1/2 mb-1 rounded-md">
              <img src={image5} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 hover:bg-black/25 duration-200 ease-in-out">
                <h2 className="text-4xl font-semibold text-center">
                  Faith In Action
                </h2>
                <h2>Our youth are empowered to live their faith in everyday life.</h2>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative w-full h-1/2 mt-1 rounded-md">
              <img src={image2} alt="" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 hover:bg-black/25 duration-200 ease-in-out">
                <h2 className="text-4xl font-semibold text-center">
                  Preparing for the Future
                </h2>
                <h2>
                    We equip our youth with skills and confidence for life ahead.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex block gap-3">
        {/* Section 1 */}
        <div className="mb-8 flex flex-col items-center bg-[#d9d9d9] p-5">
          <img
            src={image5}
            alt="Faith in Action"
            className="w-80 h-60 object-cover rounded-lg"
          />
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold text-center">Faith in Action</h2>
            <p className="text-md mt-2 text-center">
              Our youth are empowered to live their faith in everyday life. Join
              us for programs that strengthen spiritual growth and community
              impact.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8 flex flex-col items-center bg-[#d9d9d9] p-5">
          <img
            src={image3}
            alt="Building Lifelong Connections"
            className="w-80 h-60 object-cover rounded-lg"
          />
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold text-center">
              Building Lifelong Connections
            </h2>
            <p className="text-md mt-2 text-center">
              Experience meaningful relationships through our youth events and
              small groups. Together, we create a supportive and uplifting
              environment.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-8 flex flex-col items-center bg-[#d9d9d9] p-5">
          <img
            src={image4}
            alt="Preparing for the Future"
            className="w-80 h-60 object-cover rounded-lg"
          />
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold text-center">Preparing for the Future</h2>
            <p className="text-md mt-2 text-center">
              We equip our youth with skills and confidence for life ahead. From
              leadership opportunities to mentorship, the future is bright.
            </p>
          </div>
        </div>
        </div>
      </div>

      <PicBoard />
      <Footer />
    </>
  );
};

export default Youth;
