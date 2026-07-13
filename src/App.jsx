import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./components/Skills";
import "./App.css";


function App() {

  return (

    <div className="app">

      <Navbar />

 <Routes>

  <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />} />

  <Route path="/skills" element={<Skills />} />

  <Route path="/projects" element={<Projects />} />

  <Route 
    path="/projects/:id" 
    element={<ProjectDetails />} 
  />

  <Route path="/contact" element={<Contact />} />

  <Route path="*" element={<NotFound />} />

</Routes>

      <ThemeToggle />

    </div>

  );

}


export default App;