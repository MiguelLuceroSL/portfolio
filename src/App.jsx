import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About/About";

import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

import "./styles/globals.css"; // si usás estilos globales
import Tech from "./sections/Tech/Tech";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
