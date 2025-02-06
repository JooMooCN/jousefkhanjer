import { Hero } from "../components/Hero"

export default function Laeringsplan() {
  return (
    <div>
      <Hero
        title="Læringsplan"
        imagePath="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      <div className="container mx-auto px-4 space-y-6">
        <p className="text-lg">
          Min læringsplan indeholder mine mål og strategier for at forbedre mine færdigheder og viden.
        </p>
        {/* Add your learning plan details here */}
      </div>
    </div>
  )
}

