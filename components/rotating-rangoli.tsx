"use client"

import { motion } from "framer-motion"

export default function RotatingRangoli() {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="fixed top-20 left-10 w-64 h-64 pointer-events-none z-0 opacity-[0.08]"
      >
        <img src="/images/image.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="fixed top-40 right-20 w-48 h-48 pointer-events-none z-0 opacity-[0.06]"
      >
        <img src="/images/image.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="fixed bottom-32 left-1/4 w-56 h-56 pointer-events-none z-0 opacity-[0.07]"
      >
        <img src="/images/image.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="fixed bottom-20 right-1/3 w-40 h-40 pointer-events-none z-0 opacity-[0.05]"
      >
        <img src="/images/image.png" alt="" className="w-full h-full object-contain" />
      </motion.div>
    </>
  )
}
