"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Leaf, Users } from "lucide-react"

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <motion.h1 variants={fadeInDown} className="text-5xl lg:text-6xl font-serif leading-tight text-balance">
                Style Era by Shreelu Soni
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                Celebrating the artistry and soul of hand-painted Indian fashion. Each piece is a canvas of creativity,
                tradition, and love for our cultural heritage.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-xl font-serif text-primary">Our Craft</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every kurta, saree, and choli is meticulously hand-painted by skilled artisans who pour their passion
                  into each brushstroke. We believe in creating pieces that tell stories—stories of tradition, artistry,
                  and the beauty of handmade craftsmanship.
                </p>
              </motion.div>
            <a href="/">
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-fit px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                Explore Collection
              </motion.button> </a>
            </motion.div>
            

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/image.png"
                  alt="Style Era founder Shreelu Soni with festive attire"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-serif text-center mb-16 text-balance"
          >
            Why Style Era
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Handmade Love",
                description: "Each piece is crafted with care and attention to detail by skilled artisans",
              },
              {
                icon: Sparkles,
                title: "Unique Designs",
                description: "Hand-painted patterns that celebrate cultural heritage and artistic expression",
              },
              {
                icon: Leaf,
                title: "Quality Fabrics",
                description: "Premium materials chosen to complement our intricate hand-painted designs",
              },
              {
                icon: Users,
                title: "Artisan Support",
                description: "Fair practices that honor and support the talented artists behind every piece",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collection Highlight */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-balance">Our Collections</h2>
              <p className="text-lg text-foreground/70 mb-8">
                From traditional sarees to contemporary kurtas, each collection celebrates the fusion of heritage and
                modern style.
              </p>
               <a href="/">
              <button className="w-fit px-6 py-2 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                View All
              </button>
              </a>
            </motion.div>

            {[
              {
                title: "Hand-Painted Kurtas",
                description: "Elegant kurtas with intricate floral and geometric patterns",
                color: "from-primary/20",
              },
              {
                title: "Festive Sarees",
                description: "Celebrate with our hand-painted sarees perfect for every occasion",
                color: "from-accent/20",
              },
              {
                title: "Choli & Blouses",
                description: "Beautifully crafted blouses to complete your traditional look",
                color: "from-secondary/40",
              },
            ].map((collection, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${collection.color} to-transparent rounded-xl p-8 border border-primary/20 cursor-pointer hover:shadow-lg transition-all`}
              >
                <h3 className="text-2xl font-serif mb-3">{collection.title}</h3>
                <p className="text-foreground/70 mb-6">{collection.description}</p>
                <div className="flex items-center text-primary font-medium gap-2">
                  <a href="/">Explore</a>
                  <span className="text-xl">→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-serif mb-6 text-balance"
          >
            Discover Artistry
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Each piece from Style Era carries the soul of traditional Indian craftsmanship. Join our community of those
            who appreciate true artistry and cultural heritage.
          </motion.p>
          <a href="/">
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            Shop Now
          </motion.button>
          </a>
        </div>
      </section>
    </main>
  )
}
