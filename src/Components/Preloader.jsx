import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ autoHideDelay = 5100, fallbackTimeout = 6000 }) => {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState("counting");

  useEffect(() => {
    // 1. CHECK: Has the user visited before?
    // We check this immediately to see if we should skip.
    const hasVisited = sessionStorage.getItem("webblers_visited_v2");

    if (hasVisited) {
      // User has visited: Mark as finished immediately & skip animation
      document.body.classList.add("loaded");
      setPhase("finished");
      return; 
    }

    // --- IF WE ARE HERE, IT IS THE FIRST VISIT. START ANIMATION. ---

    // A. COUNTING
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    // B. SPIDER DROP
    const dropTimer = setTimeout(() => {
      setPhase("dropping");
    }, 3600);

    // C. ZOOM THROUGH
    const zoomTimer = setTimeout(() => {
      setPhase("zooming");
    }, 4300);

    // D. FINISH & SET FLAG
    const hideTimer = setTimeout(() => {
      document.body.classList.add("loaded");
      setPhase("finished");

      // 🔴 IMPORTANT: Set the flag HERE, at the end.
      // This prevents React Strict Mode from cancelling the animation 
      // during the initial double-render.
      sessionStorage.setItem("webblers_visited_v2", "true");
      
    }, autoHideDelay);

    // E. SAFETY NET
    const safetyTimer = setTimeout(() => {
      if (!document.body.classList.contains("loaded")) {
        document.body.classList.add("loaded");
        setPhase("finished");
        sessionStorage.setItem("webblers_visited_v2", "true");
      }
    }, fallbackTimeout);

    return () => {
      clearInterval(interval);
      clearTimeout(dropTimer);
      clearTimeout(zoomTimer);
      clearTimeout(hideTimer);
      clearTimeout(safetyTimer);
    };
  }, [autoHideDelay, fallbackTimeout]);

  const renderWeb = () => {
    const cx = 60; const cy = 60; const outerR = 50; const innerR = 28;
    const curveControlR = 40; const segments = 8;
    let paths = []; let dots = [];

    for (let i = 0; i < segments; i++) {
      const angle = (i * 360) / segments;
      const nextAngle = ((i + 1) * 360) / segments;
      const rad = (angle * Math.PI) / 180;
      const nextRad = (nextAngle * Math.PI) / 180;
      const midRad = ((angle + (360/segments)/2) * Math.PI) / 180;

      const x1_out = cx + outerR * Math.cos(rad);
      const y1_out = cy + outerR * Math.sin(rad);
      const x2_out = cx + outerR * Math.cos(nextRad);
      const y2_out = cy + outerR * Math.sin(nextRad);
      const x1_in = cx + innerR * Math.cos(rad);
      const y1_in = cy + innerR * Math.sin(rad);
      const x2_in = cx + innerR * Math.cos(nextRad);
      const y2_in = cy + innerR * Math.sin(nextRad);
      const cpx = cx + curveControlR * Math.cos(midRad);
      const cpy = cy + curveControlR * Math.sin(midRad);

      paths.push(<line key={`spoke-${i}`} x1={x1_in} y1={y1_in} x2={x1_out} y2={y1_out} />);
      paths.push(<line key={`inner-${i}`} x1={x1_in} y1={y1_in} x2={x2_in} y2={y2_in} />);
      paths.push(<path key={`outer-${i}`} d={`M ${x1_out},${y1_out} Q ${cpx},${cpy} ${x2_out},${y2_out}`} />);
      dots.push(<circle key={`dot-out-${i}`} cx={x1_out} cy={y1_out} r="3" fill="var(--blue)" stroke="none"/>);
      dots.push(<circle key={`dot-in-${i}`} cx={x1_in} cy={y1_in} r="3" fill="var(--blue)" stroke="none"/>);
    }
    return <g stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">{paths}{dots}</g>;
  };

  if (phase === "finished") return null;

  return (
    <div className={`preloader ${phase}`} aria-hidden="false">
      <div className="preloader-stage">
        <div className="web-wrapper">
          <div className={`web-container ${phase !== "counting" ? "fade-out" : ""}`}>
            <div className="web-svg" style={{ transform: `rotate(${percent * 3.6}deg)` }}>
              <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
                {renderWeb()}
              </svg>
            </div>
            <div className="percentage-text">{percent}%</div>
          </div>
          <div className={`spider-container ${phase}`}>
            <svg viewBox="0 0 100 100" className="spider-svg">
              <g fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M35 40 L20 25 M35 50 L15 50 M35 60 L15 75 M40 70 L25 85" />
                 <path d="M65 40 L80 25 M65 50 L85 50 M65 60 L85 75 M60 70 L75 85" />
                 <circle cx="50" cy="32" r="8" fill="#000" stroke="none" />
                 <circle cx="50" cy="55" r="16" stroke="#000" strokeWidth="8" fill="transparent" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;