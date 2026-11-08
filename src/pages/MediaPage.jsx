import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images, PlayCircle, Mic } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import { EVENTS, formatEventDate } from '../data/events';

const galleries = EVENTS.filter((e) => e.photos?.length);

const comingSoon = [
  { icon: PlayCircle, type: 'Video', title: 'Plant Safety Overview' },
  { icon: Mic, type: 'Podcast', title: 'Risk Engineering Talk' },
];

export default function MediaPage() {
  return (
    <>
      <SEO title="Media" description="Photo galleries, videos and podcasts from Kenstane Energy programmes and events." />
      <section className="bg-ink-50 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <SectionHeader
            as="h1"
            eyebrow="Community"
            title="Media"
            subtitle="Photo galleries, videos and podcasts from our programmes and events."
          />

          <h2 className="text-xl font-bold mb-6">Photo galleries</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {galleries.map((g) => (
              <li key={g.id}>
                <Link
                  to="/events#past"
                  className="group block overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
                    <img src={g.photos[0].src} alt={g.photos[0].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-ink-900">
                      <Images size={15} aria-hidden="true" /> {g.photos.length} photos
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-ink-500">{formatEventDate(g.date)} · {g.location}</p>
                    <h3 className="mt-1 text-lg font-semibold group-hover:text-kenya-green transition-colors">{g.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-kenya-green">
                      View gallery <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-16 mb-6">Videos & podcasts</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {comingSoon.map(({ icon: Icon, type, title }) => (
              <li key={title} className="flex items-center gap-4 rounded-2xl border border-dashed border-ink-300 bg-white p-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-100 text-ink-600">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{title}</p>
                  <p className="text-sm text-ink-500">{type} · Coming soon</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
