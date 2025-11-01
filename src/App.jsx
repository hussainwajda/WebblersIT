import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import CursorGlow from "./Components/CursorGlow";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CursorGlow/> 
      

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
