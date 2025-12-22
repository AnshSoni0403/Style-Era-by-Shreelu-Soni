"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import RangoliDivider from "@/components/rangoli-divider"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const allMensProducts = [
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
  {
    id: 13,
    name: "Embroidered Nehru Jacket",
    price: 5999,
    image: "/nehru-jacket-embroidered-mens-ethnic.jpg",
    description: "Contemporary Nehru jacket with intricate embroidery",
  },
  {
    id: 14,
    name: "Silk Sherwani",
    price: 12999,
    image: "/silk-sherwani-mens-wedding-wear.jpg",
    description: "Luxurious silk sherwani for grand occasions",
  },
  {
    id: 15,
    name: "Block Print Kurta",
    price: 3999,
    image: "/block-print-kurta-mens-casual.jpg",
    description: "Hand-block printed cotton kurta for everyday elegance",
  },
  {
    id: 16,
    name: "Velvet Indo-Western",
    price: 8999,
    image: "/velvet-indo-western-mens-party-wear.jpg",
    description: "Plush velvet Indo-Western with modern cuts",
  },
]

export default function MensCollectionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-screen py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#8B3A3A] to-primary opacity-95" />

        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23d4af37' fillOpacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Text content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-accent"
                />
                <h1 className="font-serif text-6xl md:text-8xl font-bold text-accent drop-shadow-2xl">
                  Men's Collection
                </h1>
                <p className="text-xl md:text-2xl text-accent/90 leading-relaxed max-w-xl">
                  Discover timeless elegance with our curated selection of hand-painted kurtas, sherwanis, and
                  Indo-Western wear
                </p>
              </div>

              {/* Feature cards */}
              <div className="space-y-4">
                {[
                  { label: "Unique in world", desc: "Every country and culture has its own unique styles" },
                  { label: "Fashion Your Way", desc: "Showcase who you are with traditional elegance" },
                  { label: "Dress to Impress", desc: "Make a positive impression with timeless style" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                    className="flex items-start gap-4 bg-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-accent mb-1">{item.label}</h3>
                      <p className="text-accent/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Circular image with decorative elements */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative">
                {/* Main circular image */}
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="relative w-[400px] h-[500px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden border-8 border-accent/30 shadow-2xl"
                >
                  <img src="/indian-man-in-traditional-kurta-ethnic-wear-fashio.jpg" alt="Men's Fashion" className="w-full h-full object-cover" />
                </motion.div>

                {/* Decorative circles */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-xl"
                />

                {/* Small accent elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-20 -left-20 w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border-2 border-accent/40 flex items-center justify-center"
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  className="absolute bottom-32 -right-16 w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm border-2 border-accent/40 flex items-center justify-center"
                >
                  <span className="text-3xl">👔</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="font-semibold">Back to Home</span>
        </Link>
      </section>

      <RangoliDivider />

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold text-foreground mb-4">Featured Collection</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {allMensProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: (index % 4) * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -20,
                  transition: { duration: 0.3 },
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <RangoliDivider />

      {/* Featured Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Crafted with Tradition</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each piece in our men's collection is meticulously hand-painted by skilled artisans, blending
                centuries-old techniques with contemporary designs. From intricate paisley motifs to bold mandala
                patterns, every kurta tells a story of heritage and craftsmanship.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-sm font-medium">100% Hand-Painted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-sm font-medium">Premium Fabrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-sm font-medium">Modern Fits</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/traditional-indian-men-s-ethnic-wear-artisan-craft.jpg"
                alt="Artisan crafting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
