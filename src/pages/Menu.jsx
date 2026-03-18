import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import MenuCard from '../components/MenuCard'
import SectionReveal from '../components/SectionReveal'

const categories = [
  {
    id: 'entrees',
    label: 'Entrées',
    items: [
      { name: 'Velouté de Butternut', price: 14, description: 'Crème de butternut rôti, éclats de noisettes torréfiées et huile de truffe.', tag: 'Veggie' },
      { name: 'Tartare de Saumon', price: 18, description: 'Saumon Label Rouge, avocat, agrumes et vinaigrette au yuzu.' },
      { name: 'Burrata Crémeuse', price: 16, description: 'Burrata des Pouilles, tomates anciennes confites, pistou et pignons de pin.' },
      { name: 'Foie Gras Maison', price: 22, description: 'Terrine de foie gras mi-cuit, chutney de figues et pain brioché toasté.', tag: 'Signature' },
      { name: 'Carpaccio de Saint-Jacques', price: 20, description: 'Noix de Saint-Jacques, huile d\'olive citronnée, fleur de sel et ciboulette.' },
    ],
  },
  {
    id: 'plats',
    label: 'Plats',
    items: [
      { name: 'Filet de Bar Sauvage', price: 32, description: 'Bar rôti sur peau, écrasé de pommes de terre à l\'huile d\'olive, jus de bouillabaisse.', tag: 'Signature' },
      { name: 'Magret de Canard', price: 28, description: 'Magret rosé, purée de panais, jus à l\'orange sanguine et jeunes pousses.' },
      { name: 'Risotto aux Cèpes', price: 26, description: 'Riz carnaroli crémeux, cèpes sautés, copeaux de parmesan affiné 24 mois.', tag: 'Veggie' },
      { name: 'Agneau de Lozère', price: 34, description: 'Carré d\'agneau rôti aux herbes, ratatouille provençale et jus au thym.' },
      { name: 'Suprême de Volaille', price: 26, description: 'Volaille fermière, mousseline de céleri, sauce aux morilles et chips de topinambour.' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Tarte au Citron Revisitée', price: 14, description: 'Sablé breton, crème de citron de Menton, meringue italienne torchée.' },
      { name: 'Moelleux au Chocolat', price: 15, description: 'Chocolat Valrhona 70%, cœur coulant, glace vanille de Madagascar.', tag: 'Incontournable' },
      { name: 'Panna Cotta Exotique', price: 13, description: 'Crème vanillée, coulis de mangue-passion et éclats de coco torréfié.' },
      { name: 'Assiette de Fromages', price: 16, description: 'Sélection de 5 fromages affinés, confiture de cerises noires et noix.' },
      { name: 'Soufflé au Grand Marnier', price: 16, description: 'Soufflé aérien parfumé au Grand Marnier, crème anglaise à la vanille.', tag: 'Signature' },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('entrees')
  const sectionRefs = useRef({})
  const tabBarRef = useRef(null)

  // Scroll-Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToCategory = (id) => {
    setActiveCategory(id)
    sectionRefs.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="min-h-screen pt-6 md:pt-24 pb-28 md:pb-16">
      {/* Header */}
      <div className="px-6 md:px-20 max-w-4xl mx-auto mb-8">
        <SectionReveal>
          <span className="font-body text-xs font-medium tracking-[0.3em] uppercase text-sauge mb-3 block">
            Notre Carte
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-noir leading-tight">
            Le Menu
          </h1>
          <p className="font-body text-base text-gris mt-3 max-w-lg">
            Une carte pensée au fil des saisons, mettant en lumière les meilleurs produits de nos artisans.
          </p>
        </SectionReveal>
      </div>

      {/* Sticky Category Tabs */}
      <div
        ref={tabBarRef}
        className="sticky top-0 md:top-[73px] z-30 bg-sable/95 backdrop-blur-md border-b border-noir/5"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-20 flex gap-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`relative flex-1 py-4 font-body text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                activeCategory === cat.id
                  ? 'text-sauge'
                  : 'text-noir/40 hover:text-noir/70'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="menu-tab-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-sauge rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-4xl mx-auto px-6 md:px-20 mt-6">
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            className="scroll-mt-20 mb-12"
          >
            <SectionReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-noir mb-2 flex items-center gap-3">
                {cat.label}
                <span className="font-body text-xs text-gris-light font-normal tracking-wider">
                  {cat.items.length} plats
                </span>
              </h2>
            </SectionReveal>
            <div>
              {cat.items.map((item, i) => (
                <MenuCard key={i} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <SectionReveal>
        <div className="max-w-4xl mx-auto px-6 md:px-20 mt-8">
          <div className="bg-sable-dark rounded-2xl p-6 text-center">
            <p className="font-body text-sm text-gris leading-relaxed">
              Tous nos plats sont préparés maison avec des produits frais et de saison.
              <br />
              <span className="text-sauge font-medium">N'hésitez pas à nous signaler vos allergies.</span>
            </p>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
