import { Hero } from "../components/Hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Kontakt() {
  return (
    <div>
      <Hero
        title="Kontakt mig"
        imagePath="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      <div className="container mx-auto px-4 space-y-6">
        <p className="text-lg">
          Har du spørgsmål eller vil du gerne samarbejde? Udfyld formularen nedenfor, og jeg vil vende tilbage til dig
          hurtigst muligt.
        </p>
        <form className="space-y-4 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Navn
            </label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Besked
            </label>
            <Textarea id="message" name="message" rows={4} required />
          </div>
          <Button type="submit">Send besked</Button>
        </form>
      </div>
    </div>
  )
}

