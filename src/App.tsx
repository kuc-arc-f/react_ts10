
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//import './App.css';

import Home from './component/Home';
import about from './component/about';
import Navbar from './component/Navbar';
import demo from './component/demo';
import pdf from './component/test/pdf6';
import pdf8 from './component/test/pdf10';
import chart from './component/test/pdf11';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Route exact path='/' component={Home} />
          <Route exact path='/demo' component={demo} />
          <Route exact path='/pdf' component={pdf} />
          <Route exact path='/pdf8' component={pdf8} />
          <Route exact path='/chart' component={chart} />
          <Route exact path='/about' component={about} />

        </div>
      </Router>
    </div>
  );
}

export default App;