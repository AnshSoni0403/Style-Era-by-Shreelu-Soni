"use client"

import { useEffect, useRef, useState } from "react"
import ProductCard from "./product-card"

const kidsProducts = [
  {
    id: 9,
    name: "Little Prince Kurta",
    price: 2499,
    image: "/kids-kurta-boy-traditional-ethnic-wear.jpg",
    description: "Comfortable cotton kurta with playful prints",
  },
  {
    id: 10,
    name: "Princess Lehenga",
    price: 3999,
    image: "/kids-lehenga-girl-festive-wear.jpg",
    description: "Adorable lehenga with flower motifs",
  },
  {
    id: 11,
    name: "Festive Dhoti Set",
    price: 2799,
    image: "/kids-dhoti-kurta-set-traditional.jpg",
    description: "Traditional dhoti set for special occasions",
  },
  {
    id: 12,
    name: "Ethnic Gown",
    price: 2999,
    image: "/kids-ethnic-gown-dress-traditional.jpg",
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
