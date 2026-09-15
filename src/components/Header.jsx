import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

const experienceGroups = [
  {
    key: 'experiences',
    title: 'Experiences',
    description: 'Curated journeys crafted for the discerning traveller.',
    items: [
      {
        label: 'Wildlife Safaris',
        subtext: 'Legendary encounters on the savannah',
        mobileLabel: 'Wildlife Safaris',
        href: '/experiences/wildlife-safaris',
      },
      {
        label: 'Coastal Escapes',
        subtext: 'White sands and Indian Ocean breezes',
        mobileLabel: 'Coastal Escapes',
        href: '/experiences/coastal-escapes',
      },
      {
        label: 'Cultural Immersions',
        subtext: 'Stories, rituals and heritage',
        mobileLabel: 'Cultural Immersions',
        href: '/experiences/cultural-immersions',
      },
      {
        label: 'Hidden Gems',
        subtext: 'Secrets beyond the guidebooks',
        mobileLabel: 'Hidden Gems',
        href: '/experiences/hidden-gems',
      },
    ],
  },
];

const destinationGroups = [
  {
    key: 'destinations',
    title: 'Destinations',
    description: 'Iconic landscapes across Kenya and beyond.',
    items: [
      {
        label: 'Maasai Mara',
        subtext: 'The Great Migration & endless plains',
        mobileLabel: 'Maasai Mara',
        href: '/destinations/maasai-mara',
      },
      {
        label: 'Diani & Watamu',
        subtext: 'Tropical coastline & coral reefs',
        mobileLabel: 'Diani & Watamu',
        href: '/destinations/diani-watamu',
      },
      {
        label: 'Northern Frontier',
        subtext: 'Untamed wilderness of the north',
        mobileLabel: 'Northern Frontier',
        href: '/destinations/northern-frontier',
      },
      {
        label: 'Rift Valley',
        subtext: 'Lakes, volcanoes and dramatic scenery',
        mobileLabel: 'Rift Valley',
        href: '/destinations/rift-valley',
      },
    ],
  },
];

