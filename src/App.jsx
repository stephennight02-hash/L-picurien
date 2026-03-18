import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import FloatingCTA from './components/FloatingCTA'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="page-transition"
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-sable text-noir">
      <ScrollToTop />
      <Header />

      {/* Main Content — padded for fixed navbars */}
      <main className="md:pt-[73px]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path="/menu"
              element={
                <AnimatedPage>
                  <Menu />
                </AnimatedPage>
              }
            />
            <Route
              path="/reservation"
              element={
                <AnimatedPage>
                  <Reservation />
                </AnimatedPage>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <FloatingCTA />

      {/* Footer */}
      <footer className="pb-24 md:pb-8 pt-8 border-t border-noir/5">
        <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-lg font-semibold text-noir">
            L'Épicurien
          </p>
          <p className="font-body text-xs text-gris">
            © {new Date().getFullYear()} L'Épicurien — Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  )
}
