// ✅ src/effects/CursorGlow.jsx
import React, { useEffect } from "react";
import "./CursorGlow.css";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    const handleMouseMove = (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      glow.remove();
    };
  }, []);

  return null; // this component doesn’t render any visible JSX
};

export default CursorGlow;
