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
            background: "linear-gradient(135deg, #F5E6D3 0%, #FFF8F0 50%, #FFE5D9 100%)",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center opacity-20"
          >
            <Image
              src="/images/image.png"
              alt="Rangoli Pattern"
              width={800}
              height={800}
              className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] object-contain"
            />
          </motion.div>

          {/* Floating traditional motifs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute text-6xl"
                style={{
                  left: `${i * 12 + 10}%`,
                  top: `${(i % 2) * 40 + 20}%`,
                  color: "#D4AF37",
                  opacity: 0.3,
                }}
              >
                {i % 3 === 0 ? "✿" : i % 3 === 1 ? "❀" : "◉"}
              </motion.div>
            ))}
          </motion.div>

          <div className="relative z-10 text-center space-y-8 px-8 max-w-6xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.3 }}
              className="relative w-48 h-48 mx-auto"
            >
              <Image
                src="/logo.png"
                alt="Style Era Logo"
                width={192}
                height={192}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-4 relative"
            >
              <div className="relative inline-block">
                <motion.h1
                  className="font-serif text-7xl md:text-9xl font-black tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.15em",
                    textShadow: "0 0 40px rgba(212, 175, 55, 0.3)",
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))",
                      "drop-shadow(0 0 20px rgba(212, 175, 55, 0.9))",
                      "drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  STYLE ERA
                </motion.h1>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-1 mx-auto"
                style={{
                  width: "400px",
                  maxWidth: "90%",
                  background: "linear-gradient(90deg, transparent 0%, #D4AF37 20%, #D4AF37 80%, transparent 100%)",
                  filter: "blur(1px)",
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase"
                style={{
                  color: "#8B1538",
                  fontFamily: "serif",
                }}
              >
                by Shreelusoni
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex justify-center items-center gap-2 pt-8"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    delay: i * 0.15,
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#D4AF37" }}
                />
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-sm tracking-widest"
              style={{ color: "#8B1538" }}
            >
              HAND-PAINTED • ARTISAN CRAFTED • HERITAGE
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
