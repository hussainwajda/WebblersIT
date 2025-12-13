"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import "./ai-workflow-visual.css"

const slides = [
  {
    id: 1,
    title: "Email Marketing Automation",
    description: "Automatically send targeted emails based on user behavior, nurture leads, and track engagement metrics in real-time.",
    icon: "📧",
  },
  {
    id: 2,
    title: "Social Media Scheduling",
    description: "Schedule and publish content across multiple platforms, optimize posting times, and monitor analytics automatically.",
    icon: "📱",
  },
  {
    id: 3,
    title: "Data Processing & Analysis",
    description: "Extract, transform, and analyze data from various sources, generate insights, and create automated reports.",
    icon: "📊",
  },
  {
    id: 4,
    title: "Customer Support Automation",
    description: "Deploy AI chatbots to handle inquiries, ticket routing, and support escalation 24/7 without manual intervention.",
    icon: "🤖",
  },
]

export default function AIAutomationsReel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)

  const slideDuration = 5 // seconds per slide

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          return 0
        }
        return prev + 100 / (slideDuration * 10) // Update every 100ms
      })
    }, 100)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPlaying, slideDuration])

  // const handleNext = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length)
  //   setProgress(0)
  // }

  // const handlePrev = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  //   setProgress(0)
  // }

  // const handlePlayPause = () => {
  //   setIsPlaying((prev) => !prev)
  // }

  // const handleDotClick = (index) => {
  //   setCurrentSlide(index)
  //   setProgress(0)
  // }

  return (
    <div className="ai-workflow-reel">
      {/* Progress bars */}
      <div className="ai-reel-progress-container">
        {slides.map((_, index) => (
          <div key={index} className="ai-reel-progress-bar">
            <motion.div
              className="ai-reel-progress-fill"
              initial={{ width: "0%" }}
              animate={{
                width: index < currentSlide ? "100%" : index === currentSlide && isPlaying ? `${progress}%` : index === currentSlide && !isPlaying ? `${progress}%` : "0%",
              }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        ))}
      </div>

      {/* Play/Pause button */}
      {/* <motion.button
        onClick={handlePlayPause}
        whileTap={{ scale: 0.95 }}
        className="ai-reel-control-btn ai-reel-control-btn-play"
      >
        {isPlaying ? (
          <Pause className="ai-reel-control-btn-icon" />
        ) : (
          <Play className="ai-reel-control-btn-icon" />
        )}
      </motion.button> */}

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="ai-reel-slide-container"
        >
          {/* Large icon/visual */}
          <div className="ai-reel-icon-container">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              className="ai-reel-icon"
            >
              {slides[currentSlide].icon}
            </motion.div>
          </div>

          {/* Content */}
          <div className="ai-reel-content">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* <span className="ai-reel-slide-number">
                Slide {currentSlide + 1} of {slides.length}
              </span> */}
              <h3 className="ai-reel-slide-title">{slides[currentSlide].title}</h3>
              <p className="ai-reel-slide-description">{slides[currentSlide].description}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {/* <motion.button
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="ai-reel-control-btn ai-reel-control-btn-prev"
      >
        <ChevronLeft className="ai-reel-control-btn-icon" />
      </motion.button> */}

      {/* <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="ai-reel-control-btn ai-reel-control-btn-next"
      >
        <ChevronRight className="ai-reel-control-btn-icon" />
      </motion.button> */}

      {/* Dots indicator */}
      {/* <div className="ai-reel-dots">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileTap={{ scale: 0.9 }}
            className={`ai-reel-dot ${
              index === currentSlide ? "active" : "inactive"
            }`}
          />
        ))}
      </div> */}
    </div>
  )
}