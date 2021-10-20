import "./index.css";
import React from "react";
import Navbar4 from "./components/Navbar4/Navbar4";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Projects2 from "./components/Projects2/Projects2";
import Recommendation from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="center">
        <Navbar4 />
        <section className="hero">
          <Hero />
          <BackgroundAnimation />
        </section>
        <About />
        <Experience />
        <Projects />
        <Projects2 />
        <Recommendation />
      </div>
      <Footer />
    </>
  );
};

export default App;
