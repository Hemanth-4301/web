import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="container-fluid px-3 px-md-5 p-1 pb-4 "
        style={{ background: "black", color: "wheat" }}
      >
        <hr></hr>
        <div
          style={{
            fontSize: "1.1rem",
            fontFamily: "sans-serif",
          }}
        >
          <p>Contact us</p>
          <p>&#9743; : 78296 64332</p>
          <p>Terms of service</p>
          <p> &copy; &nbsp;2024 cse-b</p>
        </div>
        <div className="text-center mt-4 mt-md-5">
          <h5>Social Media</h5>
          <Link
            to="https://www.instagram.com/cse_b26_grads?igsh=MWYybm45dzBvem90YQ"
            className="text-white"
          >
            <i
              className="fa fa-instagram mt-2 placeholder-wave"
              style={{ fontSize: "40px", color: "wheat" }}
            ></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
