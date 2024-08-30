import React from "react";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import Events from "./Events";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeContent id="intro" />
      {/* Ensure this id matches the HashLink target */}
      <Events id="events" />
      <Footer />
    </>
  );
}

export default Home;
