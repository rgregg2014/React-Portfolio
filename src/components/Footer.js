import React from "react";
import "../styles/Footer.css";
import github from "../images/github.png";
import linkedIn from "../images/linked.png";
import stack from "../images/stack.png";

function Footer() {
  return (
    <footer className="footer white">
      <nav className="navbar navbar-expand-lg white">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav white">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/rgregg2014">
                <img
                  className="logo"
                  id="github"
                  alt="Logo for Github.com"
                  src={github}
                ></img>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/rachel-gregg-35b59a208/"
              >
                <img
                  className="logo"
                  id="linked"
                  alt="Logo for LinkdIn.com"
                  src={linkedIn}
                ></img>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://stackoverflow.com/users/16200106/rachel-gregg"
              >
                <img
                  className="logo"
                  id="stack"
                  alt="Logo for Stackoverflow.com"
                  src={stack}
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h6>Powered by React, Styled with Bootstrap</h6>
    </footer>
  );
}

export default Footer;
