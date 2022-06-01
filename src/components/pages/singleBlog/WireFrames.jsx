import React from 'react'
import "./singleBlog1.css"

export default function WireFrames() {
  return (
    <div>
          <h1 className="WireFrames-title">Wireframes</h1>
          <div class="row">
              <div class="column">
                  <img
                      className="wireFrame1"
                      src={require("../../../images/Wireframe1.png")}
                      alt="Wire Frame 1"
                  ></img>
              </div>
              <div class="column">
                  <img
                      className="wireFrame2"
                      src={require("../../../images/Wireframe2.png")}
                      alt="Wire Frame 2"
                  ></img>
              </div>
          </div>
    </div>
  );
}
