import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/contact";
function App() {
  return (
    <div className="font-epilogue">
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
