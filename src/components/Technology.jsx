import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Globe, Database } from 'lucide-react';

const techPillars = [
  {
    title: 'Data Analytics & AI',
    description: 'Harnessing data and AI to generate actionable insights, optimize underwriting, and strengthen risk analysis.',
    icon: Database,
  },
  {
    title: 'Interactive Risk Dashboards',
    description: 'Real-time visibility into portfolio performance and exposure levels to drive proactive decision-making.',
    icon: BarChart3,
  },
  {
    title: 'Digital Placement',
    description: 'Streamlining reinsurance placements to accelerate negotiations and expand global market access.',
    icon: Globe,
  },
  {
    title: 'Secure Portals & Cybersecurity',
    description: 'Convenient digital access to critical business records, heavily safeguarded against emerging cyber threats.',
    icon: ShieldCheck,
  },
];

const Technology = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-2xl sm:rounded-3xl"
        >
          {/* Background pattern + accent blurs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-[0.03]"
                 style={{
                   backgroundImage: 'radial-gradient(#1E3A8A 0.8px, transparent 0.8px)',
                   backgroundSize: '16px 16px'
                 }} />
            <div className="animate-float-slow absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
            <div className="animate-float-reverse absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Headline & Subtext */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
                Digital Innovation
              </span>

              <h2
                className="mt-4 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl lg:leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Transforming Risk Management Through Digital Innovation.
                </span>
              </h2>

              <p className="mt-3.5 max-w-md font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                We continuously invest in digital transformation to enhance operational efficiency, strengthen risk management capabilities, and deliver secure, intelligent reinsurance solutions.
              </p>
            </div>

            {/* Right: Grid Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5">
                {techPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-xl border border-primary/5 bg-gradient-to-br from-white to-neutral/5 p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                           style={{
                             boxShadow: 'inset 0 0 0 1.5px rgba(16, 185, 129, 0.3)',
                           }} />
                      <div className="relative">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:from-secondary group-hover:to-primary group-hover:text-white">
                          <Icon size={18} />
                        </div>
                        <h3
                          className="mb-2 font-display text-sm font-semibold tracking-tight text-primary sm:text-base transition-colors duration-300 group-hover:text-secondary"
                          style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                        >
                          {pillar.title}
                        </h3>
                        <p className="font-sans text-[11px] leading-relaxed text-slate-500 sm:text-xs transition-colors duration-300 group-hover:text-slate-700">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
