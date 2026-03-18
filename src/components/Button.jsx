import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-sauge text-blanc hover:bg-sauge-dark',
  outline: 'border-2 border-sauge text-sauge hover:bg-sauge hover:text-blanc',
  ghost: 'text-noir/70 hover:text-noir hover:bg-noir/5',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const MotionLink = motion(Link)

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon: Icon,
  className = '',
  ...props
}) {
  const classes = `
    inline-flex items-center justify-center gap-2
    font-body font-medium tracking-wider uppercase
    rounded-full transition-all duration-300
    ${variants[variant]} ${sizes[size]} ${className}
  `.trim()

  const MotionTag = href ? MotionLink : motion.button

  return (
    <MotionTag
      {...(href ? { to: href } : {})}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className={classes}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </MotionTag>
  )
}
