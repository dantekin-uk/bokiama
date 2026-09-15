import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import healthImage from '../assets/herom.jpg';

const Hero = () => {
  return (
    <section
      data-hero
      className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-12 shadow-2xl sm:rounded-2xl lg:py-16"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${healthImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="animate-hero-orb absolute -right-20 top-1/4 z-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="animate-hero-orb-delayed absolute -bottom-32 left-1/4 z-10 h-48 w-48 rounded-full bg-primary/35 blur-3xl sm:h-64 sm:w-64" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/35" />

      <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full min-h-[400px] flex-col pt-14 sm:pt-16">
          <div className="flex-grow" />

          <motion.div
            className="mb-3 max-w-2xl sm:mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <motion.h1
              className="mb-2.5 font-display text-lg font-bold normal-case leading-snug tracking-tight sm:mb-3 sm:text-xl lg:text-2xl"
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-neutral via-white/90 to-gold bg-clip-text text-transparent">
                Beyond the Safari:<br />
                Discover the Heart of Kenya.
              </span>
            </motion.h1>

            <motion.p
              className="mb-4 max-w-md font-sans text-xs leading-relaxed text-white/75 sm:mb-5 sm:text-sm"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              Experience authentic journeys through Kenya's most iconic landscapes, guided by local experts who know every story.
            </motion.p>

            <motion.div
              className="flex flex-row items-center gap-2.5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
            >
              <motion.button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-orange sm:px-4 sm:py-2 sm:text-xs"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Destinations
                <ArrowRight size={13} strokeWidth={2.25} />
              </motion.button>

              <motion.button
                type="button"
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/18 sm:px-4 sm:py-2 sm:text-xs"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                The Bokiama Way
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
