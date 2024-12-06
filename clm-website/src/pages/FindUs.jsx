import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FindUs = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
      {/* Text container */}
      <div className="w-full flex justify-center py-16 md:py-14">
        <div className="container flex flex-col gap-5 items-center text-center w-4/5 md:w-2/3">
          <h1 className="font-semibold uppercase text-[2.5rem] md:text-[3rem]">
            Our Address
          </h1>
          <h2>
            Turning opposite WB <br /> Plot 6100 Sauyemwa Ext.2 <br /> Blue
            Church
          </h2>
        </div>
      </div>
      {/* Map(iframe) and Skeleton of Map Component */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          margin: "20px auto",
        }}
      >
        {loading && (
          <Skeleton
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.9273150149713!2d19.739564638604314!3d-17.917701695765672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1be57b0078e9aa9d%3A0x65caeee4f4bda6a0!2sChrist&#39;s%20Love%20Ministries%20Sauyemwa!5e1!3m2!1sen!2sna!4v1733389468989!5m2!1sen!2sna"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Christ's Love Ministries Map"
          onLoad={() => setLoading(false)}
        ></iframe> */}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default FindUs;
