import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import pill1Image from '../assets/pill1.jpeg'
import pill2Image from '../assets/pill2.jpeg'
import pill3Image from '../assets/pill3.avif'
import pill8Image from '../assets/pill8.jpeg'

const pillars = [
  {
    title: 'The Expert Intermediary',
    text: 'Curating exclusive accommodations and managing all logistics so you can travel completely stress-free.',
    image: pill1Image,
  },
  {
    title: 'Unrivaled Access',
    text: 'Unlocking hidden gems, private entries, and authentic experiences unavailable on mainstream travel platforms.',
    image: pill8Image,
  },
  {
    title: 'White-Glove Support',
    text: 'Proactive, 24/7 care ensuring your absolute safety, comfort, and peace of mind at every step.',
    image: pill3Image,
  },
]

const slowEase = [0.22, 1, 0.36, 1]

const Pillers = () => {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = left→right, -1 = right→left
  const total = pillars.length

  const tall = pillars[active]
  const short = pillars[(active + 1) % total]

  const goNext = () => {
    setDirection(1)
    setActive((i) => (i + 1) % total)
  }

  const goPrev = () => {
    setDirection(-1)
    setActive((i) => (i - 1 + total) % total)
  }

  const goTo = (index) => {
    setDirection(index > active || (active === total - 1 && index === 0) ? 1 : -1)
    setActive(index)
  }

  // Left → right when advancing: enter from left, exit to right
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -72 : 72,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 72 : -72,
      scale: 0.98,
    }),
  }

  const transition = {
    duration: 0.95,
    ease: slowEase,
  }

  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-4 sm:pb-12 sm:pt-6 lg:pb-14 lg:pt-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <motion.div
            className="lg:col-span-5 xl:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
                THE BOKIAMA WAY
              </span>

              <h2
                className="mt-3 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl lg:leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  We don&rsquo;t just book trips. We architect life changing narratives.
                </span>
              </h2>

              <p className="mt-3 max-w-md font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                Moving beyond cookie cutter itineraries to build custom journeys around your passions.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 font-display text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-secondary hover:to-primary hover:shadow-secondary/30"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              >
                Plan Your Journey
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7 xl:col-span-8">
            <div className="flex flex-col items-end">
              <div className="relative flex w-full max-w-[400px] items-start justify-end gap-3 overflow-hidden sm:max-w-[440px] sm:gap-4 lg:ml-auto xl:max-w-[480px]">
                <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                  <motion.article
                    key={`tall-${tall.title}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                    className="group relative w-[50%] overflow-hidden rounded-2xl"
                    style={{ aspectRatio: '3 / 4.2' }}
                  >
                    <img
                      src={tall.image}
                      alt={tall.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <h3
                        className="font-display text-sm font-semibold tracking-tight text-white sm:text-base"
                        style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                      >
                        {tall.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-white/90 sm:text-xs">
                        {tall.text}
                      </p>
                    </div>
                  </motion.article>
                </AnimatePresence>

                <div className="flex w-[46%] flex-col overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.article
                      key={`short-${short.title}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ ...transition, delay: 0.06 }}
                      className="group relative w-full overflow-hidden rounded-2xl"
                      style={{ aspectRatio: '3 / 3.5' }}
                    >
                      <img
                        src={short.image}
                        alt={short.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                        <h3
                          className="font-display text-xs font-semibold tracking-tight text-white sm:text-sm"
                          style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                        >
                          {short.title}
                        </h3>
                        <p className="mt-1 text-[10px] leading-relaxed text-white/90 sm:text-[11px]">
                          {short.text}
                        </p>
                      </div>
                    </motion.article>
                  </AnimatePresence>

                  <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous pillar"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white sm:h-10 sm:w-10"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next pillar"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white sm:h-10 sm:w-10"
                    >
                      <ChevronRight size={16} />
                    </button>

                    <div className="ml-1 flex items-center gap-1.5 sm:ml-2 sm:gap-2">
                      {pillars.map((pillar, i) => (
                        <button
                          key={pillar.title}
                          type="button"
                          onClick={() => goTo(i)}
                          aria-label={`Go to ${pillar.title}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === active
                              ? 'w-6 bg-gradient-to-r from-primary to-secondary sm:w-7'
                              : 'w-1.5 bg-primary/20 hover:bg-primary/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pillers
