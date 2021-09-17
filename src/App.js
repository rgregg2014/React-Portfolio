import React from "react";
import "./styles/App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
