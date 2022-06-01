import React from "react";
import MiniWindow from "./MiniWindow";
import FaithImg from "../images/Faith.png";
import "./MiniWindow.css";

function ContentSection() {
  return (
    <div className="content">
      <h1>BlOGS: 
      </h1>
      <div className="content_container">
        <div className="content_wrapper">
        <ul className="content_items">
            <MiniWindow
              src="../images/fractalart.png"
              text="A critical analysis of Faith, a kinetic poem written by Robert Kendal"
              label="Net Art"
              path="/Blog1"
            />
            <MiniWindow
              src="images/fractalart2.png"
              text="Core principles for design justice on the web"
              label="fractal"
              path="/Blog2"
            />
          </ul>
          <ul className="content_items">
            <MiniWindow
              src="images/JODI2.png"
              text="Internet, Society and Design Justice"
              label="fractal"
              path="/Blog3"
            />
            <MiniWindow
              src="images/JODI.png"
              text="JODI, my favourite artwork. A critical analysis of the internet artwork JODI and its relevance in the world of digital art"
              label="Net Art"
              path="/Blog4"
            />
             <MiniWindow
              src="/images/istockphoto-1064497042-612x612.jpg"
              text="A detailed reflection of the creation of my website"
              label="reflection"
              path="/Blog5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
