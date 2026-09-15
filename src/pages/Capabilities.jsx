import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CTA from '../components/CTA';
import { capabilityBySlug, capabilityItems } from '../data/capabilities';

const Capabilities = () => {
  const { slug } = useParams();
  const capability = capabilityBySlug[slug];

  if (!capability) {
    return <Navigate to="/" replace />;
  }

  const relatedItems = capabilityItems.filter((item) => item.slug !== capability.slug);

  return (
    <main>
      <section
        data-hero
        className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-8 shadow-2xl sm:rounded-2xl lg:py-12"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${capability.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061126]/95 via-[#061126]/72 to-[#061126]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061126]/80 via-transparent to-black/25" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-secondary/30 bg-secondary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-[280px] max-w-4xl flex-col justify-end pt-12 sm:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {capability.eyebrow && (
                <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                  <span className="h-px w-6 bg-secondary" />
                  {capability.eyebrow}
                </span>
              )}
              <h1 className="mb-2.5 max-w-3xl font-display text-lg font-bold normal-case leading-snug tracking-tight text-white sm:mb-3 sm:text-xl lg:text-2xl">
                <span className="bg-gradient-to-r from-neutral via-white/90 to-secondary bg-clip-text text-transparent">
                  {capability.heroTitle}
                </span>
              </h1>
              <p className="mb-4 max-w-2xl font-sans text-xs leading-relaxed text-white/75 sm:mb-5 sm:text-sm">
                {capability.heroSummary}
              </p>
              <div className="flex flex-row items-center gap-2.5">
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white sm:px-4 sm:py-2 sm:text-xs"
                >
                  Explore Solutions
                  <ArrowRight size={13} strokeWidth={2.25} />
                </a>
                <Link
                  to="/advisory"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-wide text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/18 sm:px-4 sm:py-2 sm:text-xs"
                >
                  Speak With Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary/8 bg-white p-6 shadow-xl sm:p-8 lg:col-span-8 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative">
              <p className="max-w-3xl font-display text-lg font-bold leading-snug tracking-tight text-primary sm:text-xl lg:text-2xl">
                A clear, disciplined response to the risks that shape your balance sheet.
              </p>
              <p className="mt-5 max-w-2xl font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                {capability.heroSummary}
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111f] via-primary to-[#07111f] p-6 text-white shadow-xl lg:col-span-4"
          >
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.8)_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
            <div className="relative flex h-full flex-col">
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">Explore More</span>
              <h2 className="mt-4 font-display text-xl font-bold leading-snug">More ways we protect value.</h2>
              <div className="mt-6 space-y-2">
                {relatedItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/capabilities/${item.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/18"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight size={16} className="text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
              <Link to="/" className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white/80 hover:text-secondary">
                Return home
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 py-2 sm:py-4 lg:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8 max-w-2xl sm:mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
              <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
              Solutions
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
              Designed around the risk, not a template.
            </h2>
          </motion.div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#1E3A8A_0.8px,transparent_0.8px)] [background-size:16px_16px]" />
              <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            </div>
            <div className="relative z-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
            {capability.modules.map((module, index) => (
              <motion.article
                key={module.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${
                  index === 0
                    ? 'border-secondary/30 bg-gradient-to-br from-[#0B1B3A] via-[#123A66] to-[#0F766E] lg:col-span-7 lg:row-span-2'
                    : 'border-primary/5 bg-gradient-to-br from-white to-neutral/5 lg:col-span-5'
                }`}
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[4rem] bg-secondary/8 transition-colors group-hover:bg-secondary/14" />
                <div className="relative flex h-full flex-col justify-end">
                  <h3 className={`font-display text-sm font-semibold tracking-tight sm:text-base ${index === 0 ? 'text-white group-hover:text-secondary' : 'text-primary group-hover:text-secondary'}`}>{module.title}</h3>
                  <p className={`mt-2 font-sans text-[11px] leading-relaxed sm:text-xs ${index === 0 ? 'text-white/75' : 'text-slate-500'}`}>{module.text}</p>
                </div>
              </motion.article>
            ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title={capability.cta.title} text={capability.cta.text} button={capability.cta.button} href={`/capabilities/${capability.slug}`} />
    </main>
  );
};

export default Capabilities;
