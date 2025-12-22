"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MensCollection from "@/components/mens-collection"
import WomensCollection from "@/components/womens-collection"
import KidsCollection from "@/components/kids-collection"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingPetals from "@/components/floating-petals"
import SplashScreen from "@/components/splash-screen"
import RotatingRangoli from "@/components/rotating-rangoli"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isReady || showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <main className="relative overflow-x-hidden">
      <RotatingRangoli />
      <FloatingPetals />
      <Header />
      <HeroSection />
      <MensCollection />
      <WomensCollection />
      <KidsCollection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
