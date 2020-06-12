import React from 'react';
import './App.css';
import Header from '../../Components/Header/Header';
import Routes from "../../routes/Routes";
import Home from '../../Components/Home/Home';
import Shop from '../../Components/Shop/Shop';
import About from '../../Components/About/About';
import FAQ from '../../Components/FAQ/FAQ';


function App() {
  return (
    <div className="app">
      <Header />
      {/* <Routes /> */}
      <Home />
      <Shop />
      <About />
      <FAQ />
    </div>
  );
}

export default App;
