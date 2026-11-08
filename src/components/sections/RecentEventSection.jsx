import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { EVENTS, splitEvents, formatEventDate } from '../../data/events';

const RecentEventSection = () => {
  const { past } = splitEvents(EVENTS);
  const event = past.find((e) => e.featured && e.photos?.length >= 4);
  if (!event) return null;
  const [a, b, c, d] = event.photos;

  return (
    <section aria-labelledby="recent-event-title" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-4">From the field</p>
            <h2 id="recent-event-title" className="text-3xl md:text-4xl font-bold leading-tight">
              {event.series || event.title}
            </h2>
            <div className="flag-rule mt-5" aria-hidden="true" />
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink-700">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={17} className="text-kenya-green" aria-hidden="true" />
                {formatEventDate(event.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} className="text-kenya-green" aria-hidden="true" />
                {event.location}
              </span>
            </div>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              We were proud to sponsor ESA-KU Sustainability Week under the theme
              <span className="font-semibold text-ink-900"> “{event.theme}”</span>, meeting
              student engineers at our stand and talking through careers in power generation and risk engineering.
            </p>
            <Link
              to="/events#past"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-kenya-green px-6 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-kenya-green-dark transition-colors"
            >
              See the event & photos
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-6 grid-rows-[repeat(6,minmax(0,1fr))] gap-3 aspect-[5/4]">
            <img src={a.src} alt={a.alt} loading="lazy" className="col-span-6 row-span-3 h-full w-full rounded-2xl object-cover" />
            <img src={b.src} alt={b.alt} loading="lazy" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover object-top" />
            <img src={c.src} alt={c.alt} loading="lazy" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover" />
            <img src={d.src} alt={d.alt} loading="lazy" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEventSection;
