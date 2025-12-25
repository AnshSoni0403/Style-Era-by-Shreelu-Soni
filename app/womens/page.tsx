"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import RangoliDivider from "@/components/rangoli-divider"
import RotatingRangoli from "@/components/rotating-rangoli"
import { Sparkles, Heart, Brush } from "lucide-react"

const allWomensProducts = [
  {
    id: 5,
    name: "Colourful Dye Odhani",
    price: 18999,
    image: "/images/Women's/9.png",
    description: "Dyed at home to give traditional touch",
  },
  {
    id: 6,
    name: "Janmashtmi Special Blouse",
    price: 24999,
    image: "/images/Women's/2.png",
    description: "Feel lord Krishna with this special design",
  },
  {
    id: 7,
    name: "Haldi Special Design",
    price: 12999,
    image: "/images/Women's/11.png",
    description: "Make your haldi ceremony memorable with this special design",
  },
  {
    id: 8,
    name: "Pichwai Paiting Saree",
    price: 8999,
    image: "/images/Women's/12.png",
    description: "Flute and Pichwai painting theme",
  },
  {
    id: 17,
    name: "Floral Indo-Western Fusion",
    price: 22999,
    image: "/images/Women's/5.jpeg",
    description: "Modern fusion piece with floral motifs",
  },
  {
    id: 18,
    name: "Floral Sharara Gown",
    price: 15999,
    image: "/images/Women's/6.jpeg",
    description: "Elegant fusion gown with floral embroidery",
  },
  {
    id: 19,
    name: "Navratri Choli",
    price: 6999,
    image: "/images/Women's/7.jpeg",
    description: "Perfect for festive occasions with traditional motifs",
  },
  {
    id: 20,
    name: "Sangeet in Simple Choli Set",
    price: 11999,
    image: "/images/Women's/8.jpeg",
    description: "Perfect for sangeet occasions with elegant design and comfortable fit",
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
                      src="/images/Women's/1.png"
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

        <div className="relative mt-32 lg:mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
              {/* Left Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2"
                  >
                    <span className="text-xs font-semibold tracking-widest">FEATURED COLLECTION</span>
                  </motion.div>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Elegance in Every <span className="text-primary">Drape</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                    Hand-painted saree crafted for festive grace with soft hues, intricate motifs, and timeless appeal.
                    Every piece tells a story of tradition and artistry.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hand-Crafted Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        Each design is meticulously hand-painted by skilled artisans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Premium Fabrics</h4>
                      <p className="text-sm text-muted-foreground">
                        Finest silk and cotton sourced from traditional mills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Unique Pieces</h4>
                      <p className="text-sm text-muted-foreground">
                        No two garments are exactly alike, making you truly one-of-a-kind
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-primary text-accent rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Collection
                </motion.button>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hidden lg:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10"
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="drop-shadow-lg">
                  {/* Arrow curve */}
                  <motion.path
                    d="M 10 40 Q 40 20, 70 40"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="text-primary"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  />
                  {/* Arrow head */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    <path d="M 70 40 L 62 35 L 64 40 L 62 45 Z" fill="currentColor" className="text-primary" />
                  </motion.g>
                  {/* Decorative circles */}
                  <motion.circle
                    cx="10"
                    cy="40"
                    r="4"
                    fill="currentColor"
                    className="text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  />
                  <motion.circle
                    cx="70"
                    cy="40"
                    r="4"
                    fill="currentColor"
                    className="text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                  />
                </svg>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
                  {/* Decorative background shape */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #FFB3D9 0%, #FFE5EC 100%)",
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Image Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-8 ring-background/50"
                  >
                    <img src="/images/Women's/4.png" alt="Featured Saree" className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Floating accent card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-muted p-5 w-72 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-foreground">Artisan Made</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Crafted with precision by master artisans preserving traditional techniques
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
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
            {/* <h2 className="font-serif text-5xl font-bold text-foreground mb-4">Our Collections</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of traditional and contemporary ethnic wear
            </p> */}
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
