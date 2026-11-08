import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { name: 'About us', to: '/about' },
      { name: 'Services', to: '/services' },
      { name: 'Sectors', to: '/sectors' },
      { name: 'Testimonials', to: '/testimonials' },
      { name: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { name: 'Training programmes', to: '/training' },
      { name: 'Natural Perils & Hazards', to: '/training/natural-perils-hazards' },
      { name: 'Risk Engineering', to: '/risk-engineering' },
      { name: 'Risk Assessment Tool', to: '/risk-assessment' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Events', to: '/events' },
      { name: 'Blogs', to: '/blogs' },
      { name: 'Articles', to: '/articles' },
      { name: 'Media', to: '/media' },
    ],
  },
];

const SOCIALS = [
  {
    label: 'LinkedIn',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    label: 'Instagram',
    path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-3.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z',
  },
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 text-white">
      <div className="flex h-1" aria-hidden="true">
        <span className="flex-1 bg-kenya-black" />
        <span className="flex-1 bg-kenya-red" />
        <span className="flex-1 bg-kenya-green" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-10">
        {/* CTA band */}
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-white">Planning training or a risk review?</p>
            <p className="mt-1 text-white/60">Tell us about your team or your asset and we’ll take it from there.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-ink-950 hover:bg-emerald-50 transition-colors"
          >
            Talk to us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Kenstane Energy — home">
              <img src="/logo.png" alt="" className="h-11 w-11 rounded-full bg-white object-contain p-0.5" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-extrabold">KENSTANE</span>
                <span className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-white/50">ENERGY LIMITED</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              Kenya’s training and consultancy partner for power generation and risk engineering.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href="/"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/80 hover:bg-kenya-green hover:text-white transition-colors"
                  >
                    <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] !text-white/50 font-sans">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link to={l.to} className="text-[15px] text-white/75 hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] !text-white/50 font-sans">Contact</h2>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                {COMPANY_INFO.location}
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="break-all hover:text-white">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Globe size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                {COMPANY_INFO.website}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Kenstane Energy Ltd. All rights reserved.
            <span className="mx-2 text-white/20">·</span>
            Built by{' '}
            <a href="https://garikon.com" target="_blank" rel="noopener noreferrer" className="font-medium text-white/70 hover:text-white">
              Garikon
            </a>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
