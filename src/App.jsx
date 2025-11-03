import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"; // ✅ Fixed typo
import Contact from "./pages/Contact"
import CursorGlow from "./Components/CursorGlow";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CursorGlow />
      <ScrollToTopButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> {/* ✅ Added correct route */}
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
