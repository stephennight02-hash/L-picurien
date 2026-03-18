import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Accueil', icon: HomeIcon },
  { to: '/menu', label: 'Menu', icon: MenuIcon },
  { to: '/reservation', label: 'Réserver', icon: ReserveIcon },
  { to: '/contact', label: 'Contact', icon: ContactIcon },
]

function HomeIcon({ active }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function MenuIcon({ active }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function ReserveIcon({ active }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
  )
}

function ContactIcon({ active }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

export default function Header() {
  const location = useLocation()

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 py-4 bg-sable/90 backdrop-blur-md border-b border-sauge/10"
      >
        <NavLink to="/" className="font-heading text-2xl font-semibold text-noir tracking-wide">
          L'Épicurien
        </NavLink>
        <nav className="flex items-center gap-8">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative font-body text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-sauge' : 'text-noir/60 hover:text-noir'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sauge rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </motion.header>

      {/* ── Mobile Bottom Tab Bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-sable/95 backdrop-blur-lg border-t border-sauge/10 safe-bottom">
        <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {navItems.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to
            return (
              <NavLink
                key={to}
                to={to}
                className="flex flex-col items-center gap-0.5 min-w-[56px] py-1"
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-sauge' : 'text-noir/40'
                  }`}
                >
                  <Icon active={isActive} />
                </motion.div>
                <span className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-sauge' : 'text-noir/40'
                }`}>
                  {label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-indicator"
                    className="absolute top-0 w-10 h-0.5 bg-sauge rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>
    </>
  )
}
