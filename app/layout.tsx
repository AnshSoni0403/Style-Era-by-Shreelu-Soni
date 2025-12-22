import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Style Era by Shreelusoni - Hand-Painted Kurtas & Ethnic Wear",
  description:
    "Discover the art of tradition with our exquisite collection of hand-painted kurtas, sarees, and ethnic wear. Luxury fashion that blends heritage with modern elegance.",
  keywords: "hand-painted kurtas, ethnic wear, traditional fashion, luxury sarees, Indian clothing",
  icons: {
    icon: "/logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className={`${lato.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
