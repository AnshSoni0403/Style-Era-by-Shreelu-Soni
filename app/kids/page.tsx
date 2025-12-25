"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import RangoliDivider from "@/components/rangoli-divider"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const allKidsProducts = [
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
  {
    id: 21,
    name: "Bandhani Print Kurta",
    price: 1999,
    image: "/kids-bandhani-kurta-traditional.jpg",
    description: "Colorful bandhani print for festivals",
  },
  {
    id: 22,
    name: "Mirror Work Chaniya Choli",
    price: 3499,
    image: "/kids-chaniya-choli-mirror-work.jpg",
    description: "Sparkling chaniya choli with mirror embellishments",
  },
  {
    id: 23,
    name: "Embroidered Nehru Jacket",
    price: 2299,
    image: "/kids-nehru-jacket-embroidered.jpg",
    description: "Stylish Nehru jacket for young gentlemen",
  },
  {
    id: 24,
    name: "Floral Print Salwar Set",
    price: 2599,
    image: "/kids-salwar-set-floral-print.jpg",
    description: "Comfortable salwar with bright floral patterns",
  },
]

export default function KidsCollectionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />

      <section className="relative min-h-screen py-20 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5C4] via-background to-[#FFE5EC]" />

        {/* Decorative shapes */}
        {["🎈", "⭐", "🌈", "🎨", "✨"].map((emoji, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute text-5xl opacity-20"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
            {/* Left card - Welcome */}
            <motion.div
              initial={{ x: -100, opacity: 0, rotateY: -20 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-[350px] h-[500px] bg-gradient-to-br from-[#C4A57B] to-[#A0826D] rounded-3xl shadow-2xl overflow-hidden"
              style={{ transform: "perspective(1000px)" }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-accent text-2xl font-semibold mb-2">Welcome to</h3>
                  <h2 className="text-accent text-xl mb-8">Little Stars</h2>
                </div>

                <div className="relative h-64 -mx-8 -mb-8">
                  <img src="/cute-indian-kid-in-traditional-ethnic-wear-kurta.jpg" alt="Kids Fashion" className="w-full h-full object-cover" />
                </div>

                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-16 left-8 right-8"
                >
                  <h1
                    className="font-serif text-5xl font-black text-accent mb-4"
                    style={{
                      textShadow: "3px 3px 0 rgba(0,0,0,0.1)",
                      transform: "rotate(-2deg)",
                    }}
                  >
                    VIBRANT
                    <br />
                    <span className="text-4xl">TRADITION</span>
                  </h1>
                </motion.div>
              </div>
            </motion.div>

            {/* Center card - Featured */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full lg:w-[380px] h-[550px] bg-gradient-to-br from-[#A0826D] via-[#8B6F5C] to-[#6B5444] rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="text-accent">
                  <div className="w-12 h-1 bg-accent mb-4" />
                  <h3 className="text-3xl font-bold">Discover</h3>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-16 h-16 rounded-full bg-[#E8D5C4] flex items-center justify-center"
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
              </div>

              <div className="absolute top-32 left-8 right-8">
                <h2 className="text-accent text-5xl font-bold mb-4">
                  TRENDING
                  <br />
                  STYLES
                </h2>
                <div className="flex items-center gap-4 text-accent">
                  <span className="text-3xl font-bold">₹1,999</span>
                  <span className="text-lg line-through opacity-60">₹2,999</span>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="mt-6 inline-block"
                >
                  <div className="bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold">
                    LIMITED TIME OFFER
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-64">
                <img src="/indian-child-in-colorful-traditional-dress-ethnic-.jpg" alt="Featured Style" className="w-full h-full object-cover" />
              </div>

              {/* Small category previews */}
              <div className="absolute bottom-8 left-8 flex gap-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-20 rounded-xl bg-[#E8D5C4]/30 backdrop-blur-sm border border-accent/30 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={`/kids-ethnic-wear-style-.jpg?key=t001a&height=80&width=64&query=kids ethnic wear style ${i}`}
                      alt={`Style ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content - Info cards */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 w-full lg:w-[350px]"
            >
              {[
                {
                  icon: "🌟",
                  title: "100% Comfortable",
                  desc: "Soft, breathable fabrics perfect for active kids",
                  color: "from-[#FFE5EC] to-[#FFF0F5]",
                },
                {
                  icon: "🎨",
                  title: "Vibrant Colors",
                  desc: "Bright, fade-resistant colors that kids love",
                  color: "from-[#E6F3FF] to-[#F0F8FF]",
                },
                {
                  icon: "✨",
                  title: "Easy Care",
                  desc: "Machine washable, maintains quality after multiple washes",
                  color: "from-[#F5E6D3] to-[#FFF5E6]",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  className={`relative bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative flex items-start gap-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

       
      </section>

      <RangoliDivider />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold text-foreground mb-4">Little Stars Collection</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {allKidsProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: (index % 4) * 0.1,
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.5,
                }}
                whileHover={{
                  y: -30,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 },
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <RangoliDivider />

      {/* Fun Facts Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFE5EC] to-[#E6F3FF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Made for Little Ones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soft fabrics, vibrant colors, and comfortable designs perfect for active kids
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🌟", text: "100% Comfortable" },
              { emoji: "🎨", text: "Bright Colors" },
              { emoji: "💪", text: "Durable Quality" },
              { emoji: "😊", text: "Kids Approved" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-6xl mb-3">{item.emoji}</div>
                <p className="font-semibold text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
