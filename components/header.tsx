"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Style Era Logo"
              width={scrolled ? 50 : 60}
              height={scrolled ? 50 : 60}
              className="transition-all duration-300"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/mens" className="text-foreground hover:text-accent transition-colors font-medium">
            Men's Collection
          </a>
          <a href="/womens" className="text-foreground hover:text-accent transition-colors font-medium">
            Women's Collection
          </a>
          <a href="/kids" className="text-foreground hover:text-accent transition-colors font-medium">
            Kids' Collection
          </a>
        </nav>

        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#mens"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Men's Collection
            </a>
            <a
              href="#womens"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Women's Collection
            </a>
            <a
              href="#kids"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Kids' Collection
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
