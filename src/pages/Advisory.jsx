import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import healthImage from '../assets/life2.jpg';
import heroImage from '../assets/hero1.jpg';
import heroMobileImage from '../assets/hero1mobile.jpg';
import adv1Image from '../assets/adv1.jpg';
import adv2Image from '../assets/adv2.jpeg';
import adv3Image from '../assets/adv3.jpeg';
import image13Image from '../assets/image13.jpeg';
import image12Image from '../assets/image12.jpeg';
import CTA from '../components/CTA';

const Advisory = () => {
  return (
    <main>
      <section
        data-hero
        className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-8 shadow-2xl sm:rounded-2xl lg:py-12"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image13Image})`,
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
                  Transforming Complex Risk<br />
                  Into Strategic Advantage.
                </span>
              </motion.h1>

              <motion.p
                className="mb-4 max-w-md font-sans text-xs leading-relaxed text-white/75 sm:mb-5 sm:text-sm"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                By combining analytical insights with industry expertise, we help clients anticipate emerging risks, optimize their reinsurance strategies and enhance operational resilience.
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
                  Our Approach
                  <ArrowRight size={13} strokeWidth={2.25} />
                </motion.button>

                <motion.button
                  type="button"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/18 sm:px-4 sm:py-2 sm:text-xs"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Capabilities
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-5 max-w-2xl sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
              <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
              Advisory capabilities
            </span>
            <h2
              className="mt-3 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl"
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Clarity at every stage of the risk journey.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="group relative overflow-hidden rounded-2xl bg-primary p-4 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.6px, transparent 0.6px)', backgroundSize: '15px 15px' }} />
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-secondary/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <h3 className="font-display text-sm font-bold tracking-tight text-white sm:text-base" style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
                  Risk Intelligence
                </h3>
                <p className="mt-1.5 text-[10px] leading-relaxed text-white/60 sm:text-[11px]">
                  See the full picture before making the next move.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {['Risk Modelling & Analytics', 'Portfolio & Exposure Modelling', 'Accumulation Analysis', 'Pricing & Actuarial Analysis', 'Capital Optimization Strategy'].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.07] px-2 py-1.5 font-sans text-[10px] leading-snug text-white/80 transition-colors group-hover:bg-white/10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="group relative min-h-[280px] overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[300px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${adv1Image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/65 to-accent/10" />
              <div className="absolute inset-4 rounded-xl border border-white/15" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
                <h3 className="font-display text-sm font-bold tracking-tight text-white sm:text-base" style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
                  Programme Architecture
                </h3>
                <p className="mt-1.5 text-[10px] leading-relaxed text-white/70 sm:text-[11px]">
                  Design the right structure for resilience, capacity and growth.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {['Reinsurance Programme Design', 'Captive Structuring & Management', 'Government & Sovereign Risk Pools', 'Complex Corporate Risk Solutions', 'Development Finance Alignments'].map((item) => (
                    <div key={item} className="rounded-xl border border-secondary/25 bg-secondary/10 px-2 py-1.5 font-sans text-[10px] leading-snug text-white/85 backdrop-blur-sm transition-colors group-hover:bg-secondary/20">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral p-4 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#1E3A8A 0.6px, transparent 0.6px)', backgroundSize: '15px 15px' }} />
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-secondary/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="font-display text-sm font-bold tracking-tight text-primary sm:text-base" style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
                  Claims Advisory
                </h3>
                <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
                  Turn claims complexity into decisive, equitable recovery.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {['Claims Consultancy', 'Strategic Claims Recovery', 'Settlement Negotiation', 'Dispute Resolution', 'Claims Data Analytics'].map((item) => (
                    <div key={item} className="rounded-lg border border-primary/10 bg-white/65 px-2 py-1.5 font-sans text-[10px] leading-snug text-slate-600 transition-colors group-hover:bg-white">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 overflow-hidden rounded-xl border border-primary/10 bg-primary/5 p-1.5">
                  <img
                    src={adv2Image}
                    alt="Advisory risk consultation"
                    className="aspect-[16/6] w-full rounded-lg object-cover object-center brightness-95 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-2xl sm:p-7 lg:p-9"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 0.8px, transparent 0.8px)', backgroundSize: '16px 16px' }} />
              <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mb-6 max-w-3xl sm:mb-7"
              >
                <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                  <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
                  Intelligence in motion
                </span>
                <h2
                  className="mt-3 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    Driving Decisions With Advanced Market Intelligence
                  </span>
                </h2>
                <p className="mt-3 max-w-2xl font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  In a volatile risk landscape, historical data alone is no longer sufficient. We harness advanced analytics, real-time market intelligence, and proprietary risk assessment tools to move our clients from reactive buying to proactive capital optimization.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2">
                {[
                  {
                    title: 'Anticipating Emerging Risks',
                    text: 'Identifying macro-economic, climate, and geopolitical shifts before they impact the portfolio.',
                    image: image13Image,
                    accent: 'from-primary/90 via-primary/45 to-transparent',
                    className: 'col-span-2 row-span-2 lg:col-span-8 lg:row-span-2 min-h-[240px] sm:min-h-[280px]',
                  },
                  {
                    title: 'Optimizing Retention',
                    text: 'Using actuarial insights to find the exact mathematical balance between risk retention and transfer.',
                    image: adv3Image,
                    accent: 'from-accent/90 via-primary/45 to-transparent',
                    className: 'col-span-1 lg:col-span-4 min-h-[150px] sm:min-h-[170px]',
                  },
                  {
                    title: 'Capacity Mapping',
                    text: 'Leveraging our global network to identify which markets have the appetite for specific, complex exposures.',
                    image: image12Image,
                    accent: 'from-primary/90 via-secondary/35 to-transparent',
                    className: 'col-span-1 lg:col-span-4 min-h-[150px] sm:min-h-[170px]',
                  },
                ].map((outcome, index) => (
                  <motion.article
                    key={outcome.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    className={`group relative isolate flex overflow-hidden rounded-xl sm:rounded-2xl ${outcome.className}`}
                  >
                    <img
                      src={outcome.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${outcome.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
                    <div className="relative z-10 mt-auto flex w-full flex-col justify-end p-4 sm:p-5">
                      <h3
                        className="font-display text-sm font-bold leading-snug tracking-tight text-white sm:text-base"
                        style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
                      >
                        {outcome.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl font-sans text-[10px] leading-relaxed text-white/80 sm:text-[11px]">
                        {outcome.text}
                      </p>
                      <div className="mt-3 h-px w-8 bg-gradient-to-r from-secondary to-transparent transition-all duration-500 group-hover:w-12" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Advisory;
