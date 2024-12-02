// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "./homepages/Hero";
import Services from "./homepages/Services";
import TransportSolutions from "./homepages/TransportSolutions";
import Anywhere from "./homepages/Anywhere";
import Story from "./homepages/Story";
import Articles from "./homepages/Articles";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Transport Solutions Section */}
      <TransportSolutions />

      {/* Anywhere Section */}
      <Anywhere />

      {/* Story Section */}
      <Story />

      {/* Articles Section */}
      <Articles />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
