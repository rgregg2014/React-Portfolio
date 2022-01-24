import React from "react";
import "../../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="resumeCard">
        <h2>
          <a
            href="https://docs.google.com/document/d/1htUflow_PCOc6p56ifWNjpv84gcIFm2J6r5bnCYktVI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            id="resumeLink"
          >
            Check out my resume here!
          </a>
        </h2>
      </div>
      <div className="resumeCard">
        <h2>Development Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Express</li>
        </ul>
      </div>
      <div className="resumeCard">
        <h2>Design Software Proficiencies</h2>
        <ul>
          <li>Adobe Premiere Pro</li>
          <li>Adobe After Effects</li>
          <li>Adobe Audition</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Final Cut Pro</li>
          <li>Avid Media Composer</li>
          <li>SONY Vegas</li>
          <li>Pro Tools</li>
          <li>Audacity</li>
          <li>OBS Studio</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
