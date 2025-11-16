import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const mediaItems = [
  { type: 'Video', title: 'Plant Safety Overview', emoji: '🎥' },
  { type: 'Podcast', title: 'Risk Engineering Talk', emoji: '🎙️' },
  { type: 'Gallery', title: 'Training Highlights', emoji: '🖼️' },
];

export default function MediaPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader title="Media" subtitle="Videos, podcasts, and galleries from our programs" />

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mediaItems.map((m, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-kenya-red hover:shadow-2xl transition-all text-center">
              <div className="text-6xl mb-4">{m.emoji}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
              <p className="text-slate-600 text-sm">{m.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}