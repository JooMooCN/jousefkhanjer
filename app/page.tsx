import { Hero } from "./components/Hero"

export default function Home() {
  return (
    <div>
      <Hero
        title="Om mig"
        imagePath="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      <div className="container mx-auto px-4 space-y-6">
        <p className="text-lg">
          Velkommen til min portfolio! Jeg er en passioneret udvikler med erfaring inden for web-teknologier. Her kan du
          læse mere om mine færdigheder, projekter og erfaringer.
        </p>
        {/* Add more content about yourself here */}
      </div>
    </div>
  )
}

