import { motion } from 'framer-motion'

export default function MenuCard({ name, price, description, tag }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4 }}
      className="group py-5 border-b border-noir/8 last:border-none"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-lg md:text-xl font-semibold text-noir truncate">
              {name}
            </h3>
            {tag && (
              <span className="shrink-0 px-2 py-0.5 text-[10px] font-body font-medium uppercase tracking-widest bg-sauge/15 text-sauge rounded-full">
                {tag}
              </span>
            )}
          </div>
        </div>
        <span className="shrink-0 font-heading text-lg font-medium text-sauge">
          {price}€
        </span>
      </div>
      {description && (
        <p className="mt-1.5 font-body text-sm text-gris leading-relaxed line-clamp-2">
          {description}
        </p>
      )}
    </motion.div>
  )
}
