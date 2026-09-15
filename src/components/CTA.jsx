import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = ({
  title = 'Build a Resilient Future.',
  text = 'We invite you to partner with us as we deliver confidence through intelligent risk transfer, creating stronger businesses and stronger insurance markets for all.',
  button = 'Initiate a Conversation',
  href = '/contact',
}) => {
  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#050c18] via-[#0f172a] to-[#050c18] p-6 shadow-2xl sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-float-slow absolute -left-40 top-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
            <div className="animate-float-reverse absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(15, 23, 42, 0.3) 0%, transparent 50%)',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:gap-8">
            <h2 className="font-display text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              <span className="bg-gradient-to-r from-white via-white/95 to-gold bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="max-w-2xl font-sans text-xs leading-relaxed text-white/70 sm:text-sm">{text}</p>
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-display text-sm font-bold tracking-wide text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange/40 animate-soft-pulse"
            >
              {button}
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
