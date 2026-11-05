import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  X,
} from 'lucide-react';
import SEO from '../components/SEO';
import { EVENTS, splitEvents, formatEventDate } from '../data/events';

/* ---------- Lightbox ---------- */

const Lightbox = ({ photos, index, onClose, onChange, title }) => {
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const photo = photos[index];

  const prev = useCallback(() => onChange((index - 1 + photos.length) % photos.length), [index, photos.length, onChange]);
  const next = useCallback(() => onChange((index + 1) % photos.length), [index, photos.length, onChange]);

  useEffect(() => {
    lastFocused.current = document.activeElement;
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      lastFocused.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo ${index + 1} of ${photos.length}`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white/80 text-sm" onClick={(e) => e.stopPropagation()}>
        <span className="tabular-nums">
          {index + 1} / {photos.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close gallery"
        >
          <X size={22} />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20 pb-4">
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      <p className="px-6 pb-6 text-center text-sm text-white/70" onClick={(e) => e.stopPropagation()}>
        {photo.alt}
      </p>
    </div>
  );
};

/* ---------- Building blocks ---------- */

const MetaItem = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 text-ink-700">
    <Icon size={17} className="text-kenya-green shrink-0" aria-hidden="true" />
    {children}
  </span>
);

const DateBlock = ({ iso }) => {
  const d = new Date(`${iso}T00:00:00`);
  return (
    <div className="flex w-16 shrink-0 flex-col items-center rounded-xl border border-ink-200 bg-white py-2 text-center">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-kenya-red">
        {d.toLocaleDateString('en-GB', { month: 'short' })}
      </span>
      <span className="font-display text-2xl font-bold leading-none text-ink-950 mt-1">{d.getDate()}</span>
      <span className="text-[11px] text-ink-500 mt-1">{d.getFullYear()}</span>
    </div>
  );
};

const FeaturedPastEvent = ({ event }) => {
  const [open, setOpen] = useState(null);
  const photos = event.photos || [];
  const hero = photos[0];
  const grid = photos.slice(1, 7);
  const remaining = photos.length - 7;

  return (
    <article aria-labelledby={`${event.id}-title`} className="rounded-3xl border border-ink-200 bg-white shadow-soft overflow-hidden">
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* Lead photo */}
        {hero && (
          <button
            type="button"
            onClick={() => setOpen(0)}
            className="group relative block aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden bg-ink-100 text-left"
            aria-label={`Open gallery: ${hero.alt}`}
          >
            <img
              src={hero.src}
              alt={hero.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-ink-900 shadow-sm">
              <Images size={16} aria-hidden="true" />
              {photos.length} photos
            </span>
          </button>
        )}

        {/* Details */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-700">
              Past event
            </span>
            {event.role && (
              <span className="rounded-full bg-kenya-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kenya-green">
                {event.role}
              </span>
            )}
          </div>

          <h3 id={`${event.id}-title`} className="text-2xl sm:text-3xl font-bold leading-tight">
            {event.title}
          </h3>
          {event.theme && (
            <p className="mt-2 text-ink-600">
              Theme: <span className="font-semibold text-ink-800">“{event.theme}”</span>
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <MetaItem icon={CalendarDays}>{formatEventDate(event.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</MetaItem>
            <MetaItem icon={MapPin}>{event.location}</MetaItem>
          </div>

          <p className="mt-6 text-ink-700 leading-relaxed">{event.description}</p>

          {event.highlights && (
            <ul className="mt-6 space-y-3">
              {event.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kenya-red" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setOpen(0)}
              className="inline-flex items-center gap-2 rounded-lg bg-kenya-green px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-kenya-green-dark transition-colors"
            >
              <Images size={18} aria-hidden="true" />
              View photos
            </button>
            {event.galleryUrl && (
              <a
                href={event.galleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-5 py-3 text-[15px] font-semibold text-ink-900 hover:border-ink-300 hover:bg-ink-50 transition-colors"
              >
                Full gallery
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Photo strip */}
      {grid.length > 0 && (
        <div className="border-t border-ink-100 p-3 sm:p-4">
          <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {grid.map((p, i) => {
              const idx = i + 1;
              const isLast = i === grid.length - 1 && remaining > 0;
              return (
                <li key={p.src}>
                  <button
                    type="button"
                    onClick={() => setOpen(idx)}
                    className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-ink-100"
                    aria-label={isLast ? `View all ${photos.length} photos` : `Open photo: ${p.alt}`}
                  >
                    <img
                      src={p.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {isLast && (
                      <span className="absolute inset-0 flex items-center justify-center bg-ink-950/60 font-display text-xl font-bold text-white">
                        +{remaining}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          {event.photoCredit && (
            <p className="mt-3 flex items-center gap-1.5 px-1 text-xs text-ink-500">
              <Camera size={13} aria-hidden="true" />
              Photos: {event.photoCredit}
            </p>
          )}
        </div>
      )}

      {open !== null && (
        <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} title={event.title} />
      )}
    </article>
  );
};

const PastEventRow = ({ event }) => (
  <li className="flex gap-5 py-6 first:pt-0 last:pb-0">
    <DateBlock iso={event.date} />
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold text-ink-950">{event.title}</h3>
        {event.type && (
          <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-600">{event.type}</span>
        )}
      </div>
      <p className="mt-1 text-ink-600">{event.description}</p>
      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-500">
        <MapPin size={14} aria-hidden="true" /> {event.location}
      </p>
    </div>
  </li>
);

const UpcomingCard = ({ event }) => (
  <li className="flex gap-5 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
    <DateBlock iso={event.date} />
    <div className="min-w-0">
      {event.type && <p className="eyebrow mb-2">{event.type}</p>}
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="mt-2 text-ink-600">{event.description}</p>
      <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-500">
        <MapPin size={14} aria-hidden="true" /> {event.location}
      </p>
    </div>
  </li>
);

/* ---------- Page ---------- */

export default function EventsPage() {
  const { upcoming, past } = useMemo(() => splitEvents(EVENTS), []);
  const featuredPast = past.filter((e) => e.featured && e.photos?.length);
  const otherPast = past.filter((e) => !(e.featured && e.photos?.length));

  return (
    <>
      <SEO
        title="Events"
        description="Kenstane Energy events, workshops and partnerships — including our sponsorship of ESA-KU Sustainability Week 2026 at Kenyatta University."
      />

      {/* Page header */}
      <header className="relative overflow-hidden bg-forest text-white pt-36 pb-16 md:pt-44 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">
          <p className="eyebrow !text-emerald-300 mb-4">Community</p>
          <h1 className="text-4xl md:text-6xl font-bold !text-white leading-[1.05] max-w-3xl">Events</h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
            Workshops, webinars and the partnerships where we meet the next generation of energy engineers.
          </p>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="#upcoming" className="rounded-full border border-white/25 px-4 py-2 hover:bg-white/10 transition-colors">
              Upcoming {upcoming.length > 0 && <span className="ml-1 text-white/60">({upcoming.length})</span>}
            </a>
            <a href="#past" className="rounded-full border border-white/25 px-4 py-2 hover:bg-white/10 transition-colors">
              Past events <span className="ml-1 text-white/60">({past.length})</span>
            </a>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex h-1" aria-hidden="true">
          <span className="flex-1 bg-kenya-black" />
          <span className="flex-1 bg-kenya-red" />
          <span className="flex-1 bg-kenya-green" />
        </div>
      </header>

      {/* Upcoming */}
      <section id="upcoming" aria-labelledby="upcoming-title" className="scroll-mt-28 bg-ink-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 id="upcoming-title" className="text-2xl md:text-3xl font-bold">Upcoming events</h2>
          {upcoming.length > 0 ? (
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {upcoming.map((e) => <UpcomingCard key={e.id} event={e} />)}
            </ul>
          ) : (
            <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-dashed border-ink-300 bg-white p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kenya-green/10 text-kenya-green">
                  <CalendarDays size={24} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink-950 text-lg">No upcoming events announced yet</p>
                  <p className="mt-1 text-ink-600 max-w-xl">
                    New workshops and training dates are on the way. Get in touch and we’ll let you know as soon as the next one is scheduled.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-kenya-green px-5 py-3 text-[15px] font-semibold text-white hover:bg-kenya-green-dark transition-colors"
              >
                Notify me
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Past */}
      <section id="past" aria-labelledby="past-title" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Archive</p>
              <h2 id="past-title" className="text-2xl md:text-4xl font-bold">Past events</h2>
            </div>
          </div>

          {featuredPast.length > 0 && (
            <div className="mt-10 space-y-10">
              {featuredPast.map((e) => <FeaturedPastEvent key={e.id} event={e} />)}
            </div>
          )}

          {otherPast.length > 0 && (
            <div className="mt-14">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500 mb-6">Earlier events</h3>
              <ul className="divide-y divide-ink-100 rounded-2xl border border-ink-200 p-6 sm:p-8">
                {otherPast.map((e) => <PastEventRow key={e.id} event={e} />)}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
