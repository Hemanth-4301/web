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
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css"; // Import animation styles

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
          className=" px-4 container fs-md-2 scroll-anime"
          style={{
            fontFamily: "monospace",
            lineHeight: "2rem",
            padding: "20px  0 0 0",
            fontFamily: "Courier New, Courier,monospace",
            color: "whitesmoke",
            fontSize: "1.2rem",
          }}
        >
          <span
            style={{
              fontFamily: "fanatsy",
              color: "green",
              letterSpacing: "5px",
              fontSize: "2rem",
            }}
          >
            Welcome&nbsp;
          </span>
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
          <div class="col-md-5 offset-md-1 p-4 pt-1 pb-1 scroll-anime ">
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
              <div class="m-3" style={{ overflowX: "scroll" }}>
                {/* <img src={timetable} class="card-img-top " alt="time_table" /> */}
                <h1 style={{ margin: "0 0  20px 0" }}>
                  5<sup>th</sup> semester
                </h1>
                <table
                  border={1}
                  style={{
                    borderCollapse: "collapse",
                    padding: "5px",
                    textAlign: "center",
                    textWrap: "nowrap",
                  }}
                >
                  <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      Days
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      9-10a.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      10-11a.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      11-11:30a.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      11:30-12:30p.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      12:30-1:30p.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      1:30-2:30p.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      2:30-3:30p.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      3:30-4:30p.m
                    </th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      4:30-5:30p.m
                    </th>
                  </tr>

                  <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      Mon
                    </th>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pYsQgJkDgkpPymelGc1cgv2GCWftjhjC?usp=drive_link">
                        AI
                      </a>
                      <br></br>(401)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pnzfqvVlHOLeZkIWMR2ImM9UXlce1wqV?usp=drive_link">
                        CN
                      </a>
                      <br></br>(401)
                    </td>
                    <td
                      rowSpan={6}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      <div className="break">
                        <p className="fs-3">break</p>
                      </div>
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pbp0qPXvSFXlq-_EjdMaWe2JHeL-SQC0?usp=drive_link">
                        FSD
                      </a>
                      <br></br> (401)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1peJ81bRuO0dUYd9gti8IKfqkT5ZwqQy_?usp=drive_link">
                        SPM
                      </a>{" "}
                      <br></br>(401)
                    </td>
                    <td
                      rowSpan={6}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      <div className="break">
                        <p className="fs-3">launch break</p>
                      </div>
                    </td>
                    <td colSpan={2} style={{ padding: "5px" }}>
                      <b>B2</b>({" "}
                      <a href="https://drive.google.com/drive/folders/1pnzfqvVlHOLeZkIWMR2ImM9UXlce1wqV?usp=drive_link">
                        CN
                      </a>
                      ,CSLAB-8)(SKM+LKM)<br></br>
                      <b>B1</b>(
                      <a href="https://drive.google.com/drive/folders/1pbp0qPXvSFXlq-_EjdMaWe2JHeL-SQC0?usp=drive_link">
                        FSD
                      </a>
                      ,AILAB-4/ISLAB-4)(PMS+MMA)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      NSS/YOGA/PE
                    </td>
                  </tr>

                  <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      Tue
                    </th>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pYsQgJkDgkpPymelGc1cgv2GCWftjhjC?usp=drive_link">
                        AI
                      </a>
                      <br></br>(308)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pbp0qPXvSFXlq-_EjdMaWe2JHeL-SQC0?usp=drive_link">
                        FSD
                      </a>
                      <br></br>(308)
                    </td>

                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pnzfqvVlHOLeZkIWMR2ImM9UXlce1wqV?usp=drive_link">
                        CN
                      </a>
                      <br></br>(402)
                    </td>

                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pqQFAJvYKBgzHmb0PiqUofFysx0a-efR?usp=drive_link">
                        ATC
                      </a>{" "}
                      <br></br> (402)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <b>~</b>
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <b>~</b>
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <b>~</b>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      Wed
                    </th>
                    <td
                      colSpan={2}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      <b>B1</b>({" "}
                      <a href="https://drive.google.com/drive/folders/1pnzfqvVlHOLeZkIWMR2ImM9UXlce1wqV?usp=drive_link">
                        CN
                      </a>
                      ,CSLAB-8)(PN+ZF)<br></br>
                      <b>B3</b>(
                      <a href="https://drive.google.com/drive/folders/1pbp0qPXvSFXlq-_EjdMaWe2JHeL-SQC0?usp=drive_link">
                        FSD
                      </a>
                      ,AILAB-4/CSLAB-5)(PMS+DR)
                    </td>

                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1q3lYnBjzHPiI9fSE-3wSynifak35LDI6?usp=drive_link">
                        RM
                      </a>
                      <br></br>(401)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pYsQgJkDgkpPymelGc1cgv2GCWftjhjC?usp=drive_link">
                        AI
                      </a>
                      <br></br>(401)
                    </td>

                    <td
                      colSpan={2}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      <b>B3</b>({" "}
                      <a href="https://drive.google.com/drive/folders/1pnzfqvVlHOLeZkIWMR2ImM9UXlce1wqV?usp=drive_link">
                        CN
                      </a>
                      ,CSLAB-8)(Dr.SS+ZF)<br></br>
                      <b>B2</b>(
                      <a href="https://drive.google.com/drive/folders/1pbp0qPXvSFXlq-_EjdMaWe2JHeL-SQC0?usp=drive_link">
                        FSD
                      </a>
                      ,AILAB-4/CSLAB-5)(PMS+MMA)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      NSS/YOGA/PE
                    </td>
                  </tr>

                  <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      Thur
                    </th>
                    <td
                      colSpan={2}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      <a href="https://drive.google.com/drive/folders/1pqQFAJvYKBgzHmb0PiqUofFysx0a-efR?usp=drive_link">
                        ATC
                      </a>
                      &nbsp;Tutorial<br></br>
                      <b>B2</b>(AILAB-2/CSLAB-6)(Dr.BRV)
                    </td>

                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pqQFAJvYKBgzHmb0PiqUofFysx0a-efR?usp=drive_link">
                        ATC
                      </a>
                      <br></br>(402)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1q3lYnBjzHPiI9fSE-3wSynifak35LDI6?usp=drive_link">
                        RM
                      </a>
                      <br></br>(402)
                    </td>

                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pbp0qPXvSFXlq-_EjdMaWe2JHeL-SQC0?usp=drive_link">
                        FSD
                      </a>
                      <br></br>(401)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1peJ81bRuO0dUYd9gti8IKfqkT5ZwqQy_?usp=drive_link">
                        SPM
                      </a>{" "}
                      <br></br>(401)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <b>~</b>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>
                      Fri
                    </th>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      EVS<br></br>(402)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pnzfqvVlHOLeZkIWMR2ImM9UXlce1wqV?usp=drive_link">
                        CN
                      </a>
                      <br></br>(402)
                    </td>

                    <td
                      colSpan={2}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      <a href="https://drive.google.com/drive/folders/1pqQFAJvYKBgzHmb0PiqUofFysx0a-efR?usp=drive_link">
                        ATC
                      </a>{" "}
                      Tutorial<br></br>
                      <b>B1</b>(CSLAB-4)(Dr.BRV)
                    </td>

                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1pqQFAJvYKBgzHmb0PiqUofFysx0a-efR?usp=drive_link">
                        ATC
                      </a>
                      <br></br>(402)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <a href="https://drive.google.com/drive/folders/1peJ81bRuO0dUYd9gti8IKfqkT5ZwqQy_?usp=drive_link">
                        SPM
                      </a>
                      <br></br>(402)
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <b>~</b>
                    </td>
                  </tr>
                </table>
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
              class="card mt-5 mb-5  bg-body-tertiary scroll-anime"
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
                data-aos="fade-up"
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
                  to="https://drive.google.com/drive/folders/1vmWw8FnRNCWx6Mk3uA3UYSkS3Al5f-Js"
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
