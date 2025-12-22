"use client"

import { useEffect, useRef, useState } from "react"
import ProductCard from "./product-card"

const womensProducts = [
  {
    id: 5,
    name: "Silk Saree Paradise",
    price: 12999,
    image: "/luxury-hand-painted-silk-saree-traditional.jpg",
    description: "Exquisite hand-painted silk with golden borders",
  },
  {
    id: 6,
    name: "Floral Lehenga Set",
    price: 15999,
    image: "/floral-lehenga-ethnic-bridal-wear.jpg",
    description: "Traditional lehenga with hand-painted florals",
  },
  {
    id: 7,
    name: "Designer Anarkali",
    price: 8999,
    image: "/anarkali-suit-designer-ethnic-wear.jpg",
    description: "Elegant Anarkali with intricate artwork",
  },
  {
    id: 8,
    name: "Heritage Palazzo Suit",
    price: 6999,
    image: "/palazzo-suit-hand-painted-traditional.jpg",
    description: "Contemporary palazzo with traditional motifs",
  },
]

export default function WomensCollection() {
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
      id="womens"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden"
    >
      {/* Watercolor effects background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-secondary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Women's Collection
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Flowy sarees, elegant lehengas, and hand-painted suits that celebrate femininity and tradition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {womensProducts.map((product, index) => (
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
            href="/womens"
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
