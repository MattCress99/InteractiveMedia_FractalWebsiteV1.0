import React from "react";
import '../App.css';
import { Button } from './Button';
import './fractalPage.css';


function FractalPage() {
    return (
      <div id='fractalContainer' className="fractal-container">
        <div className="Fractal_info">
          <h4>Fractals</h4>  
          <br className="textBreak"></br>
          <span className="chaosText">The images of Chaos</span>      
          <br></br> 
        <span><br></br>this website will host a madelbrot fractal simulator that will allow one to view and zoom into a mandelbrot fractal in order to understand and see the beauty of its infiniteness.</span>
        </div>
        <div className="fractal-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            START
          </Button>
        </div>
      </div>
    );
    //<iframe src="https://www.youtube.com/embed/pCpLWbHVNhk?start=8?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h1>Mandelbrot Fractal</h1>
            
}

 

export default FractalPage;