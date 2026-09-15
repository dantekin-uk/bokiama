import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    experiences: [
      { name: 'Wildlife Safaris', href: '/experiences/wildlife-safaris' },
      { name: 'Coastal Escapes', href: '/experiences/coastal-escapes' },
      { name: 'Cultural Immersions', href: '/experiences/cultural-immersions' },
      { name: 'Hidden Gems', href: '/experiences/hidden-gems' },
    ],
    destinations: [
      { name: 'Maasai Mara', href: '/destinations/maasai-mara' },
      { name: 'Diani & Watamu', href: '/destinations/diani-watamu' },
      { name: 'Northern Frontier', href: '/destinations/northern-frontier' },
      { name: 'Amboseli & Tsavo', href: '/destinations/amboseli' },
    ],
    company: [
      { name: 'The Bokiama Way', href: '/bokiama-way' },
      { name: 'Journal', href: '/journal' },
      { name: 'Firm', href: '/firm' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-[#0b1222] to-primary text-white pt-10 pb-6 overflow-hidden relative font-sans">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-8 gap-y-10 mb-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-5">
            <div>
              <span
                className="inline-block"
                style={{
                  fontFamily: "'Montserrat', 'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: '22px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                  color: 'white',
                }}
              >
                Bokiama
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-white/60 text-[13px] leading-relaxed max-w-sm">
                Bokiama designs bespoke, privately-crafted journeys across Kenya — from private conservancies in the Mara to untouched beaches of Diani and the wild northern frontier. Travel, reimagined.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </span>
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </span>
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Experiences</h4>
            <ul className="space-y-2.5">
              {footerLinks.experiences.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Destinations</h4>
            <ul className="space-y-2.5">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="text-[13px] text-white/60 leading-snug">
                  <p className="font-bold text-white mb-0.5">Bokiama HQ</p>
                  <p>Village Market, Tower A,</p>
                  <p>Limuru Road, Nairobi</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-[13px] text-white/60">
                  <p className="font-bold text-white mb-0.5">Direct Line</p>
                  <a href="tel:+254711000222" className="hover:text-secondary transition-colors font-medium">+254 711 000 222</a>
                </div>
              </li>
              <li className="flex min-w-0 items-start gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0 text-[13px] text-white/60">
                  <p className="font-bold text-white mb-0.5">Email Address</p>
                  <a href="mailto:hello@bokiama.com" className="break-all hover:text-secondary transition-colors">hello@bokiama.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div />
          <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-center">
            © {currentYear} Bokiama Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
