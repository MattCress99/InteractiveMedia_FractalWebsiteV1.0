import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Blogs from './components/pages/Blogs.js';
import Fractals from './components/pages/Fractals.js';
import { FractalViewer } from './components/pages/FractalViewer.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Blogs' exact component={Blogs}/>
          <Route path='/Fractals' exact component={Fractals}/>
          <Route path='/FractalVIewer' exact component={FractalViewer}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
