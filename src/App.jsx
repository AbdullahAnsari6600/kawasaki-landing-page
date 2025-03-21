import "./index.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
    </Router>
  );
}

export default App;