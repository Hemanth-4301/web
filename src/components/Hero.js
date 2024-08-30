import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Hero.css";
import p1 from "../static/images/p1.jpg";
import p2 from "../static/images/p2.jpg";
import main from "../static/images/main.jpg";

function Hero() {
  return (
    <>
      <div
        className="py-5 herobg"
        style={{
          textAlign: "center",
          backgroundColor: "black",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1 style={{ lineHeight: "4.5rem" }} className="heading">
            <span
              style={{
                letterSpacing: "8px",
                color: "green",
              }}
            >
              Welcome to the
            </span>
            <br></br>
            <span
              style={{
                fontSize: "4rem",
                color: "white",
                letterSpacing: "10px",
                fontFamily: "fantasy",
                textShadow: "0 0 2px green",
              }}
            >
              CSE<b className="rotate">-</b>B
            </span>
          </h1>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <HashLink className="start-btn-1 placeholder-wave" to="/#intro">
              Get started
            </HashLink>
            <Link className="start-btn-2" to="/aboutus">
              About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
