import React, { Component } from 'react'
import "./Fractals.css";


export class Fractals extends Component {
  render() {
    return (
      <div><h1 className='Fractals'>Fractals</h1>
      <h1>Mandelbrot Fractal sets</h1>
        <iframe src="https://www.youtube.com/embed/pCpLWbHVNhk?start=8?&autoplay=0" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>MandelBrot Fractal</iframe>
        <iframe src="https://www.youtube.com/embed/w6RPasYEZk4" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Teddy Bear</iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ujvy-DEA-UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>11 Dimensions</iframe>
      </div>
    )
  }
}

export default Fractals