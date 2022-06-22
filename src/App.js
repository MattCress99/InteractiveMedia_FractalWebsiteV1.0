import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Blogs from './components/pages/Blogs.js';
import Fractals from './components/pages/Fractals.js';
import FractalViewer from './components/pages/FractalViewer.js';
import Blog1 from './components/pages/singleBlog/Blog1';
import Blog2 from './components/pages/singleBlog/Blog2';
import Blog3 from './components/pages/singleBlog/Blog3';
import Blog4 from './components/pages/singleBlog/Blog4';
import Blog5 from './components/pages/singleBlog/Blog5';
import Blog6 from './components/pages/singleBlog/Blog6';
import Blog7 from './components/pages/singleBlog/Blog7';
import Blog8 from './components/pages/singleBlog/Blog8';
import WireFrames from './components/pages/singleBlog/WireFrames';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Blogs' exact component={Blogs}/>
          <Route path='/Fractals' exact component={Fractals}/>
          <Route path='/FractalViewer' exact component={FractalViewer}/>
          <Route path='/Blog1' exact component={Blog1}/>
          <Route path='/Blog2' exact component={Blog2}/>
          <Route path='/Blog3' exact component={Blog3}/>
          <Route path='/Blog4' exact component={Blog4}/>
          <Route path='/Blog5' exact component={Blog5}/>
          <Route path='/Blog6' exact component={Blog6}/>
          <Route path='/Blog7' exact component={Blog7}/>
          <Route path='/Blog8' exact component={Blog8}/>
          <Route path='/WireFrames' exact component={WireFrames}/>
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
