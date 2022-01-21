import React from "react";
import "../../styles/Portfolio.css";
import bucket from "../../images/bucket.png";
import note from "../../images/NoteTaker.png";
import PWDGen from "../../images/PWDgen.png";
import STKR from "../../images/STKRHeader.png";
import algoDish from "../../images/ipad-view-algodish-crop.png";

function Portfolio() {
  return (
    <div className="portfolioBoard">
      {/* Highlighted Portfolio Item */}
      <div className="card maxi">
        <div className="card-body white">
          <h5 className="card-title">algoDish</h5>
          <div className="card-body white">
            <a
              href="https://live-pr3-algodish.herokuapp.com/"
              className="card-link"
            >
              Live Deployment
            </a>
            <a
              href="https://github.com/Brondchux/pr3-algodish"
              className="card-link big"
            >
              GitHub Repository
            </a>
          </div>
          <p className="card-text">
            Share your favorite recipes with algoDish: an easy way to find your
            new favorite weeknight dinner. This full-stack application is built
            in React and supported by a noSQL database using MongoDB. Styling is
            supported using the Semantic UI for React npm package. Routes are
            built with Apollo Server and use a GraphQL API.
          </p>
          <p className="card-text">
            <small className="text-muted">
              React, Semantic UI, MongoDB, Mongoose, Apollo, GraphQL
            </small>
          </p>
        </div>
        <img
          src={algoDish}
          className="card-img-bottom"
          alt="A screenshot of the top of the ipad view of algoDish"
        ></img>
      </div>
      {/* Secondary Portfolio Items */}
      <div className="card-deck container mini">
        <div className="row">
          <div className="card col-sm indie">
            <img
              src={STKR}
              className="card-img-top little"
              alt="Screenshot for STKR"
            ></img>
            <div className="card-body white">
              <h5 className="card-title">STKR</h5>
              <p className="card-text">
                STKR is a front-end application using two exteral APIs to
                generate stock and financial information based user-input
                preferences stored in local storage within the browser. Styling
                and user-interface elements supported by Bulma.io.
              </p>
              <p className="card-text">
                <small className="text-muted">HTML, CSS, JavaScript</small>
              </p>
              <br></br>
              <a href="https://naf15.github.io/STKR/" className="card-link">
                Live Deployment
              </a>
              <a href="https://github.com/naf15/STKR" className="card-link">
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="card col-sm indie">
            <img
              src={bucket}
              className="card-img-top little"
              alt="Screenshot for Work Day Scheduler"
            ></img>
            <div className="card-body white">
              <h5 className="card-title">BUCKET</h5>
              <p className="card-text">
                BUCKET is a simple way to keep your aspirations organized into a
                personal list. This is a full stack application leveraging an
                SQL database to allow for authentication and cookies for session
                storage. The front-end uses express-handlebars to dynamically
                generate cards based on user input. User-interface elements and
                parallax scrolling supported by Materialize CSS.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  HTML, CSS, JavaScript, MySQL, Sequelize, Express
                </small>
              </p>
              <br></br>
              <a
                href="https://aspirational-bucket.herokuapp.com/"
                className="card-link"
              >
                Live Deployment
              </a>
              <a href="https://github.com/Dobbs96/BUCKET" className="card-link">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card col-sm indie">
            <img
              src={note}
              className="card-img-top little"
              alt="Screenshot for Note Taker"
            ></img>
            <div className="card-body white">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                This simple, easy-to-use note taking app uses MySQL and Express
                to allow users to take notes and store them on a external
                database for future reference.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  HTML, CSS, JavaScript, MySQL, Express
                </small>
              </p>
              <br></br>
              <a
                href="https://taking-notes-1206.herokuapp.com/"
                className="card-link"
              >
                Live Deployment
              </a>
              <a
                href="https://github.com/rgregg2014/HW11-NotesApp"
                className="card-link"
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="card col-sm indie">
            <img
              src={PWDGen}
              className="card-img-top little"
              alt="Screenshot for Password Generator"
            ></img>
            <div className="card-body white">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                This password generator is easy to use, fast, and dynamic.
                Follow the on-screen prompts and generate a secure, random
                password for use anywhere!
              </p>
              <p className="card-text">
                <small className="text-muted">HTML, CSS, JavaScript</small>
              </p>
              <br></br>
              <a
                href="https://rgregg2014.github.io/Password-Generator/"
                className="card-link"
              >
                Live Deployment
              </a>
              <a
                href="https://github.com/rgregg2014/Password-Generator"
                className="card-link"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
