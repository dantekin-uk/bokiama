import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import healthImage from '../assets/life2.jpg';
import pill8Image from '../assets/pill8.jpeg';

const Insights = () => {
  return (
    <main>
      <section
        data-hero
        className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-8 shadow-2xl sm:rounded-2xl lg:py-12"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pill8Image})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#061126]/95 via-[#061126]/72 to-[#061126]/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#061126]/80 via-transparent to-black/25" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-secondary/30 bg-secondary/10 blur-3xl" />

        <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-[280px] flex-col justify-end pt-12 sm:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="mb-2.5 max-w-3xl font-display text-lg font-bold leading-snug tracking-tight text-white sm:mb-3 sm:text-xl lg:text-2xl">
                <span className="bg-gradient-to-r from-neutral via-white/90 to-secondary bg-clip-text text-transparent">
                  Insights And Market Perspectives.
                </span>
              </h1>
              <p className="max-w-2xl font-sans text-xs leading-relaxed text-white/75 sm:text-sm">
                Practical perspectives on reinsurance, risk transfer, and the markets shaping resilient businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-2xl sm:rounded-3xl sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#1E3A8A_0.8px,transparent_0.8px)] [background-size:16px_16px]" />
              <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/15 text-primary">
                <BookOpen size={21} />
              </div>
              <span className="mt-5 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                Coming Soon
              </span>
              <h2 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  There Are No Insights Yet
                </span>
              </h2>
              <p className="mt-3 max-w-xl font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                We are preparing thoughtful perspectives and market intelligence for the risks shaping tomorrow. Check back soon for the latest from Scoreline.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-primary px-5 py-2.5 font-display text-xs font-bold tracking-wide text-white shadow-lg shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Speak With Our Team
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Insights;
