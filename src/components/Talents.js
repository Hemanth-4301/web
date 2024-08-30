import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import tal1 from "../static/images/tal1.png";
import nidhi from "../static/images/nidhi.png";
import ganu from "../static/images/ganu.jpg";
import "../styles/Aboutus.css";
import Footer from "./Footer";

function Talents() {
  return (
    <>
      <Navbar />
      <section
        id="talents"
        style={{
          backgroundColor: "black",
          paddingBottom: "20px",
        }}
      >
        <div className="container text-center pt-5 placeholder-wave about-heading">
          <h1
            style={{
              fontFamily: "arial",
              color: "green",
              letterSpacing: "5px",
              fontSize: "2.5rem",
            }}
          >
            Talents Showcase
          </h1>
        </div>

        <div className="container p-3">
          <p
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
            Welcome to the
            <b
              className="placeholder-wave mx-2 "
              style={{ letterSpacing: "2px" }}
            >
              Talents Showcase of CSE-B!
            </b>
            Here, we celebrate the diverse skills and passions that make our
            class truly remarkable. From mesmerizing melodies to captivating
            arts and beyond, explore the myriad talents of our classmates as
            they shine brightly on this stage of creativity and expression.
          </p>
        </div>

        <div
          className="container my-5  mt-1"
          style={{
            animation: "appear-2 0.5s 1",
          }}
        >
          <div className="row">
            <div className="col-md-4 col-12 d-flex justify-content-center mb-4 block ">
              <div
                className="card rounded-5 shadow-lg come-up"
                style={{
                  width: "16rem",
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid white",
                  animation: "animate 1s ease-in-out 1",
                }}
              >
                <img
                  src={tal1}
                  className="card-img-top rounded-5 img-fluid"
                  alt="Mahima Shripad Hegde"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Mahima Shripad Hegde</h5>
                  <p className="card-text" style={{ fontFamily: "monospace" }}>
                    (Singer)
                  </p>
                  <Link
                    to="https://www.instagram.com/_.mahimaaaa_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className=" "
                  >
                    <i
                      className="fa fa-instagram  placeholder-wave"
                      style={{ fontSize: "2.4rem", color: "white" }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 d-flex justify-content-center mb-4 block ">
              <div
                className="card rounded-5 shadow-lg come-up"
                style={{
                  width: "16rem",
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid white",
                  animation: "animate 1s ease-in-out 1",
                }}
              >
                <img
                  src={nidhi}
                  className="card-img-top rounded-5 img-fluid"
                  alt="Nidhi Prashant Patil"
                />
                <div className="card-body text-center mt-5">
                  <h5 className="card-title">Nidhi Prashant Patil</h5>
                  <p className="card-text" style={{ fontFamily: "monospace" }}>
                    (Pianist)
                  </p>
                  <Link to="#" className="">
                    <i
                      className="fa fa-instagram placeholder-wave text-white"
                      style={{ fontSize: "2.4rem" }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 d-flex justify-content-center mb-3 block">
              <div
                className="card rounded-5 shadow-lg come-up"
                style={{
                  width: "16rem",
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid white",
                  animation: "animate 1s ease-in-out 1",
                }}
              >
                <img
                  src={ganu}
                  className="card-img-top rounded-5 img-fluid"
                  alt="Ganesha M"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Ganesha M</h5>
                  <p className="card-text" style={{ fontFamily: "monospace" }}>
                    (Artist)
                  </p>
                  <Link to="https://www.instagram.com/iamganeshamohan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i
                      className="fa fa-instagram placeholder-wave text-white"
                      style={{ fontSize: "2.4rem" }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Talents;
