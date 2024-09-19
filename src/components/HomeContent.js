import React from "react";
import p1 from "../static/images/p1.jpg";
import p2 from "../static/images/p2.jpg";
import p3 from "../static/images/main.jpg";
import timetable from "../static/images/time-table.jpg";
import robot from "../static/images/robot.jpg";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import "../styles/Aboutus.css";
import Events from "./Events";

function HomeContent() {
  return (
    <>
      {/* image scrollbar */}

      <section
        id="intro"
        className=""
        style={{
          backgroundColor: "rgb(0,0,0)",
          marginTop: "0",
        }}
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide container p-md-5 p-3 pb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active " data-bs-interval="100000">
              <img
                src={p1}
                className="d-block w-100 rounded-4"
                alt="Slide 1"
                style={{
                  border: "2px solid white",
                  animation: "animate 1s ease-in-out 1",
                }}
              />
            </div>
            <div className="carousel-item " data-bs-interval="100000">
              <img
                src={p2}
                className="d-block w-100 rounded-4"
                alt="Slide 2"
                style={{
                  border: "2px solid white",
                  animation: "animate 1s ease-in-out 1",
                }}
              />
            </div>
            <div className="carousel-item rounded-4" data-bs-interval="100000">
              <img
                src={p3}
                className="d-block w-100 rounded-4"
                alt="Slide 3"
                style={{
                  border: "2px solid white",
                  animation: "animate 1s ease-in-out 1",
                }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="" aria-hidden="true"></span>
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
      </section>
      {/* intro  mid*/}
      <div
        className="p-2 text-white py-md-5"
        style={{ backgroundColor: "black" }}
      >
        <p
          className=" px-4 container fs-md-2 "
          style={{
            fontFamily: "monospace",
            lineHeight: "2rem",
            padding: "20px  0 0 0",
            fontFamily: "Courier New, Courier,monospace",
            color: "whitesmoke",
            fontSize: "1.2rem",
          }}
        >
          <h1
            style={{
              fontFamily: "fanatsy",
              color: "green",
              letterSpacing: "10px",
            }}
          >
            Welcome...
          </h1>
          to our class website! We're a group of students who enjoy learning and
          growing together. Here, you can find updates, events, and resources to
          help you stay connected. Whether it's study materials or fun
          activities, we're here to support each other. Explore and enjoy our
          shared space!"
        </p>
      </div>
      {/* time-table */}
      <div
        class="container-fluid"
        style={{
          backgroundColor: "black",
        }}
      >
        <div class="row">
          <div class="col-md-5 offset-md-1 p-4 pt-1 pb-1 block  ">
            <div
              class="card mt-5 mb-3 block "
              style={{
                animation: "appear-2 0.5s 1",
                border: "2px solid white",
                borderRadius: "19px",
              }}
            >
              <div
                class="card-body "
                style={{
                  backgroundColor: "black",
                  borderRadius: "18px 18px 0 0",
                  color: "white",
                }}
              >
                <h4 class="card-title" style={{ fontFamily: "monospace" }}>
                  Time table
                </h4>
                <p class="card-text">
                  <small class="text-body-secondary">
                    <span
                      style={{
                        color: "white",
                        fontFamily: "arial",
                        fontSize: "0.9rem",
                        letterSpacing: "1px",
                      }}
                    >
                      {" "}
                      Last updated a few days ago
                    </span>
                  </small>
                </p>
              </div>
              <hr />
              <div class="m-3">
                <img src={timetable} class="card-img-top " alt="time_table" />
              </div>
            </div>
          </div>

          <div
            class="col-md-4 offset-md-1  mt-md-0 p-4 pt-1 "
            style={{
              animation: "appear-2 0.5s 1",
            }}
          >
            <div
              class="card mt-5 mb-5  bg-body-tertiary block"
              style={{
                border: "2px solid white",
                borderRadius: "18px",
                background: "black",
              }}
            >
              <img
                style={{
                  backgroundColor: "black",
                  borderRadius: "18px 18px 0 0",
                }}
                src={robot}
                class="card-img-top"
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  background: "black",
                  borderRadius: "0 0 18px 18px",
                  color: "white",
                  fontFamily: "arial",
                }}
              >
                <hr />
                <h5 class="card-title my-3" style={{ fontFamily: "monospace" }}>
                  Study materials
                </h5>
                <p
                  class="cart-text"
                  style={{
                    fontFamily: "arial",
                    letterSpacing: "1px",
                    fontSize: "0.9rem",
                  }}
                >
                  By clicking below button you can download all subjects notes
                </p>
                <Link
                  to="https://drive.google.com/drive/my-drive"
                  class="btn  placeholder-wave download-btn"
                >
                  Download now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
