import { Hero } from "../components/Hero"

export default function Litteraturliste() {
  return (
    <div>
      <Hero
        title="Litteraturliste"
        imagePath="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      <div className="container mx-auto px-4 space-y-6">
        <p className="text-lg">
          Her er en liste over bøger, artikler og andre ressourcer, som har været vigtige for min læring og udvikling.
        </p>
        {/* Add your literature list here */}
      </div>
    </div>
  )
}

