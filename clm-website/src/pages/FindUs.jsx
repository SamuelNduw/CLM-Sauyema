import React from "react";
import Footer from "../components/Footer";

const FindUs = () => {
  return (
    <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1898.15088112282!2d19.740848565269445!3d-17.918073934237654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sna!4v1733222826524!5m2!1sen!2sna"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>
        </div>
        <Footer />
    </>
  );
};

export default FindUs;
