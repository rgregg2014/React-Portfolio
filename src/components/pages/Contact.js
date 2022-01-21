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
          <ul>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/rgregg2014"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <form className="formCard white">
        <div className="form-group white">
          <label className="label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // ref={emailRef}
          ></input>
          <small id="emailHelp" className="form-text text-muted minor">
            Please leave your email address, and I'll get back to you ASAP!
          </small>
        </div>
        <div className="form-group name white">
          <label className="label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            // ref={nameRef}
          ></input>
        </div>
        <div className="form-group white">
          <label className="label">Leave me a brief message!</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            // ref={messageRef}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary button label"
          onSubmit={() => handleSubmit()}
        >
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default Contact;
