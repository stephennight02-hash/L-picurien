import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import Button from '../components/Button'

const actionButtons = [
  {
    label: 'Appeler',
    href: 'tel:+32470303019',
    color: 'bg-sauge text-blanc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'Itinéraire',
    href: 'https://maps.google.com/?q=48.8566,2.3522',
    color: 'bg-noir text-blanc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/lepicurien',
    color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-blanc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

const hours = [
  { day: 'Lundi', time: 'Fermé' },
  { day: 'Mardi – Vendredi', time: '12h00 – 14h30 · 19h00 – 22h30' },
  { day: 'Samedi', time: '19h00 – 23h00' },
  { day: 'Dimanche', time: '12h00 – 15h00' },
]

export default function Contact() {
  return (
    <div className="min-h-screen pt-6 md:pt-24 pb-28 md:pb-16">
      <div className="max-w-2xl mx-auto px-6 md:px-20">
        {/* Header */}
        <SectionReveal>
          <span className="font-body text-xs font-medium tracking-[0.3em] uppercase text-sauge mb-3 block">
            Nous Trouver
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-noir leading-tight">
            Contact
          </h1>
          <p className="font-body text-base text-gris mt-3">
            Rejoignez-nous pour un moment d'exception.
          </p>
        </SectionReveal>

        {/* Quick Actions */}
        <SectionReveal delay={0.15}>
          <div className="grid grid-cols-3 gap-3 mt-10">
            {actionButtons.map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                target={btn.href.startsWith('http') ? '_blank' : undefined}
                rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileTap={{ scale: 0.93 }}
                whileHover={{ scale: 1.03 }}
                className={`flex flex-col items-center justify-center gap-2 p-5 md:p-6 rounded-2xl ${btn.color} shadow-lg transition-shadow hover:shadow-xl`}
              >
                {btn.icon}
                <span className="font-body text-xs font-medium tracking-widest uppercase">
                  {btn.label}
                </span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>

        {/* Restaurant Info */}
        <SectionReveal delay={0.25}>
          <div className="mt-12 bg-blanc rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-noir mb-1">
              L'Épicurien
            </h2>
            <p className="font-body text-sm text-gris mb-6">
              12 Rue de la Gastronomie, 75004 Paris
            </p>

            {/* Google Maps Iframe */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-sable-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8647008104863!2d4.358204615962047!3d50.83362146755498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c48624bdc8bd%3A0xc3ec78e4dccaf8aa!2sAv.%20Louise%2C%20Bruxelles%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1689234056262!5m2!1sfr!2sfr"
                className="w-full h-full border-0 grayscale opacity-80 mix-blend-multiply"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps L'Épicurien"
              ></iframe>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sauge mt-0.5 shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-body text-sm font-medium text-noir">+32 470 30 30 19</p>
                <p className="font-body text-xs text-gris mt-0.5">contact@lepicurien.fr</p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Hours */}
        <SectionReveal delay={0.35}>
          <div className="mt-6 bg-blanc rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-noir mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sauge">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
              Horaires d'ouverture
            </h3>
            <div className="space-y-3">
              {hours.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-noir/5 last:border-none"
                >
                  <span className="font-body text-sm font-medium text-noir">{h.day}</span>
                  <span className={`font-body text-sm ${h.time === 'Fermé' ? 'text-red-400 font-medium' : 'text-gris'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Reservation CTA */}
        <SectionReveal delay={0.45}>
          <div className="mt-10 text-center">
            <p className="font-body text-sm text-gris mb-4">
              Pour les groupes de plus de 8 personnes, merci de réserver par téléphone.
            </p>
            <Button href="tel:+32470303019" size="lg" className="w-full sm:w-auto">
              Réserver par téléphone
            </Button>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
