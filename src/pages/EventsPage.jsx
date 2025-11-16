import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { Calendar, MapPin } from 'lucide-react';

const events = [
  { title: 'Risk Engineering Intro Webinar', date: '2026-01-20', location: 'Online', desc: 'Overview of risk engineering for energy assets.' },
  { title: 'Renewable Training Open Day', date: '2026-02-05', location: 'Nairobi', desc: 'Meet instructors and explore course pathways.' },
  { title: 'Power Plant Safety Workshop', date: '2026-03-12', location: 'Kiambu', desc: 'Hands-on best practices and safety checklists.' },
];

export default function EventsPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Events" subtitle="Upcoming webinars, workshops, and open days" />
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((e, idx) => (
            <Card key={idx} variant="default" className="shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{e.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{e.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-700 flex items-center gap-2">
                  <Calendar size={16} className="text-kenya-green" />
                  {new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="text-sm text-slate-700 flex items-center gap-2">
                  <MapPin size={16} className="text-kenya-red" />
                  {e.location}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}