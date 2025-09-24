import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.state?.scrollTo) {
        const section = document.querySelector(`#${location.state.scrollTo}`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return null;
  };

  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      <div className="pt-16">
        <Routes>
          {/* Home pages */}
          <Route
            path="/"
            element={
              <>
                <ScrollToSection />
                <Home />
                <About />
                <Projects />
              </>
            }
          />

          {/* Project detail pages */}
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
