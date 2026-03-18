import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.2,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  const initial = { opacity: 0, ...directionMap[direction] }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`page-transition ${className}`}
    >
      {children}
    </motion.div>
  )
}
