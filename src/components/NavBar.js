import React from "react";

import "../styles/NavBar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navigation blue">
      <h2 className="navbar-brand bitter" id="head">
        Rachel Gregg
      </h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse blue" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item" id="weirdo">
            <a
              className={
                currentPage === "About"
                  ? "nav-link active minor"
                  : "nav-link minor"
              }
              href="#about"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              href="#resume"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
