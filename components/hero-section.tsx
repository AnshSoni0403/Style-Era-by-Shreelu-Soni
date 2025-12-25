"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const brushRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const slides = [
    "/images/Slideshow/1.png",
    "/images/Slideshow/2.png",
    "/images/Slideshow/3.png",
    "/images/Slideshow/4.png",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-brushStroke")
          }
        })
      },
      { threshold: 0.5 },
    )

    if (brushRef.current) {
      observer.observe(brushRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <>
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden pt-24 md:pt-28">
        {/* Background with traditional patterns */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div
            className="absolute top-20 left-10 w-64 h-64 rounded-full border-8 border-accent/30 animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full border-8 border-secondary/20 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border-8 border-primary/20 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Full-width crossfade slideshow */}
        <div className="relative z-10 w-full h-full overflow-hidden">
          {slides.map((src, idx) => (
            <img
              key={src}
              src={src || "/placeholder.svg"}
              alt={`Slide ${idx + 1}`}
              className={
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 " +
                (idx === slide ? "opacity-100 scale-100" : "opacity-0 scale-105")
              }
            />
          ))}
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Main headline with brush stroke animation */}
            <div className="relative">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-fadeInUp text-balance">
                Discover the Art of Tradition
              </h1>
              <div
                ref={brushRef}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-accent w-0"
                style={{ maxWidth: "300px" }}
              />
            </div>

            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Hand-Painted Kurtas & Ethnic Wear
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
