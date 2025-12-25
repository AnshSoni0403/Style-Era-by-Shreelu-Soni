"use client"

import { useState, useEffect, useRef } from "react"
import { Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price?: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight
        setScrollOffset(Math.sin(scrollProgress * Math.PI) * 20)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translateY(${scrollOffset}px) ${isHovered ? "translateY(-8px)" : ""}`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        clipPath: "path('M 0,80 Q 0,0 80,0 L calc(100% - 80),0 Q 100%,0 100%,80 L 100%,100% L 0,100% Z')",
        borderRadius: "0 0 12px 12px",
      }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            clipPath: "path('M 0,80 Q 0,0 80,0 L calc(100% - 80),0 Q 100%,0 100%,80 L 100%,100% L 0,100% Z')",
          }}
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay with golden border animation */}
        <div
          className={`absolute inset-0 border-4 border-accent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            clipPath: "path('M 0,80 Q 0,0 80,0 L calc(100% - 80),0 Q 100%,0 100%,80 L 100%,100% L 0,100% Z')",
          }}
        >
          <div className="absolute inset-0 gold-shimmer" />
        </div>

        {/* Quick action buttons */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-background/90 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-background/90 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">
        <h3 className="font-serif text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        {/* Price removed per current design requirements */}
      </div>
    </div>
  )
}
