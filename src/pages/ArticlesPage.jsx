import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { BLOG_POSTS } from '../utils/constants';
import { Calendar, ArrowRight } from 'lucide-react';

export default function ArticlesPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Articles" subtitle="Long-form perspectives and technical write-ups" />

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {BLOG_POSTS.map((post, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-kenya-green hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-kenya-green transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <button className="text-kenya-green font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                  Read
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}