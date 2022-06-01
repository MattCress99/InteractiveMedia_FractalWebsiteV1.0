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
              src={require("../images/fractalart.png")}
              text="A critical analysis of Faith, a kinetic poem written by Robert Kendal"
              label="Net Art"
              path="/Blog1#top"
            />
            <MiniWindow
              src={require("../images/fractalart2.png")}
              text="Core principles for design justice on the web"
              label="fractal"
              path="/Blog2#top"
            />
          </ul>
          <ul className="content_items">
            <MiniWindow
              src={require("../images/JODI2.png")}
              text="Internet, Society and Design Justice"
              label="fractal"
              path="/Blog3#top"
            />
            <MiniWindow
              src={require("../images/JODI.png")}
              text="JODI, my favourite artwork. A critical analysis of the internet artwork JODI and its relevance in the world of digital art"
              label="Net Art"
              path="/Blog4#top"
            />
             <MiniWindow
              src={require("../images/istockphoto-1064497042-612x612.jpg")}
              text="A detailed reflection of the creation of my website"
              label="reflection"
              path="/Blog5#top"
            />
          </ul>
          <ul class="content_items">
          <MiniWindow
              src={require("../images/JODI2.png")}
              text="Blog6"
              label="Blog6"
              path="/Blog6#top"
            />
            <MiniWindow
              src={require("../images/JODI.png")}
              text="Blog7"
              label="Blog7"
              path="/Blog4#top"
            />
             <MiniWindow
              src={require("../images/SpirallingEnergy.jpg")}
              text="Blog8"
              label="Blog8"
              path="/Blog8"
            />
            <MiniWindow
              src={require("../images/fractaltree.png")}
              text="WireFrames"
              label="WireFrames"
              path="/WireFrames"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
