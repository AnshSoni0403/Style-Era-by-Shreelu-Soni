"use client"

import { useEffect, useRef, useState } from "react"
import ProductCard from "./product-card"

const mensProducts = [
  {
    id: 1,
    name: "Royal Paisley Kurta",
    price: 4999,
    image: "/hand-painted-paisley-kurta-mens-traditional.jpg",
    description: "Hand-painted paisley motifs on premium cotton",
  },
  {
    id: 2,
    name: "Mandala Heritage Kurta",
    price: 5499,
    image: "/mandala-pattern-ethnic-kurta-mens.jpg",
    description: "Traditional mandala art with modern silhouette",
  },
  {
    id: 3,
    name: "Ethnic Silk Jacket",
    price: 7999,
    image: "/luxury-ethnic-silk-jacket-mens.jpg",
    description: "Premium silk with hand-embroidered details",
  },
  {
    id: 4,
    name: "Classic Bandhgala",
    price: 6499,
    image: "/traditional-bandhgala-jacket-mens.jpg",
    description: "Timeless elegance with contemporary flair",
  },
]

export default function MensCollection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="mens"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      {/* Traditional motifs background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Men's Collection
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover hand-painted kurtas and premium ethnic jackets that blend tradition with contemporary style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mensProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/mens"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold"
          >
            View Full Collection
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
