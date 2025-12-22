"use client"

import { motion } from "framer-motion"

export default function RangoliDivider() {
  return (
    <div className="w-full flex justify-center py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Center circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="relative w-32 h-32"
        >
          {/* Inner circles */}
          <div className="absolute inset-0 border-4 border-accent rounded-full" />
          <div className="absolute inset-2 border-2 border-accent/60 rounded-full" />
          <div className="absolute inset-4 border-2 border-accent/40 rounded-full" />

          {/* Petals */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-60px)`,
              }}
            >
              <div className="w-8 h-12 bg-gradient-to-b from-accent to-accent/60 rounded-full" />
            </motion.div>
          ))}

          {/* Dots around */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-80px)`,
              }}
            >
              <div className="w-3 h-3 bg-accent rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
