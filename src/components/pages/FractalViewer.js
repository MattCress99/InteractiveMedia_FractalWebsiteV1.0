import React, { Component } from 'react'
import './FractalViewerStyle.css'
import '../app/fracApp.css'
import Initialize from "./StartFractalAppFunc"
import { fracApp } from "../app/fracApp.js"
import fractalApp from "../app/fractalApp.js"

/*export default function StartFractalAppl()
{
  return(
  var els = fracApp.elements;
      var evFuncs = fracApp.eventFunctions;
      els.launch1792Fractal = document.getElementById("1792-escape-time");
      els.launch1792Fractal.addEventListener("click", evFuncs.launchFractal.bind(this, 1792));

      )
    }

*/
export class FractalViewer extends Component {
  render() {
      return (
      <>
        <div>
          <h1 className="FractalViewer">Click on the words "Launch Fractal" above</h1>
        </div>      
      </>
    );
  }
}
export default FractalViewer;


/*
export default function FractalViewer() {
  return (
    <>
      <div id="launch-page">
        <main class="clear-fix">
          <a id="launch-fractal">
            <div id="fractal-title">Mandelbrot Fractal</div>
            <div id="launch-text" class="link">Launch Fractal</div>
          </a>
          <a
            id="credit-line"
            href="https://github.com/rafgraph/fractal"
            target="_blank"
          >Code and color algorithm by <span class="link">Rafael Pedicini</span>
          </a>
        </main>

        <div id="launch-detailed-fractal">
          launch higher escape time fractal -
          <a id="448-escape-time" class="link">448</a>
          -
          <a id="896-escape-time" class="link">896</a>
          -
          <a id="1792-escape-time" class="link">1792</a>
          - slow!
        </div>
      </div>

      <div id="fractal-graphics">
        <canvas id="fractal-canvas"></canvas>
        <div id="loading-fractal">
          <div id="loading-frac-text">
            <div id="loading-frac-title">loading fractal...</div>
            <div id="zoom-in-info">click to zoom in</div>
            <div id="zoom-out-info">option-click to zoom out</div>
            <div id="reset-info">shift-click to reset</div>
            <div id="exit-info">esc key to exit</div>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="../app/fractalApp.js">fractal</script>
    <script type="text/javascript" src="../app/fracApp.js">FractalApp</script>
    <Initialize />
    </>
  )}
*/
/*
   const path = require("path");

    module.exports = {
      output: {
        filename: "FractalView.js",
      },
      module: {
        rules: [{ test: /\.html$/, use: "raw-loader" }],
      },
    };

    var __html = require("../fractal.jsx");
    var fractal = { __html: __html };

    React.module.exports = React.createClass({
      render: function () {
        return <div dangerouslySetInnerHTML={fractal} />;
      },
    });
*/

    


   
 

