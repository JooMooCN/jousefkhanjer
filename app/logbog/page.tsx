"use client"
import Image from "next/image"
import { Hero } from "../components/Hero"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

type LogEntry = {
  week: number
  title: string
  content: string
  image: string
}

type Subject = {
  name: string
  logs: LogEntry[]
}

const subjects: Subject[] = [
  {
    name: "App-udvikling",
    logs: [
      {
        week: 1,
        title: "Introduktion til React Native",
        content:
          "I denne uge dykkede jeg ned i grundlæggende React Native koncepter. Jeg lærte om komponenter, state, og props. Mit første projekt var en simpel todo-app, hvor jeg implementerede grundlæggende CRUD-operationer. Jeg stødte på udfordringer med styling på tværs af platforme, men fandt løsninger gennem community forums og officiel dokumentation. Næste uge vil jeg fokusere på navigation og mere avanceret state management.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974&h=1974",
      },
      {
        week: 2,
        title: "State Management og Navigation",
        content:
          "Denne uge fokuserede jeg på avanceret state management med Redux og navigation med React Navigation. Jeg udvidede min todo-app med multiple skærme og implementerede global state. Det var udfordrende at forstå Redux middleware, men efter at have arbejdet med det, ser jeg klart fordelene ved centraliseret state management.",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1974&h=1974",
      },
      // Tilføj flere uger efter behov
    ],
  },
  {
    name: "Spiludvikling i Unity",
    logs: [
      {
        week: 1,
        title: "Unity Basics og 2D Spildesign",
        content:
          "Min første uge med Unity var intens og spændende. Jeg lærte om Unity's interface, scene management, og GameObjects. Mit første projekt var et simpelt 2D platformspil. Jeg implementerede grundlæggende bevægelse, hopping, og simpel fjende AI. Udfordringen lå i at forstå koordinatsystemet og hvordan man effektivt bruger prefabs, men efter noget øvelse begyndte det at give mening.",
        image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=1974&h=1974",
      },
      {
        week: 2,
        title: "Physics og Collision Detection",
        content:
          "I denne uge fordybede jeg mig i Unity's physics engine. Jeg lærte om Rigidbody2D, forskellige typer af colliders, og hvordan man håndterer kollisioner i kode. Jeg tilføjede mere komplekse mekanikker til mit platformspil, såsom dobbelt-hop og vægspring. Det var udfordrende at finjustere fysikken for at opnå den rette 'feel', men resultatet var meget tilfredsstillende.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1974&h=1974",
      },
      // Tilføj flere uger efter behov
    ],
  },
]

function SubjectColumn({ subject }: { subject: Subject }) {
  return (
    <div className="w-full px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">{subject.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {subject.logs.map((log) => (
          <Dialog key={log.week}>
            <DialogTrigger asChild>
              <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={log.image || "/placeholder.svg"}
                    alt={`Uge ${log.week}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Uge {log.week}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{log.title}</h3>
                  <p className="text-sm text-muted-foreground">Klik for at se mere</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh]">
              <DialogHeader>
                <DialogTitle>
                  {subject.name} - Uge {log.week}: {log.title}
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-full pr-4">
                <div className="relative h-64 mb-4">
                  <Image
                    src={log.image || "/placeholder.svg"}
                    alt={`Uge ${log.week}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <DialogDescription className="text-lg leading-relaxed">{log.content}</DialogDescription>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default function Logbog() {
  return (
    <div>
      <Hero
        title="Logbog"
        imagePath="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <SubjectColumn subject={subjects[0]} />
          </div>
          <div className="hidden md:block w-px bg-gray-300 mx-4"></div>
          <div className="w-full md:w-1/2">
            <SubjectColumn subject={subjects[1]} />
          </div>
        </div>
      </div>
    </div>
  )
}

