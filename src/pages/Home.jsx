import SectionReveal from '../components/SectionReveal'
import GallerySlider from '../components/GallerySlider'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative h-[100svh] flex items-end md:items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=1800&fit=crop"
            alt="Intérieur élégant du restaurant L'Épicurien"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 pb-28 md:pb-0 md:px-20 md:max-w-2xl">
          <SectionReveal delay={0.2}>
            <span className="inline-block font-body text-xs font-medium tracking-[0.3em] uppercase text-blanc/70 mb-4">
              Restaurant Gastronomique
            </span>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-blanc leading-[0.95] mb-4">
              L'Art de
              <br />
              <span className="text-sauge-light italic">Goûter</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.6}>
            <p className="font-body text-base md:text-lg text-blanc/70 max-w-md mb-8 leading-relaxed">
              Une cuisine d'auteur qui célèbre les saveurs authentiques, les produits de saison et le plaisir du partage.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.8}>
            <div className="flex flex-wrap gap-3">
              <Button href="/menu" size="lg">
                Découvrir le Menu
              </Button>
              <Button href="/reservation" variant="outline" size="lg" className="border-blanc/30 text-blanc hover:bg-blanc/10 hover:text-blanc">
                Réserver
              </Button>
            </div>
          </SectionReveal>
        </div>

      </section>

      {/* ═══════════ PHILOSOPHIE ═══════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <span className="font-body text-xs font-medium tracking-[0.3em] uppercase text-sauge mb-4 block">
              Notre Philosophie
            </span>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-6">
            {/* Text */}
            <div>
              <SectionReveal delay={0.1}>
                <h2 className="font-heading text-3xl md:text-5xl font-semibold text-noir mb-6 leading-tight">
                  Le goût de
                  <br />
                  <span className="italic text-sauge">l'excellence</span>
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="font-body text-base text-gris leading-relaxed mb-4">
                  Chez L'Épicurien, chaque plat est une ode aux producteurs locaux et au terroir français. Notre Chef puise son inspiration dans la nature, les saisons et les traditions culinaires revisitées.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <p className="font-body text-base text-gris leading-relaxed mb-6">
                  Des herbes fraîchement cueillies de notre jardin aux poissons livrés chaque matin par les pêcheurs de la côte, nous sélectionnons le meilleur pour créer des saveurs inoubliables.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.4}>
                <div className="flex gap-10 mt-8">
                  <div>
                    <span className="font-heading text-4xl font-bold text-sauge">15</span>
                    <p className="font-body text-xs text-gris uppercase tracking-widest mt-1">Ans d'expérience</p>
                  </div>
                  <div>
                    <span className="font-heading text-4xl font-bold text-sauge">1</span>
                    <p className="font-body text-xs text-gris uppercase tracking-widest mt-1">Étoile Michelin</p>
                  </div>
                  <div>
                    <span className="font-heading text-4xl font-bold text-sauge">100%</span>
                    <p className="font-body text-xs text-gris uppercase tracking-widest mt-1">Produits frais</p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <SectionReveal delay={0.2} className="col-span-2">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=500&fit=crop"
                    alt="Le Chef en cuisine"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
                    alt="Préparation minutieuse"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.4}>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop"
                    alt="Dressage raffiné"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MICRO-GALERIE ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-20 mb-8">
          <SectionReveal>
            <span className="font-body text-xs font-medium tracking-[0.3em] uppercase text-sauge mb-3 block">
              Nos Créations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-noir">
              Instants de <span className="italic text-sauge">saveurs</span>
            </h2>
          </SectionReveal>
        </div>
        <SectionReveal delay={0.2}>
          <GallerySlider />
        </SectionReveal>
      </section>

      {/* ═══════════ CALL TO ACTION ═══════════ */}
      <section className="py-20 md:py-28 px-6 md:px-20">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-noir mb-4 leading-tight">
              Prêt à vivre une
              <br />
              <span className="italic text-sauge">expérience unique</span> ?
            </h2>
            <p className="font-body text-base text-gris mb-8">
              Réservez votre table et laissez-vous transporter par une cuisine d'exception.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/reservation" size="lg">
                Réserver une table
              </Button>
              <Button href="/menu" variant="outline" size="lg">
                Voir le Menu
              </Button>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
