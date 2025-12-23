import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative pattern border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="Style Era Logo" width={80} height={80} />
            <p className="text-primary-foreground/80 leading-relaxed">
              Celebrating the art of tradition through hand-painted ethnic wear and luxury fashion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/mens" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="/womens" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="/kids" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kids' Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Shipping & Returns
                </a>
              </li> */}
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Size Guide
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQs
                </a>
              </li> */}
            </ul>
          </div>

         
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 73837 48103</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-4">
                <Mail className="w-4 h-4" />
                <span>styleera23.24@gmail.com</span>
              </div>
            </div>
            {/* <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div> */}
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent hover:text-accent-foreground transition-all hover:rotate-12"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent hover:text-accent-foreground transition-all hover:rotate-12"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent hover:text-accent-foreground transition-all hover:rotate-12"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© 2025 Style Era by Shreelusoni. All rights reserved. Crafted with tradition and love.</p>
        </div>
      </div>
    </footer>
  )
}
