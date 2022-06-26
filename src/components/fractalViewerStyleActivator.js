import React from 'react'

export default function () {
  if(document.URL.includes("http://localhost:3000/FractalViewer") || document.URL.includes("http://localhost:3000/FractalViewer.js") || document.URL.includes("https://mattcress99.github.io/InteractiveMedia_FractalWebsiteV1.0/FractalViewer") || document.URL.includes("https://mattcress99.github.io/InteractiveMedia_FractalWebsiteV1.0/FractalViewer.js"))
  {
    return (
    <>
    <link type="text/css" rel="stylesheet" href="./app/fracApp2.css" media="screen" charset="utf-8"></link>
    </>
  )}
  else
  {
    return (
        <>
        <link type="text/css" rel="stylesheet" href="./app/fracApp.css" media="screen" charset="utf-8"></link>
        </>
    )
  }
}
