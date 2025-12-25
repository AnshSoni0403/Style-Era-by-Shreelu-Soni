"use client"

import { useEffect, useRef, useState } from "react"
import ProductCard from "./product-card"

const kidsProducts = [
  {
    id: 9,
    name: "Little Princess Frock",
    price: 2499,
    image: "/images/Kids/1.png",
    description: "Comfortable cotton kurta with Lotus on frock",
  },
  {
    id: 10,
    name: "Frock for doll",
    price: 3999,
    image: "/images/Kids/9.png",
    description: "Adorable frock with comfortable fit",
  },
  {
    id: 11,
    name: "6th auspicious day after born",
    price: 2799,
    image: "/images/Kids/7.png",
    description: "Let vidhata be happy and blessed with royal set-up",
  },
  {
    id: 12,
    name: "Ethnic Gown",
    price: 2999,
    image: "/images/Kids/6.png",
    description: "Flowing ethnic gown with vibrant colors",
  },
]

export default function KidsCollection() {
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
      id="kids"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-muted/20 to-background overflow-hidden"
    >
      {/* Playful background with pastel colors */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 bg-accent rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-10 right-20 w-64 h-64 bg-secondary rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Kids' Collection
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bright, playful ethnic wear that brings joy and tradition together for your little ones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kidsProducts.map((product, index) => (
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
            href="/kids"
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
