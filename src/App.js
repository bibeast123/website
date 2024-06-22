// App.js

import React from 'react';

import './App.css';

import Header from './Header';

import Technical from './Technical'

import Experience from './Experience';

import Projects from './Projects';

import Footer from './Footer';

 

function App() {

  return (

    <div className="App">

      <Header />
      <Technical/>

      <Experience />

      <Projects />

      <Footer />

    </div>

  );

}

 

export default App;