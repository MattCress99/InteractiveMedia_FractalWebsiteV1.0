import mandelbrotFractal from "../app/fractalApp.js"


(function Initialize() {
  "use-strict";
  function startApp() {
    window.mandelbrotFractal.runningApp = new mandelbrotFractal.App();
    document.removeEventListener("DOMContentLoaded", startApp);
  }
  document.addEventListener("DOMContentLoaded", startApp);
})();
