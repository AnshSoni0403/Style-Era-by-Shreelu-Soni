"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const brushRef = useRef<HTMLDivElement>(null)

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with traditional patterns */}
      <div className="absolute inset-0 opacity-5">
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
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8 py-6 text-lg"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg bg-transparent"
            >
              Explore Collection
            </Button>
          </div>

          {/* Rotating showcase models */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { name: "Heritage Collection", image: "/traditional-hand-painted-kurta-on-mannequin.jpg" },
              { name: "Luxury Ethnic", image: "/elegant-ethnic-wear-saree-on-mannequin.jpg" },
              { name: "Modern Tradition", image: "/contemporary-ethnic-jacket-on-mannequin.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                  <p className="text-primary-foreground font-serif text-xl p-6 w-full text-center">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
