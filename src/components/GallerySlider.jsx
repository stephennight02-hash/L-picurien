import { useRef, useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=600&h=750&fit=crop',
    alt: 'Plat gastronomique raffiné',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=750&fit=crop',
    alt: 'Assiette de saison',
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=750&fit=crop',
    alt: 'Dessert artisanal',
  },
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=750&fit=crop',
    alt: 'Cuisine du chef',
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=750&fit=crop',
    alt: 'Salade fraîche du marché',
  },
]

export default function GallerySlider() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = container.firstElementChild?.offsetWidth || 1
      const gap = 16
      const index = Math.round(scrollLeft / (itemWidth + gap))
      setActiveIndex(Math.min(index, galleryImages.length - 1))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Slider */}
      <div
        ref={scrollRef}
        className="snap-gallery flex gap-4 overflow-x-auto px-6 md:px-10 py-4"
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="shrink-0 w-[280px] md:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            aria-label={`Image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'bg-sauge w-6'
                : 'bg-noir/15 hover:bg-noir/30'
            }`}
            onClick={() => {
              const container = scrollRef.current
              const itemWidth = container?.firstElementChild?.offsetWidth || 280
              container?.scrollTo({
                left: i * (itemWidth + 16),
                behavior: 'smooth',
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}
