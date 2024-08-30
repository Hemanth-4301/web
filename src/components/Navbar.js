import "../styles/Navbar.css";
import nie from "../static/images/nie.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  useEffect = () => {
    {
      // Select all the links
      const links = document.querySelectorAll("a");

      // Iterate over each link
      links.forEach((link) => {
        link.addEventListener("click", function () {
          // Remove the active class from all links
          links.forEach((link) => link.classList.remove("active"));

          // Add the active class to the clicked link
          this.classList.add("active");
        });
      });
    }
  };
  return (
    <div>
      <nav className="">
        <img
          src={nie}
          style={{
            height: "40px",
            width: "40px",
            marginLeft: "20px",
            marginRight: "auto",
          }}
          className="placeholder-wave"
          alt="NIE"
        />

        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>

        <div className="link-container">
          <label htmlFor="sidebar-active" className="close-sidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="https://parents.nie.ac.in/index.php">Contineo</Link>
          <HashLink to="/#events">Events</HashLink>
          <Link to="/glimpse">Glimpse</Link>
          <Link to="/talents">Talents</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
