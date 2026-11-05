import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'Risk Engineering', path: '/risk-engineering' },
  { name: 'Risk Tool', path: '/risk-assessment' },
  { name: 'Sectors', path: '/sectors' },
  {
    name: 'Community',
    path: '/blogs',
    children: [
      { name: 'Events', path: '/events', note: 'Workshops & partnerships' },
      { name: 'Blogs', path: '/blogs', note: 'News and updates' },
      { name: 'Articles', path: '/articles', note: 'Technical write-ups' },
      { name: 'Media', path: '/media', note: 'Videos and galleries' },
    ],
  },
];

const Wordmark = ({ compact = false, dark = false }) => (
  <span className="flex items-center gap-3">
    <img
      src="/logo.png"
      alt=""
      className={`${compact ? 'h-10 w-10' : 'h-11 w-11'} object-contain`}
    />
    <span className="flex flex-col leading-none">
      <span className={`font-display text-xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-ink-950'}`}>
        KENSTANE
      </span>
      <span className={`mt-1 text-[10px] font-semibold tracking-[0.22em] ${dark ? 'text-white/60' : 'text-ink-500'}`}>
        ENERGY LIMITED
      </span>
    </span>
  </span>
);

const MobileNavItem = ({ item, isActive, closeMenu }) => {
  const hasActiveChild = item.children?.some((c) => isActive(c.path));
  const [isOpen, setIsOpen] = useState(hasActiveChild);

  if (item.children) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className={`w-full flex items-center justify-between rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
            hasActiveChild ? 'text-kenya-green' : 'text-ink-900 hover:bg-ink-50'
          }`}
        >
          {item.name}
          <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="ml-4 border-l border-ink-200 pl-3 py-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.path}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className={`block rounded-lg px-3 py-2.5 text-base transition-colors ${
                    isActive(child.path) ? 'text-kenya-green font-semibold bg-kenya-green/5' : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      onClick={closeMenu}
      aria-current={isActive(item.path) ? 'page' : undefined}
      className={`block rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
        isActive(item.path) ? 'text-kenya-green bg-kenya-green/5' : 'text-ink-900 hover:bg-ink-50'
      }`}
    >
      {item.name}
    </Link>
  );
};

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,20,16,0.08),0_8px_24px_-12px_rgba(11,20,16,0.18)] py-2.5'
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
          <Link to="/" aria-label="Kenstane Energy — home" className="shrink-0">
            <Wordmark />
          </Link>

          <ul className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path) || item.children?.some((c) => isActive(c.path));
              if (item.children) {
                return (
                  <li key={item.name} className="relative group">
                    <button
                      type="button"
                      aria-haspopup="true"
                      className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors ${
                        active ? 'text-kenya-green' : 'text-ink-700 hover:text-ink-950 hover:bg-ink-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={15} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="w-64 rounded-xl border border-ink-200 bg-white p-2 shadow-lift">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.path}
                              aria-current={isActive(child.path) ? 'page' : undefined}
                              className={`block rounded-lg px-3 py-2.5 transition-colors ${
                                isActive(child.path) ? 'bg-kenya-green/5' : 'hover:bg-ink-50'
                              }`}
                            >
                              <span className={`block text-[15px] font-semibold ${isActive(child.path) ? 'text-kenya-green' : 'text-ink-900'}`}>
                                {child.name}
                              </span>
                              <span className="block text-sm text-ink-500">{child.note}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors ${
                      active ? 'text-kenya-green' : 'text-ink-700 hover:text-ink-950 hover:bg-ink-50'
                    }`}
                  >
                    {item.name}
                    {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-kenya-green" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-kenya-green px-4 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-kenya-green-dark transition-colors"
            >
              Contact us
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-900 hover:bg-ink-50 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-ink-950/50 backdrop-blur-sm xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[86%] max-w-sm bg-white shadow-2xl xl:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full invisible'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
            <Wordmark compact />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-900 hover:bg-ink-50"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-5 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.name} item={item} isActive={isActive} closeMenu={() => setMobileMenuOpen(false)} />
            ))}
          </div>

          <div className="border-t border-ink-100 p-5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-kenya-green py-3.5 text-base font-semibold text-white hover:bg-kenya-green-dark transition-colors"
            >
              Contact us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
