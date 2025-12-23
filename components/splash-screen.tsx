"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800)
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFF9F0 0%, #FFF5EB 50%, #FFEEE0 100%)",
          }}
        >
          {/* Subtle rotating rangoli in background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center opacity-8"
          >
            <Image
              src="/images/image.png"
              alt="Rangoli Pattern"
              width={800}
              height={800}
              className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] object-contain"
            />
          </motion.div>

          {/* Elegant floating ornaments */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 15, 0],
                }}
                transition={{
                  duration: 5 + i * 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute text-5xl"
                style={{
                  left: `${i * 15 + 10}%`,
                  top: `${(i % 2) * 50 + 15}%`,
                  color: "#C9A961",
                  opacity: 0.4,
                }}
              >
                {i % 2 === 0 ? "✦" : "❋"}
              </motion.div>
            ))}
          </motion.div>

          {/* Radial glow effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 text-center space-y-6 px-8 max-w-6xl">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{ 
                duration: 1, 
                type: "spring", 
                stiffness: 80,
                damping: 15,
                delay: 0.2 
              }}
              className="relative w-40 h-40 mx-auto mb-4"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 40px rgba(212, 175, 55, 0.5)",
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-full h-full rounded-full"
              >
                <Image
                  src="/logo.png"
                  alt="Style Era Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Main title with refined styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-3 relative"
            >
              <div className="relative inline-block">
                <motion.h1
                  className="font-serif text-6xl md:text-8xl font-bold tracking-widest relative"
                  style={{
                    color: "#8B6F47",
                    letterSpacing: "0.25em",
                    fontWeight: 400,
                  }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    STYLE
                  </motion.span>
                  <span className="inline-block mx-4 text-5xl md:text-7xl" style={{ color: "#D4AF37" }}>
                    ✦
                  </span>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    ERA
                  </motion.span>
                </motion.h1>
                
                {/* Subtle underline accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-px"
                  style={{
                    width: "80%",
                    background: "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Elegant divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="flex items-center justify-center gap-3 py-4"
              >
                <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A961)" }} />
                <div className="text-lg" style={{ color: "#D4AF37" }}>❖</div>
                <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, #C9A961, transparent)" }} />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 1 }}
                className="text-xl md:text-2xl font-serif italic tracking-wider"
                style={{
                  color: "#8B1538",
                  fontWeight: 300,
                }}
              >
                by Shreelusoni
              </motion.p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center items-center gap-2.5 pt-6"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    delay: i * 0.12,
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#D4AF37" }}
                />
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 2.2, duration: 1.2 }}
              className="text-xs md:text-sm tracking-[0.3em] uppercase font-light pt-2"
              style={{ color: "#6B5D4F" }}
            >
              Hand-Painted • Artisan Crafted • Heritage
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}