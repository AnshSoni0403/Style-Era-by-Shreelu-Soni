import { Facebook, Instagram, Twitter, Mail, Phone, MessageSquare } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative pattern border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Style Era by Shreelusoni"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-serif text-2xl font-bold">Style Era</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Handcrafted ethnic wear that celebrates tradition with a contemporary touch, perfect for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="/womens" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="/mens" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="/kids" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kids' Collection
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 6355 036 908</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>styleerabyshreelusoni@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/style_erabyshreelusoni?igsh=ZGQ1dDZydWwyZzht" className="hover:scale-110 transition-transform">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://whatsapp.com/channel/0029Va6PQNs2ZjCmdpxR9j1D" className="hover:scale-110 transition-transform">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </Button>
              </a>
              
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
