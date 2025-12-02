import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"; // ✅ Fixed typo
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CursorGlow from "./Components/CursorGlow";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import ProfileCard from "./Components/ProfileCard";
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from "react";

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, lenis]);

  return null;
}

function App() {
  return (
  <>
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Navbar />
        <CursorGlow />
        <ScrollToTopButton />
        {/* <ProfileCard/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} /> {/* ✅ Added correct route */}
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
