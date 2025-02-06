interface HeroProps {
  title: string
  imagePath: string
}

export function Hero({ title, imagePath }: HeroProps) {
  return (
    <div className="relative h-[300px] mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  )
}

