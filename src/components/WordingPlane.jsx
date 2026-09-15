import React from 'react'
import { motion } from 'framer-motion'

const WordingPlane = () => {
  const lines = [
    "Every Bokiama journey begins with a single promise:",
    "travel beyond the ordinary, privately yours...",
    "We believe the best itineraries are born of",
    "trust, insider access, and quietly obsessive care ",
    "moments you cannot plan, only earn."
  ]

  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-10 sm:pb-8 sm:pt-12 lg:pb-8 lg:pt-14">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-lg text-right sm:max-w-xl lg:max-w-2xl">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className={`font-display text-xs font-bold leading-[1.45] tracking-tight sm:text-sm lg:text-xl lg:leading-[1.4] ${
                index >= 3 ? 'text-slate-400' : 'text-primary'
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ 
                duration: 0.55, 
                delay: index * 0.12, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WordingPlane
