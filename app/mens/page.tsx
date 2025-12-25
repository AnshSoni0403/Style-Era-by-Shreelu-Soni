"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import RangoliDivider from "@/components/rangoli-divider"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
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

// Deity icon components (simple emoji placeholders; swap with SVGs/images anytime)
const KrishnaIcon = () => (
  <span role="img" aria-label="Lord Krishna" className="inline-block">🦚</span>
)
const GaneshIcon = () => (
  <span role="img" aria-label="Lord Ganesh" className="inline-block">🕉️</span>
)
const AmbaIcon = () => (
  <span role="img" aria-label="Goddess Amba" className="inline-block">🪔</span>
)

const festivalsData = [
  {
    id: "janmashtami",
    name: "Janmashtami Collection",
    theme: "कृष्णाय वासुदेवाय नमः",
    description: "Celebrate Krishna's divine presence with our enchanting Janmashthmi collection",
    bgGradient: "from-blue-900 via-indigo-800 to-purple-900",
    accentColor: "text-yellow-300",
    icon: <KrishnaIcon />,
    deityImage: "/images/Mens/Shreenathji.png",
    products: [
      { id: 1, name: "Shreenathji Kurta", price: "white", image: "/images/Mens/12.png" },
      { id: 2, name: "Pink Krishna Kurta", price: 5999, image: "/images/Mens/21.png" },
      { id: 3, name: "Bal Leela Kurta", price: 6499, image: "/images/Mens/22.png" },
      { id: 4, name: "Chakra Golden Kurta", price: 7999, image: "/images/Mens/23.png" },
      { id: 5, name: "Flute Pattern Kurta", price: 5799, image: "/images/Mens/18.png" },
    ],
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    theme: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः",
    description: "Start your journey with blessings in our vibrant Ganesh Chaturthi collection",
    bgGradient: "from-orange-600 via-red-600 to-pink-600",
    accentColor: "text-yellow-200",
    icon: <GaneshIcon />,
    deityImage: "/images/Mens/Ganeshji.png",
    products: [
      { id: 6, name: "Glory Kurta", price: 5299, image: "/images/Mens/25.jpeg" },
      { id: 7, name: "Ganesha Painted Kurta", price: 6299, image: "/images/Mens/4.png" },
      { id: 8, name: "Minimal White Kurta", price: 5899, image: "/images/Mens/1.png" },
      { id: 9, name: "Cute Bal Ganesha", price: 7499, image: "/images/Mens/26.jpeg" },
      { id: 10, name: "Safron Kurta", price: 6799, image: "/images/Mens/19.png" },
    ],
  },
  {
    id: "navratri",
    name: "Navratri Collection",
    theme: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता",
    description: "Dance through the festival in our vibrant multi-hued collection",
    bgGradient: "from-pink-600 via-purple-600 to-indigo-600",
    accentColor: "text-yellow-300",
    icon: <AmbaIcon />,
    deityImage: "/images/Mens/Durga.png",
    products: [
      { id: 11, name: "Godess Durga", price: 4999, image: "/images/Mens/7.png" },
      { id: 12, name: "Garba Special Set", price: 6999, image: "/images/Mens/25.png" },
      { id: 13, name: "Couple Dandiya Kurta", price: 7499, image: "/images/Mens/27.png" },
      { id: 14, name: "Dusserra Special Kurta", price: 5799, image: "/images/Mens/28.png" },
      { id: 15, name: "Gokul no Govaliyo", price: 6299, image: "/images/Mens/24.png" },
    ],
  },
]

export default function MensCollectionPage() {
  const [isVisible, setIsVisible] = useState(false)

  const [activeFestival, setActiveFestival] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: { x: number }, velocity: { x: number }) => {
    return Math.abs(offset.x) * velocity.x
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveFestival((prev) => {
      const next = prev + newDirection
      if (next < 0) return festivalsData.length - 1
      if (next >= festivalsData.length) return 0
      return next
    })
  }

  const currentFestival = festivalsData[activeFestival]

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
                  <img src="/images/Mens/11.png" alt="Men's Fashion" className="w-full h-full object-cover" />
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
       
      </section>

      {/* Festive Collection Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Festive Collection</h2>
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrate India's vibrant festivals in style with our exclusive collections
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {festivalsData.map((festival, index) => (
              <motion.button
                key={festival.id}
                onClick={() => {
                  setDirection(index > activeFestival ? 1 : -1)
                  setActiveFestival(index)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 border ${
                  activeFestival === index
                    ? "bg-white text-foreground border-transparent shadow-md"
                    : "bg-white text-foreground hover:shadow border-border"
                }`}
              >
                {festival.name.split(" ")[0]}
              </motion.button>
            ))}
          </div>

          {/* Deity image below tabs for active festival */}
          <div className="flex justify-center mb-10">
            <img
              src={currentFestival.deityImage}
              alt={`${currentFestival.name} deity`}
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full shadow-2xl border-4 border-white"
            />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeFestival}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h3 className={`font-serif text-4xl md:text-5xl font-bold ${currentFestival.accentColor}`}>
                  {currentFestival.theme}
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{currentFestival.description}</p>
              </div>

              <div className="relative">
                <div className="overflow-hidden px-4">
                  <motion.div className="flex gap-6 pb-8" initial={{ x: 0 }}>
                    {currentFestival.products.map((product, index) => (
                      <motion.div key={product.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex-shrink-0 w-64">
                        <div className="group relative bg-white rounded-3xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                          <div className="relative h-80 overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            
                          </div>
                          <div className="p-6 space-y-3">
                            <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{product.name}</h4>
                            <div className="flex items-center justify-between">
                              {/* <span className="text-2xl font-bold text-accent">₹{product.price.toLocaleString()}</span> */}
                              {/* <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent transition-colors">
                                View
                              </motion.button> */}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition-all duration-300 hover:scale-110">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition-all duration-300 hover:scale-110">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="text-center">
                {/* <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors shadow-2xl">
                  Shop {currentFestival.name}
                </motion.button> */}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse" />
        </div>
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
                src="/images/Mens/11.png"
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
