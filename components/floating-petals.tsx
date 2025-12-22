"use client"

export default function FloatingPetals() {
  const petals = Array.from({ length: 15 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-accent/20 rounded-full animate-petalFall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  )
}
