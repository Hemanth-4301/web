import React from "react";
import "../styles/Aboutus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
function Aboutus() {
  return (
    <>
      <Navbar />
      <div>
        <div
          style={{
            backgroundColor: "black",
          }}
          className="about-bg-inner pb-1"
        >
          <h1
            className="about-heading text-center p-5 mb-0"
            style={{
              letterSpacing: "5px",
              textShadow: "0 0 20px black",
              fontSize: "3rem",
              color: "green",
              fontFamily: "arial",
            }}
          >
            About us
          </h1>
          <p className="about-para ">
            This is our class website! We created this site to help each other,
            show off our skills, and remember the good times we've had. We want
            to support our classmates and have a place where we can celebrate
            what we achieve and remember the fun moments. Come check out our
            site and be part of our journey.
          </p>
          <h3
            className="text-center mt-5"
            style={{
              color: "white",
              animation: "appear-2 0.5s 1",
              fontFamily: "monospace",
              // letterSpacing: "1px",
              animation: "animate 0.7s ease-in-out 1",
              fontSize: "1.3rem",
            }}
          >
            Made with <b class="heart-beat placeholder-wave mx-1">&#x2764;</b>{" "}
            by Mysurians
          </h3>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Aboutus;
