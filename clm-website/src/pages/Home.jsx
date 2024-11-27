import React from "react";
import Hero from '../components/Hero';
import Anchor from '../components/Anchor';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Discipleship from '../components/Discipleship';
import PicBoard from '../components/PicBoard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Hero />
        <Anchor />
        <Services />
        <PicBoard />
        <Discipleship />
        <Vision />
        <Footer />
    </>
  );
};

export default Home;
