import React from "react";
import Hero from '../components/Hero';
import Anchor from '../components/Anchor';
import Services from '../components/Services';
import Discipleship from '../components/Discipleship';
import Footer from '../components/Footer';
import SocialMedia from "./SocialMedia";

const Home = () => {
  return (
    <>
        <Hero />
        <Anchor />
        <Discipleship />
        <SocialMedia />
        <Services />
        <Footer />
    </>
  );
};

export default Home;
