"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TrendingTitle {
  id: number
  rank: number
  title: string
  image: string
}

export default function StreamerTopTitles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const trendingTitles: TrendingTitle[] = [
    { id: 1, rank: 1, title: "The Witcher", image: "/the-witcher-fantasy-series-dark.jpg" },
    { id: 2, rank: 2, title: "Frankenstein", image: "/frankenstein-gothic-horror.jpg" },
    { id: 3, rank: 3, title: "Wednesday", image: "/wednesday-addams-dark-aesthetic.jpg" },
    { id: 4, rank: 4, title: "Monster", image: "/monster-thriller-green.jpg" },
    { id: 5, rank: 5, title: "K-Pop Hunters", image: "/kpop-music-colorful-vibrant.jpg" },
    { id: 6, rank: 6, title: "Cernak", image: "/cernak-drama-thriller.jpg" },
    { id: 7, rank: 7, title: "The Crown", image: "/the-crown-royal-drama.jpg" },
    { id: 8, rank: 8, title: "Stranger Things", image: "/stranger-things-sci-fi-80s.jpg" },
    { id: 9, rank: 9, title: "Bridgerton", image: "/bridgerton-romance-period.jpg" },
    { id: 10, rank: 10, title: "The Witcher Blood Origin", image: "/witcher-blood-origin-fantasy.jpg" },
    { id: 11, rank: 11, title: "Ozark", image: "/ozark-crime-drama.jpg" },
    { id: 12, rank: 12, title: "Money Heist", image: "/money-heist-spanish-thriller.jpg" },
    { id: 13, rank: 13, title: "Dark", image: "/dark-german-mystery-sci-fi.jpg" },
    { id: 14, rank: 14, title: "Squid Game", image: "/squid-game-korean-thriller.jpg" },
    { id: 15, rank: 15, title: "The Last of Us", image: "/the-last-of-us-post-apocalyptic.jpg" },
    { id: 16, rank: 16, title: "Mandalorian", image: "/mandalorian-star-wars.jpg" },
    { id: 17, rank: 17, title: "Rings of Power", image: "/rings-of-power-fantasy-epic.jpg" },
    { id: 18, rank: 18, title: "House of Dragon", image: "/placeholder.svg?height=300&width=200" },
    { id: 19, rank: 19, title: "Ahsoka", image: "/placeholder.svg?height=300&width=200" },
    { id: 20, rank: 20, title: "Andor", image: "/placeholder.svg?height=300&width=200" },
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      return () => container.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScroll =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold mb-8 text-white">Trending Now</h2>

      <div className="relative group">
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-hidden scroll-smooth pb-2">
          {trendingTitles.map((title) => (
            <div key={title.id} className="flex-shrink-0 w-56 relative cursor-pointer group/card">
              <div className="card bg-base-200 shadow-xl overflow-hidden h-80 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <figure className="relative w-full h-full">
                  <img
                    src={title.image || "/placeholder.svg?height=320&width=224&query=netflix-trending-title"}
                    alt={title.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-7xl font-black text-white/20 leading-none">
                    {title.rank.toString().padStart(2, " ")}
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <h3 className="text-center font-bold text-xl text-white text-pretty">{title.title}</h3>
                  </div>
                </figure>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`btn btn-circle btn-lg absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 bg-white hover:bg-gray-200 text-black border-0 transition-all duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`btn btn-circle btn-lg absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 bg-white hover:bg-gray-200 text-black border-0 transition-all duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  )
}
