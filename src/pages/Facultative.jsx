import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, Layers, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { capabilityBySlug } from '../data/capabilities';

const facultative = capabilityBySlug.facultative;

const facultativeCards = [
  { ...facultative.modules[0], icon: Target, layout: 'col-span-2 row-span-2 lg:col-span-6 lg:row-span-2 lg:min-h-[280px]' },
  { ...facultative.modules[1], icon: Layers, layout: 'col-span-2 lg:col-span-6 lg:min-h-[132px]' },
  { ...facultative.modules[2], icon: ShieldCheck, layout: 'col-span-1 lg:col-span-3 lg:min-h-[132px]' },
  { ...facultative.modules[3], icon: BarChart3, layout: 'col-span-1 lg:col-span-3 lg:min-h-[132px]' },
];

const Facultative = () => {
  return (
    <main>
      <section
        data-hero
        className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-8 shadow-2xl sm:rounded-2xl lg:py-12"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${facultative.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061126]/95 via-[#061126]/72 to-[#061126]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061126]/80 via-transparent to-black/25" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-secondary/30 bg-secondary/10 blur-3xl" />

        <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-[280px] max-w-4xl flex-col pt-12 sm:pt-14">
            <div className="flex-grow" />

            <motion.div
              className="mb-3 max-w-2xl sm:mb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <motion.h1
                className="mb-2.5 max-w-3xl font-display text-lg font-bold normal-case leading-snug tracking-tight sm:mb-3 sm:text-xl lg:text-2xl"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-neutral via-white/90 to-secondary bg-clip-text text-transparent">{facultative.heroTitle}</span>
              </motion.h1>
              <p className="mb-4 max-w-2xl font-sans text-xs leading-relaxed text-white/75 sm:mb-5 sm:text-sm">{facultative.heroSummary}</p>
              <div className="flex flex-row items-center gap-2">
                <a href="#facultative" className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 font-sans text-[10px] font-medium tracking-wide text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white sm:px-4 sm:py-2 sm:text-xs">
                  Explore Facultative Capacity
                  <ArrowRight size={12} strokeWidth={2.25} />
                </a>
                <Link to="/capabilities/treaty" className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-sans text-[10px] font-medium tracking-wide text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/18 sm:px-4 sm:py-2 sm:text-xs">
                  Explore Treaty
                  <ArrowUpRight size={12} strokeWidth={2.25} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="facultative" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-6 max-w-2xl sm:mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl lg:leading-snug">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">Facultative Focus Areas</span>
            </h2>
            <p className="mt-3.5 max-w-xl font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
              Specialized capacity placement for complex individual risks requiring bespoke underwriting expertise and tailored coverage solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6 lg:p-7"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#1E3A8A_0.8px,transparent_0.8px)] [background-size:16px_16px]" />
              <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-3 grid-cols-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
              {facultativeCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className={`group relative overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${index === 0 ? 'border-secondary/30 bg-gradient-to-br from-[#0B1B3A] via-[#123A66] to-[#0F766E]' : 'border-primary/5 bg-gradient-to-br from-white to-neutral/5'} ${card.layout}`}
                  >
                    <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [box-shadow:inset_0_0_0_1.5px_rgba(16,185,129,0.3)]" />
                    <div className="relative flex h-full flex-col justify-between gap-6">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-6 group-hover:from-secondary group-hover:to-primary group-hover:text-white ${index === 0 ? 'bg-white/15 text-white' : 'bg-gradient-to-br from-primary/10 to-secondary/10 text-primary'}`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className={`mt-1.5 font-display text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-base ${index === 0 ? 'text-white group-hover:text-secondary' : 'text-primary group-hover:text-secondary'}`}>{card.title}</h3>
                        <p className={`mt-2 font-sans text-[11px] leading-relaxed transition-colors duration-300 sm:text-xs ${index === 0 ? 'text-white/75 group-hover:text-white/90' : 'text-slate-500 group-hover:text-slate-700'}`}>{card.text}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA title={facultative.cta.title} text={facultative.cta.text} button={facultative.cta.button} />
    </main>
  );
};

export default Facultative;
