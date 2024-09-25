import React from "react";
import img2 from "../static/images/img2.jpg";
import img02 from "../static/images/img02.jpg";
import img002 from "../static/images/img002.jpg";
import img4 from "../static/images/img4.jpg";
import img5 from "../static/images/img5.jpg";
import imgg01 from "../static/images/imgg01.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Gallery() {
  return (
    <>
      <Navbar />
      <section
        id="glimpse"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="placeholder-wave container text-danger text-center py-4 ">
          <h1
            className="mb-0 block"
            style={{
              fontFamily: "arial",
              color: "green",
              letterSpacing: "5px",
              fontSize: "2.5rem",
              animation: "appear-2 0.5s 1",
              animation: "animate 0.7s ease-in-out 1",
            }}
          >
            CSE-B Gallery
          </h1>
        </div>

        <div className="container-fluid my-4 mt-2 para scroll-anime">
          <p
            className="placeholder-wave scroll-anime"
            style={{
              fontSize: "1.2rem",
              fontFamily: "Courier New, Courier,monospace",
              lineHeight: "2rem",
              padding: "10px",
              color: "whitesmoke",
              animation: "appear-2 0.5s 1",
              animation: "animate 0.7s ease-in-out 1",
            }}
          >
            <b>Friendship</b> is a special connection built on trust, laughter,
            and shared moments. True friendship knows no boundaries of distance
            or time; it provides a reliable network of support and empathy. In
            life's journey, friendship is the colorful thread that adds richness
            and meaning to every experience.
          </p>
        </div>

        <div
          className="container p-md-5 p-4"
          style={{
            animation: "appear-2 0.5s 1",
            animation: "animate 1s ease-in-out 1",
          }}
        >
          <img
            src={img002}
            className="img-fluid rounded-4 shadow-lg mb-5 scroll-anime "
            alt="..."
            style={{ border: "2px solid white" }}
          />
          <img
            src={img02}
            className="img-fluid rounded-4 shadow-lg mb-5 scroll-anime"
            alt="..."
            style={{ border: "2px solid white" }}
          />
          <img
            src={img2}
            className="img-fluid rounded-4 shadow-lg mb-5 scroll-anime"
            alt="..."
            style={{ border: "2px solid white" }}
          />
          <img
            src={img4}
            className="img-fluid rounded-4 shadow-lg mb-5 scroll-anime"
            alt="..."
            style={{ border: "2px solid white" }}
          />
          <img
            src={imgg01}
            className="img-fluid rounded-4 shadow-lg mb-5 scroll-anime"
            alt="..."
            style={{ border: "2px solid white" }}
          />
          <img
            src={img5}
            className="img-fluid rounded-4 shadow-lg mb-5 scroll-anime"
            alt="..."
            style={{ border: "2px solid white" }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
