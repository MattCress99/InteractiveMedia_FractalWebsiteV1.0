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
              src="images/Faith.png"
              text="A critical analysis of Faith, a kinetic poem written by Robert Kendal"
              label="Net Art"
              path="/blogs"
            />
          </ul>
          <ul className="content_items">
            <MiniWindow
              src="images/fractal art 2.png"
              text="Core principles for design justice on the web"
              label="fractal"
              path="/blogs"
            />
          </ul>
          <ul>
            <MiniWindow
              src="images/JODI2.png"
              text="Core principles for design and aesthetics for the web"
              label="fractal"
              path="/blogs"
            />
          </ul>
          <ul>
            <MiniWindow
              src="images/JODI.png"
              text="JODI, my favourite artwork. A critical analysis of the internet artwork JODI and its relevance in the world of digital art              "
              label="Net Art"
              path="/blogs"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
