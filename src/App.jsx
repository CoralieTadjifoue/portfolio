import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <div className="pt-16">
      <Home />
      <About />
      <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
