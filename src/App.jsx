import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Footer from "./components/footer/Footer";
import CircleProgressBar from "./components/circle-progress-bar/CircleProgressBar";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <CircleProgressBar />
      <Footer />
    </div>
  );
}
