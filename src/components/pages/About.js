import React from "react";
import "../../styles/About.css";

function About() {
  return (
    <div className="aboutMe">
      <div className="card">
        <div className="card-header label">About Me</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="minor">
              I'm Rachel, thanks for stopping by! I'm a web developer based in
              Buffalo, NY. In 2014, I graduated the State University of New York
              at Fredonia, Magna Cum Laude, with a Bachelor of Science in
              Communications and Media Studies. After school, I spent time in
              film and television while living in Atlanta, GA. After returning
              to Buffalo, I took over management of a local movie theatre,
              honing my leadership and business management skills.
            </p>
            <br></br>
            <p>
              With an aptitude with complex design softwares and an educational
              background in media communications, the move into web design and
              development felt like a natural evolution of my skills.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default About;
