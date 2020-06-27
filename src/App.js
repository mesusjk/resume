import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import data from './data.json';
import SnowStorm from "react-snowstorm";
import PageOne from "./pageOne/PageOne";
import PageTwo from "./pageTwo/PageTwo";
import PageThree from "./pageThree/PageThree";
import Navbar from "./navbar/Navbar";
import './App.css';

function App()  {

  return (
    <div className="App">
      <SnowStorm />

      <Navbar />

      <PageOne />

      <PageTwo />

      <PageThree />
      
    </div>
  );
}

export default App;