const standaloneNavItems = [
  { label: 'The Bokiama Way', to: '/bokiama-way' },
  { label: 'Journal', to: '/journal' },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExperiencesDropdownOpen, setIsExperiencesDropdownOpen] = useState(false);
  const [isDestinationsDropdownOpen, setIsDestinationsDropdownOpen] = useState(false);
  const [isExperiencesMobileOpen, setIsExperiencesMobileOpen] = useState(false);
  const [isDestinationsMobileOpen, setIsDestinationsMobileOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1024;
  });
  const experiencesTimeoutRef = useRef(null);
  const destinationsTimeoutRef = useRef(null);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    const update = () => {
      const isHome = location.pathname === '/';
      const hero = document.querySelector('[data-hero]');

      if (!isHome || !hero) {
        setPastHero(true);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      const threshold = isDesktop ? 88 : 44;
      setPastHero(heroBottom <= threshold);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname, isDesktop]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsExperiencesDropdownOpen(false);
    setIsDestinationsDropdownOpen(false);
    setIsExperiencesMobileOpen(false);
    setIsDestinationsMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen && !isExperiencesDropdownOpen && !isDestinationsDropdownOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsExperiencesDropdownOpen(false);
        setIsDestinationsDropdownOpen(false);
        setIsExperiencesMobileOpen(false);
        setIsDestinationsMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, isExperiencesDropdownOpen, isDestinationsDropdownOpen]);

  useEffect(() => {
    return () => {
      if (experiencesTimeoutRef.current) clearTimeout(experiencesTimeoutRef.current);
      if (destinationsTimeoutRef.current) clearTimeout(destinationsTimeoutRef.current);
    };
  }, []);

  const openExperiencesDropdown = () => {
    if (experiencesTimeoutRef.current) clearTimeout(experiencesTimeoutRef.current);
    if (destinationsTimeoutRef.current) clearTimeout(destinationsTimeoutRef.current);
    setIsDestinationsDropdownOpen(false);
    setIsExperiencesDropdownOpen(true);
  };

  const closeExperiencesDropdown = () => {
    experiencesTimeoutRef.current = setTimeout(() => {
      setIsExperiencesDropdownOpen(false);
    }, 120);
  };

  const openDestinationsDropdown = () => {
    if (destinationsTimeoutRef.current) clearTimeout(destinationsTimeoutRef.current);
    if (experiencesTimeoutRef.current) clearTimeout(experiencesTimeoutRef.current);
    setIsExperiencesDropdownOpen(false);
    setIsDestinationsDropdownOpen(true);
  };

  const closeDestinationsDropdown = () => {
    destinationsTimeoutRef.current = setTimeout(() => {
      setIsDestinationsDropdownOpen(false);
    }, 120);
  };

  const headerIsFixed = isDesktop || pastHero;

  const navLinkClass = pastHero
    ? 'text-navtext hover:bg-primary/5'
    : 'text-white hover:bg-white/10';

  const renderDropdownGroups = (groups, textToneClass) =>
    groups.map((group) => (
      <div
        key={group.key}
        className="rounded-[22px] border border-primary/8 bg-gradient-to-br from-white to-neutral/60 p-4"
      >
        <div className="mb-4">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">
            {group.title}
          </p>
          <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed text-slate-500">
            {group.description}
          </p>
        </div>

        <div className="space-y-2">
          {group.items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group block rounded-2xl border border-primary/8 bg-white px-4 py-3 transition-all duration-300 hover:border-secondary/25 hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5"
              onClick={() => {
                setIsExperiencesDropdownOpen(false);
                setIsDestinationsDropdownOpen(false);
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`font-sans text-sm font-semibold transition-colors duration-300 group-hover:text-secondary ${textToneClass}`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 font-sans text-[11px] leading-relaxed text-slate-500">
                    {item.subtext}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-primary/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    ));

  const renderNavLink = (label) => (
    <span className="relative inline-block transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
      {label}
    </span>
  );

  const navLinkUnderline = (
    <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-3/4" />
  );

  return (
    <header
      className={`pointer-events-none inset-x-0 top-0 z-50 transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        headerIsFixed ? 'fixed' : 'absolute'
      } ${
        pastHero
          ? 'px-0 pt-0'
          : 'px-3 pt-2 sm:px-4 sm:pt-2.5 lg:px-6'
      }`}
    >
      <nav
        aria-label="Top"
        className={`pointer-events-auto mx-auto overflow-visible border transition-[max-width,border-radius,background-color,border-color,box-shadow,backdrop-filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          pastHero
            ? 'max-w-none rounded-none border-x-0 border-t-0 border-b border-primary/10 bg-white/95 shadow-md shadow-primary/5 backdrop-blur-xl'
            : 'max-w-7xl rounded-2xl border-white/25 bg-white/[0.12] shadow-lg shadow-black/20 backdrop-blur-2xl'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-3 transition-[padding,gap] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            pastHero
              ? 'mx-auto max-w-7xl px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8'
              : 'px-3 py-1.5 sm:gap-4 sm:px-4 sm:py-2 lg:px-5'
          }`}
        >
          <Link
            to="/"
            className="group flex flex-shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <span
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                pastHero ? 'text-primary' : 'text-white'
              }`}
              style={{
                fontFamily: "'Montserrat', 'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: pastHero
                  ? 'clamp(16px, 1.3vw, 19px)'
                  : 'clamp(15px, 1.15vw, 17px)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1,
                textShadow: pastHero
                  ? 'none'
                  : '0 1px 2px rgba(0,0,0,0.35), 0 0 6px rgba(255,255,255,0.25)',
              }}
            >
              Bokiama
            </span>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={openExperiencesDropdown}
              onMouseLeave={closeExperiencesDropdown}
              onFocus={openExperiencesDropdown}
              onBlur={closeExperiencesDropdown}
            >
              <button
                type="button"
                aria-expanded={isExperiencesDropdownOpen}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold font-sans transition-all duration-300 ${navLinkClass}`}
              >
                {renderNavLink('Experiences')}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    isExperiencesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {navLinkUnderline}
              </button>

              <div
                className={`absolute left-1/2 top-full mt-4 w-[40rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 transition-all duration-300 ${
                  isExperiencesDropdownOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible translate-y-2 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/95 p-2 shadow-[0_34px_90px_-32px_rgba(15,23,42,0.5)] ring-1 ring-primary/5 backdrop-blur-2xl">
                  <div className="grid gap-2 lg:grid-cols-1">
                    {renderDropdownGroups(experienceGroups, 'text-primary')}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={openDestinationsDropdown}
              onMouseLeave={closeDestinationsDropdown}
              onFocus={openDestinationsDropdown}
              onBlur={closeDestinationsDropdown}
            >
              <button
                type="button"
                aria-expanded={isDestinationsDropdownOpen}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold font-sans transition-all duration-300 ${navLinkClass}`}
              >
                {renderNavLink('Destinations')}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    isDestinationsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {navLinkUnderline}
              </button>

              <div
                className={`absolute left-1/2 top-full mt-4 w-[40rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 transition-all duration-300 ${
                  isDestinationsDropdownOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible translate-y-2 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/95 p-2 shadow-[0_34px_90px_-32px_rgba(15,23,42,0.5)] ring-1 ring-primary/5 backdrop-blur-2xl">
                  <div className="grid gap-2 lg:grid-cols-1">
                    {renderDropdownGroups(destinationGroups, 'text-primary')}
                  </div>
                </div>
              </div>
            </div>

            {standaloneNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`relative group rounded-full px-4 py-1.5 text-sm font-semibold font-sans transition-all duration-300 ${navLinkClass}`}
              >
                {renderNavLink(item.label)}
                {navLinkUnderline}
              </Link>
            ))}
          </div>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className={`hidden rounded-full font-semibold normal-case tracking-normal shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 sm:inline-block ${
                pastHero
                  ? 'bg-primary px-5 py-3 text-sm text-white shadow-navy/20 hover:bg-primary/90 hover:shadow-navy/30 sm:px-6'
                  : 'bg-primary px-4 py-2 text-sm text-white shadow-white/20 hover:bg-primary/90 hover:shadow-navy/30 sm:px-5'
              }`}
            >
              Inquire
            </Link>

            <button
              type="button"
              className="rounded-xl bg-neutral p-2.5 text-primary transition-colors duration-300 hover:bg-secondary hover:text-white lg:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="pointer-events-auto px-3 pb-1 pt-2 lg:hidden">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_26px_70px_-32px_rgba(15,23,42,0.45)]">
              <div className="max-h-[min(68vh,30rem)] overflow-y-auto p-3 scrollbar-hide">
                <div className="flex flex-col gap-2">
                  <div
                    className="overflow-hidden rounded-2xl border border-primary/10 bg-neutral/40"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold font-sans text-primary transition-all duration-300 hover:bg-primary/5"
                      aria-expanded={isExperiencesMobileOpen}
                      onClick={() => setIsExperiencesMobileOpen((current) => !current)}
                    >
                      <span>Experiences</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isExperiencesMobileOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isExperiencesMobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-3 px-3 pb-3">
                          {experienceGroups.map((group) => (
                            <div
                              key={group.key}
                              className="rounded-2xl border border-primary/10 bg-white px-3 py-3"
                            >
                              <p className="font-display text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary">
                                {group.title}
                              </p>
                              <div className="mt-2.5 space-y-1.5">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    className="block rounded-xl bg-neutral px-3 py-2 text-[13px] font-medium text-primary transition-all duration-300 hover:bg-primary/5 hover:text-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.mobileLabel || item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden rounded-2xl border border-primary/10 bg-neutral/40"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold font-sans text-primary transition-all duration-300 hover:bg-primary/5"
                      aria-expanded={isDestinationsMobileOpen}
                      onClick={() => setIsDestinationsMobileOpen((current) => !current)}
                    >
                      <span>Destinations</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isDestinationsMobileOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isDestinationsMobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-3 px-3 pb-3">
                          {destinationGroups.map((group) => (
                            <div
                              key={group.key}
                              className="rounded-2xl border border-primary/10 bg-white px-3 py-3"
                            >
                              <p className="font-display text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary">
                                {group.title}
                              </p>
                              <div className="mt-2.5 space-y-1.5">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    className="block rounded-xl bg-neutral px-3 py-2 text-[13px] font-medium text-primary transition-all duration-300 hover:bg-primary/5 hover:text-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.mobileLabel || item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {standaloneNavItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold font-sans text-primary transition-all duration-300 hover:bg-primary/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {renderNavLink(item.label)}
                    </Link>
                  ))}

                  <Link
                    to="/contact"
                    className="mt-2 block w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-primary/90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
