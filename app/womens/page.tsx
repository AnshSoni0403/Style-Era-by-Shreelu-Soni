"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import RangoliDivider from "@/components/rangoli-divider"
import RotatingRangoli from "@/components/rotating-rangoli"
import { ChevronLeft, Sparkles, Heart, Brush } from "lucide-react"
import Link from "next/link"

const allWomensProducts = [
  {
    id: 5,
    name: "Banarasi Silk Saree",
    price: 18999,
    image: "/luxury-hand-painted-silk-saree-traditional.jpg",
    description: "Pure Banarasi silk with intricate zari work and hand-painted borders",
  },
  {
    id: 6,
    name: "Bridal Lehenga Set",
    price: 24999,
    image: "/floral-lehenga-ethnic-bridal-wear.jpg",
    description: "Designer bridal lehenga with hand-embroidered floral motifs",
  },
  {
    id: 7,
    name: "Designer Anarkali Suit",
    price: 12999,
    image: "/anarkali-suit-designer-ethnic-wear.jpg",
    description: "Floor-length Anarkali with hand-painted peacock designs",
  },
  {
    id: 8,
    name: "Palazzo Suit Set",
    price: 8999,
    image: "/palazzo-suit-hand-painted-traditional.jpg",
    description: "Contemporary palazzo suit with traditional block print patterns",
  },
  {
    id: 17,
    name: "Kanjivaram Silk Saree",
    price: 22999,
    image: "/banarasi-silk-saree-bridal-wear.jpg",
    description: "Traditional Kanjivaram with temple border and rich pallu",
  },
  {
    id: 18,
    name: "Embroidered Sharara",
    price: 15999,
    image: "/sharara-set-embroidered-party-wear.jpg",
    description: "Stunning sharara with mirror work and gota patti detailing",
  },
  {
    id: 19,
    name: "Chanderi Kurta Set",
    price: 6999,
    image: "/chanderi-kurta-set-ethnic-casual.jpg",
    description: "Lightweight chanderi with delicate hand-block prints",
  },
  {
    id: 20,
    name: "Indo-Western Gown",
    price: 11999,
    image: "/georgette-gown-indo-western-fusion.jpg",
    description: "Fusion georgette gown with contemporary silhouette",
  },
]

export default function WomensCollectionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative overflow-x-hidden bg-background">
      <RotatingRangoli />

      <Header />

      <section className="relative min-h-screen py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-background to-[#FFE5EC]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Main large circular image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full aspect-square max-w-[600px] mx-auto"
                >
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #8B1538 0%, #A52A4A 100%)",
                    }}
                  >
                    <img
                      src="/elegant-indian-woman-in-traditional-saree-ethnic-f.jpg"
                      alt="Women's Ethnic Fashion"
                      className="w-full h-full object-cover opacity-95"
                    />
                  </div>

                  <div
                    className="absolute -bottom-20 -left-20 w-80 h-80 -z-10"
                    style={{
                      background: "linear-gradient(135deg, #FFB3D9 0%, #FFE5EC 100%)",
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  />
                </motion.div>

                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="absolute -right-16 top-1/3 w-32 h-32"
                  viewBox="0 0 100 100"
                  style={{ transform: "rotate(-20deg)" }}
                >
                  <motion.path
                    d="M 10 50 Q 40 30, 70 50"
                    stroke="#000000"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M 70 50 L 65 45 M 70 50 L 65 55"
                    stroke="#000000"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 relative z-20"
            >
              {/* Category badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="inline-flex items-center gap-2 bg-primary text-accent rounded-full px-6 py-3 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">PREMIUM COLLECTION</span>
              </motion.div>

              {/* Large heading */}
              <div className="space-y-4">
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Clothes can transform your
                  <br />
                  <span className="text-primary italic">mood and confidence.</span>
                </h1>
              </div>

              {/* Info card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-lg border border-muted"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#FF80B8] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Unique in World</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every saree and lehenga has its own unique styles, hand-painted with traditional motifs that
                    celebrate our rich heritage.
                  </p>
                </div>
              </motion.div>

              {/* Info card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-lg border border-muted"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#FF80B8] flex items-center justify-center flex-shrink-0">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Fashion Your Way</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fashion is a way to showcase who you are. Our artisan-crafted pieces ensure there is no one right
                    way to dress.
                  </p>
                </div>
              </motion.div>

              {/* Quote in handwriting style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 pl-8 border-l-4 border-primary"
              >
                <p className="text-2xl text-primary italic font-light" style={{ fontFamily: "Georgia, serif" }}>
                  "Design and style should work toward making you look good and feel good."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

       
      </section>

      <RangoliDivider />

      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold text-foreground mb-4">Our Collections</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of traditional and contemporary ethnic wear
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Sarees", icon: "🥻", count: "50+" },
              { name: "Lehengas", icon: "👘", count: "35+" },
              { name: "Anarkalis", icon: "👗", count: "40+" },
              { name: "Suits", icon: "🧥", count: "60+" },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-card rounded-3xl p-8 shadow-lg border-2 border-muted hover:border-accent/50 transition-all cursor-pointer text-center"
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-muted-foreground text-sm">{cat.count} Designs</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {allWomensProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: (index % 4) * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  y: -25,
                  rotate: 2,
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

      {/* Artisan Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">The Art of Hand-Painting</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every piece is a canvas where tradition meets contemporary artistry. Our artisans spend hours
              hand-painting intricate floral designs, paisley patterns, and traditional motifs on the finest fabrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎨", title: "Hand-Painted", desc: "Each design painted by skilled artisans" },
              { icon: "✨", title: "Premium Quality", desc: "Finest silk and cotton fabrics" },
              { icon: "💫", title: "Unique Pieces", desc: "No two garments are exactly alike" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-card rounded-3xl shadow-lg border-2 border-muted hover:border-accent/50 transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
