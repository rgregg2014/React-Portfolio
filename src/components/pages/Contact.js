import React, { useRef, useState } from "react";
import "../../styles/Contact.css";

function Contact() {
  const [missingFields, setMissingFields] = useState(false);
  // const nameRef = useRef();
  // const emailRef = useRef();
  // const messageRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    // let name = nameRef.current.value;
    // let email = emailRef.current.value;
    // let message = messageRef.current.value;

    // if (name && email && message) {
    //   setMissingFields(false);
    //   console.log("No missing fields");
    // } else {
    //   setMissingFields(true);
    //   console.log("Missing Fields!");
    // }
  };

  return (
    <div className="contact">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">Thanks for Stopping By!</h2>
          <p className="lead">
            Want to contact me directly? Shoot me an email at:
          </p>
          <h3 className="label">rgregg2014@gmail.com</h3>
        </div>
      </div>
      <form className="formCard white">
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
      </form>
    </div>
  );
}

export default Contact;
