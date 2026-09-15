import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Target, ShieldCheck, Globe, Cpu, Handshake, BarChart3 } from 'lucide-react';
import healthImage from '../assets/life2.jpg';
import fimImage from '../assets/fim.jpeg';
import fim1Image from '../assets/fim1.jpg';
import pill5Image from '../assets/pill5.jpeg';
import image3Image from '../assets/image3.jpg';
import image7Image from '../assets/image7.jpeg';

const Firm = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        data-hero
        className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-8 shadow-2xl sm:rounded-2xl lg:py-12"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image7Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/35" />

        <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-[280px] flex-col pt-12 sm:pt-14">
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
                <span className="bg-gradient-to-r from-neutral via-white/90 to-secondary bg-clip-text text-transparent">
                  Building Trust Through<br />
                  Expertise & Integrity.
                </span>
              </motion.h1>

              <motion.p
                className="mb-4 max-w-md font-sans text-xs leading-relaxed text-white/75 sm:mb-5 sm:text-sm"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                Scoreline Reinsurance is a specialized advisory and risk transfer firm, dedicated to safeguarding the long-term stability of insurance markets across Africa and beyond.
              </motion.p>

              <motion.div
                className="flex flex-row items-center gap-2.5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.6 }}
              >
                <motion.button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white sm:px-4 sm:py-2 sm:text-xs"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                  <ArrowRight size={13} strokeWidth={2.25} />
                </motion.button>

                <motion.button
                  type="button"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/18 sm:px-4 sm:py-2 sm:text-xs"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet the Team
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'radial-gradient(#1E3A8A 0.8px, transparent 0.8px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
              <motion.div
                className="lg:col-span-7 xl:col-span-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                  <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
                  Our Story
                </span>

                <h2
                  className="mt-4 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl lg:leading-snug"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    Building Confidence Through<br />
                    Specialist Reinsurance Solutions.
                  </span>
                </h2>

                <div className="mt-3.5 max-w-2xl space-y-3 font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  <p>
                    Scoreline Re-insurance Brokers Limited is a specialist reinsurance brokerage and risk advisory firm incorporated in June 2026 to provide innovative, reliable and technically sound reinsurance solutions to insurance companies, corporations, government institutions and other organizations requiring sophisticated risk transfer mechanisms.
                  </p>
                  <p>
                    Guided by professionalism, integrity and technical excellence, the Company is committed to building long-term partnerships with insurers, reinsurers, regulators and other stakeholders, delivering solutions that create value and contribute to the development of resilient insurance markets across Africa.
                  </p>
                </div>

                <div className="mt-5 inline-flex max-w-xl items-start gap-3 rounded-2xl border border-secondary/15 bg-gradient-to-r from-secondary/10 to-primary/5 px-4 py-3">
                  <div>
                    <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary sm:text-[11px]">
                      Regulatory Status
                    </p>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                      Pursuing Reinsurance Broker Licence from the Insurance Regulatory Authority (IRA).
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative lg:col-span-5 xl:col-span-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group ml-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg shadow-primary/10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-primary/15" />
                      <div className="absolute inset-0 border-2 border-white/35 rounded-2xl" />
                    </div>
                    <img
                      src={fimImage}
                      alt="Scoreline Reinsurance"
                      className="aspect-[4/4.4] w-full object-cover transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="global-reach" className="scroll-mt-24 py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image3Image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#050c18]/95 via-[#123A66]/90 to-[#0F766E]/75" />
            <div className="relative z-10 p-5 sm:p-7 lg:p-8">
              <div className="mb-5 max-w-2xl sm:mb-6">
                <h2
                  className="font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white/95 to-secondary bg-clip-text text-transparent">
                    Global Capacity And Regional Expertise
                  </span>
                </h2>
                <p className="mt-2.5 max-w-2xl font-sans text-xs leading-relaxed text-white/70 sm:text-[13px]">
                  Strategically positioned to deliver tailored reinsurance solutions through strong regional partnerships and direct access to international capital.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="group rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.15] sm:p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary transition-transform duration-300 group-hover:scale-105 sm:mb-4 sm:h-9 sm:w-9">
                    <Globe size={17} />
                  </div>
                  <h3 className="font-display text-[11px] font-semibold leading-snug tracking-tight text-white sm:text-base">Pan-African Reach</h3>
                  <p className="mt-2 font-sans text-[10px] leading-relaxed text-white/65 sm:text-xs">
                    Supporting insurers across the continent with innovative reinsurance structures, specialist risk management solutions, and responsive claims advocacy that drive regional economic integration.
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.15] sm:p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary transition-transform duration-300 group-hover:scale-105 sm:mb-4 sm:h-9 sm:w-9">
                    <Handshake size={17} />
                  </div>
                  <h3 className="font-display text-[11px] font-semibold leading-snug tracking-tight text-white sm:text-base">International Market Access</h3>
                  <p className="mt-2 font-sans text-[10px] leading-relaxed text-white/65 sm:text-xs">
                    Through strategic alliances with leading international reinsurers and specialist risk advisors, we connect complex regional exposures with highly secure global underwriting capacity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 items-end sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
            {/* Left Card: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-primary shadow-xl aspect-[4/3] transition-all duration-500 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '14px 14px' }} />
              <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
                <div className="mb-4">
                  <div style={{ backgroundImage: 'linear-gradient(to bottom right, #10B981, #ffffff)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    <Compass className="h-8 w-8" />
                  </div>
                </div>
                <h3
                  className="mb-3 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60 sm:text-[11px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  Vision
                </h3>
                <p className="max-w-[18rem] font-display text-base font-bold leading-[1.45] tracking-tight sm:text-lg lg:text-xl lg:leading-[1.4]" style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif", backgroundImage: 'linear-gradient(to right, #ffffff, #a1a1aa, #71717a)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  To become Africa's most trusted and innovative reinsurance brokerage and risk advisory firm.
                </p>
              </div>
            </motion.div>

            {/* Middle Card: Core Values (with image) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] transition-all duration-500 hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${fim1Image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-accent/20" />
              <div className="absolute inset-4 rounded-xl border border-white/10" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
                <h3
                  className="mb-1 font-display text-lg font-bold text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  Core Values
                </h3>
                <p className="font-sans text-xs leading-relaxed text-white/85">
                  Integrity, Professionalism, Innovation, Excellence, Accountability, Client Focus, Collaboration.
                </p>
              </div>
            </motion.div>

            {/* Right Card: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral shadow-xl aspect-[4/3] transition-all duration-500 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1E3A8A 0.5px, transparent 0.5px)', backgroundSize: '14px 14px' }} />
              <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
                <div className="mb-4">
                  <div style={{ backgroundImage: 'linear-gradient(to bottom right, #1E3A8A, #10B981)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    <Target className="h-8 w-8" />
                  </div>
                </div>
                <h3
                  className="mb-3 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-[11px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  Mission
                </h3>
                <p className="max-w-[18rem] font-display text-base font-bold leading-[1.45] tracking-tight sm:text-lg lg:text-xl lg:leading-[1.4]" style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif", backgroundImage: 'linear-gradient(to right, #0f172a, #1e3a8a)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  To deliver world-class reinsurance solutions that strengthen insurer resilience through technical excellence, innovation and strategic partnerships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Scoreline Re-insurance Brokers Limited? */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header & Subtext Outside Big Card */}
          <motion.div
            className="mb-6 sm:mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
              <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
              Why Scoreline?
            </span>
            <h2
              className="mt-4 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl lg:leading-snug"
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              A Strategic Advantage in a<br />Complex Market.
              </span>
            </h2>
            <p className="mt-3.5 max-w-md font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
              In today's evolving insurance landscape, choosing the right reinsurance broker directly impacts your financial strength, underwriting capacity and long-term success.
            </p>
          </motion.div>

          {/* Big Card Enclosing 6 Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10"
          >
            {/* Background pattern + accent blurs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.03]"
                   style={{
                     backgroundImage: 'radial-gradient(#1E3A8A 0.8px, transparent 0.8px)',
                     backgroundSize: '16px 16px'
                   }} />
              <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 sm:gap-5">
              {[
                { title: 'Deep Technical Expertise', desc: 'Treaty/facultative reinsurance, risk analysis, programme structuring & claims management.', icon: Target },
                { title: 'Access to Global Markets', desc: 'Strong relationships with regional & international reinsurers for broad market access.', icon: Globe },
                { title: 'Innovative Programme Design', desc: 'Bespoke reinsurance programmes balancing risk protection, capital efficiency & business growth.', icon: Cpu },
                { title: 'Independent & Objective Advice', desc: 'Impartial advice guided solely by clients’ best interests & rigorous market analysis.', icon: ShieldCheck },
                { title: 'Responsive Claims Support', desc: 'Dedicated claims advisory supporting timely & equitable recoveries.', icon: Handshake },
                { title: 'Data-Driven Decision Making', desc: 'Data analytics, market intelligence & risk assessment tools anticipating emerging risks.', icon: BarChart3 },
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-primary/5 bg-gradient-to-br from-white to-neutral/5 p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                       style={{ boxShadow: 'inset 0 0 0 1.5px rgba(16, 185, 129, 0.3)' }} />
                  <div className="relative">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:from-secondary group-hover:to-primary group-hover:text-white">
                      <pillar.icon size={18} />
                    </div>
                    <h3
                      className="mb-2 font-display text-sm font-semibold tracking-tight text-primary sm:text-base transition-colors duration-300 group-hover:text-secondary"
                      style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[11px] leading-relaxed text-slate-500 sm:text-xs transition-colors duration-300 group-hover:text-slate-700">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#050c18] via-[#1E3A8A] to-[#050c18] p-5 shadow-2xl sm:p-6 lg:p-8"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'radial-gradient(circle at 25% 35%, rgba(16, 185, 129, 0.17) 0%, transparent 46%), radial-gradient(circle at 78% 78%, rgba(30, 58, 138, 0.42) 0%, transparent 52%)',
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-5 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="relative overflow-hidden rounded-2xl lg:col-span-2"
              >
                <img
                  src={image7Image}
                  alt="Scoreline Reinsurance team collaboration"
                  className="aspect-[4/3] w-full object-cover brightness-95 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c18]/70 via-transparent to-secondary/10" />
              </motion.div>

              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                  <span className="h-px w-5 bg-secondary" />
                  Our Governance
                </span>
                <h2
                  className="mt-4 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white/95 to-secondary bg-clip-text text-transparent">
                    Anchored in Rigorous Corporate Governance.
                  </span>
                </h2>

                <div className="mt-6">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-[11px]">
                    Our Philosophy
                  </p>
                  <p className="mt-3 max-w-xl font-sans text-xs leading-relaxed text-white/75 sm:text-[13px]">
                    At Scoreline Re-insurance Brokers Limited, corporate governance is the foundation upon which our business is built. We recognize that sound governance is essential for maintaining stakeholder confidence, ensuring regulatory compliance, managing risk effectively and delivering sustainable value to our clients, shareholders and business partners.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-4">
                  {[
                    {
                      title: 'Corporate Governance & Compliance',
                      desc: 'Committed to full compliance with all applicable legal, regulatory and industry requirements, while conducting business with the highest standards of honesty, fairness, and professionalism.',
                      icon: ShieldCheck,
                    },
                    {
                      title: 'Enterprise Risk Management',
                      desc: 'Maintaining active oversight of strategic, operational, financial, and emerging risks to ensure they are proactively identified, assessed, and effectively managed.',
                      icon: BarChart3,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
                      className="group rounded-xl border border-white/10 bg-white/[0.07] p-3 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.11] sm:p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-white shadow-lg shadow-secondary/20">
                        <item.icon size={16} />
                      </div>
                      <h3
                        className="mt-3 font-display text-[11px] font-semibold leading-snug tracking-tight text-white sm:text-sm"
                        style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 font-sans text-[9px] leading-relaxed text-white/65 sm:text-[11px]">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Firm;
