import React from "react";
import "../../styles/Contact.css";

function Contact() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="contact">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">Thanks for Stopping By!</h2>
          {/* <p className="lead">
            Want to contact me directly? Shoot me an email at:
          </p> */}

          <h3 className="label">Where to Find Me</h3>
          <div className="card contact-card">
            <ul>
              <li>
                <a
                  href="https://twitter.com/raeontheweb"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="minor"
                >
                  Twitter
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="minor"
                >
                  YouTube
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.github.com/rgregg2014"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="minor"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rachel-gregg-35b59a208/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="minor"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
