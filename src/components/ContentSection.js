import React from "react";
import MiniWindow from "./MiniWindow";
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
              src={require("../images/Faith.png")}
              text="A critical analysis of Faith, a kinetic poem written by Robert Kendal"
              label="Net Art"
              path="/Blog1#top"
            />
            <MiniWindow
              src={require("../images/nature_fractals.jpg")}
              text="Core principles for design justice on the web"
              label="Design"
              path="/Blog2#top"
            />
          </ul>
          <ul className="content_items">
            <MiniWindow
              src={require("../images/JODI2.png")}
              text="Internet, Society and Design Justice"
              label="Design"
              path="/Blog3#top"
            />
            <MiniWindow
              src={require("../images/JODI.png")}
              text="JODI, my favourite artwork. A critical analysis of the internet artwork JODI and its relevance in the world of digital art"
              label="Net Art"
              path="/Blog4#top"
            />
             <MiniWindow
              src={require("../images/img_0832.jpg")}
              text="Design in our Daily"
              label="Design"
              path="/Blog7#top"
            />
          </ul>
          <ul class="content_items">
          <MiniWindow
              src={require("../images/SpirallingEnergy.jpg")}
              text="Fractal Design in African Art"
              label="Fractals"
              path="/Blog8"
            />
          <MiniWindow
              src={require("../images/nature_fractals2.jpg")}
              text="Internet Artwork - a disccussion of my website"
              label="Internet Artwork"
              path="/Blog6#top"
            />
            <MiniWindow
              src={require("../images/frac.jpg")}
              text="A detailed reflection of the creation of my website"
              label="Reflection"
              path="/Blog5#top"
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
