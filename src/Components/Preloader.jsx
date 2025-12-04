    import React, { useEffect, useState } from "react";
    import "./Preloader.css";

    const Preloader = () => {
    const [percent, setPercent] = useState(0);
    // Phases: 'counting' -> 'dropping' -> 'zooming' -> 'finished'
    const [phase, setPhase] = useState("counting");

    useEffect(() => {
        // --- PHASE 1: COUNTING (0s to 3.5s) ---
        // 3500ms / 100 steps = 35ms per step
        const interval = setInterval(() => {
        setPercent((prev) => {
            if (prev >= 100) {
            clearInterval(interval);
            return 100;
            }
            return prev + 1;
        });
        }, 35);

        // --- PHASE 2: SPIDER DROP (Starts at 3.5s) ---
        const dropTimer = setTimeout(() => {
        setPhase("dropping");
        }, 3600); // 3.5s + tiny buffer

        // --- PHASE 3: ZOOM THROUGH (Starts after drop lands, approx 4.1s) ---
        const zoomTimer = setTimeout(() => {
        setPhase("zooming");
        }, 4300); // Allow ~0.7s for drop animation + pause

        // --- PHASE 4: HIDE PRELOADER (Reveal site, approx 5s) ---
        const hideTimer = setTimeout(() => {
        document.body.classList.add("loaded");
        setPhase("finished");
        }, 5100); // Allow time for zoom to complete

        return () => {
        clearInterval(interval);
        clearTimeout(dropTimer);
        clearTimeout(zoomTimer);
        clearTimeout(hideTimer);
        };
    }, []);

    // 8-Pointed Web Geometry (Same as before)
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

    return (
        <div className={`preloader ${phase}`} aria-hidden="false">
        <div className="preloader-stage">
            <div className="web-wrapper">
            
            {/* WEB & TEXT (Only visible during counting, fade out after) */}
            <div className={`web-container ${phase !== "counting" ? "fade-out" : ""}`}>
                <div 
                className="web-svg"
                style={{ transform: `rotate(${percent * 3.6}deg)` }} 
                >
                <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
                    {renderWeb()}
                </svg>
                </div>
                <div className="percentage-text">{percent}%</div>
            </div>

            {/* SPIDER (Drops in when phase is 'dropping' or 'zooming') */}
            <div className={`spider-container ${phase}`}>
                <svg viewBox="0 0 100 100" className="spider-svg">
                <g fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    {/* Legs Left */}
                    <path d="M35 40 L20 25 M35 50 L15 50 M35 60 L15 75 M40 70 L25 85" />
                    {/* Legs Right */}
                    <path d="M65 40 L80 25 M65 50 L85 50 M65 60 L85 75 M60 70 L75 85" />
                    {/* Head */}
                    <circle cx="50" cy="32" r="8" fill="#000" stroke="none" />
                    {/* Body (Hollow Ring for Zoom Effect) */}
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