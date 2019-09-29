import React from 'react';
import './App.css';
import Nav from './Nav'
import { Router } from '@reach/router'
import Intro from './Pages/Intro'
import Home from './Pages/Home'
import WorkSchool from './Pages/Work-School'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Nav />
        <Router>
          <Home path="/" />
          <Intro path="/intro" />
          <WorkSchool path="work-school" />
          <Projects path="projects" />
          <Contact path="contact" />
        </Router>
    </>
  );
}

export default App;
