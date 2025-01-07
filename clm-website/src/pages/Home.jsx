import React from "react";
import Hero from '../components/Hero';
import Anchor from '../components/Anchor';
import Services from '../components/Services';
import Discipleship from '../components/Discipleship';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Hero />
        <Anchor />
        <Discipleship />
        <Services />
        <Footer />
    </>
  );
};

export default Home;
