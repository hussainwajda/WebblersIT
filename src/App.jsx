import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CursorGlow from "./Components/CursorGlow";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Preloader from "./Components/Preloader.jsx";


// ================================
// Scroll to top on route change
// ================================
function ScrollToTopOnRouteChange() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location.pathname, lenis]);

  return null;
}


// ================================
// Main App Component
// ================================
function App() {
  return (
    <>
      {/* Preloader (auto hide + fallback timeout) */}
      <Preloader autoHideDelay={5000} fallbackTimeout={6000} />

      <ReactLenis root>
        <BrowserRouter>

          {/* Scroll Fix */}
          <ScrollToTopOnRouteChange />

          {/* UI Components */}
          <Navbar />
          <CursorGlow />
          <ScrollToTopButton />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </ReactLenis>
    </>
  );
}

export default App;
