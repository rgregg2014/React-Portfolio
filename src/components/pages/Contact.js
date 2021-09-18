import React from "react";
import "../../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">Thanks for Stopping By!</h2>
          <p className="lead">
            Want to contact me directly? Shoot me an email at:
          </p>
          <p>rgregg2014@gmail.com</p>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            Please leave your email address, and I'll get back to you ASAP!
          </small>
        </div>
        <div className="form-group name">
          <label for="exampleInputPassword1">Name</label>
          <input type="text" className="form-control" id="name"></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            Leave me a brief message!
          </label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
