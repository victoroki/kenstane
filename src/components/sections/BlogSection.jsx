import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../utils/constants';
import insightBg from '../../assests/insightandupdate.png';

const categoryStyles = {
  'Risk Engineering': { label: 'Risk Engineering', dot: 'bg-red-500', text: 'text-red-700', bg: 'bg-red-50' },
  'Technical': { label: 'Technical', dot: 'bg-slate-500', text: 'text-slate-700', bg: 'bg-slate-100' },
  'Training': { label: 'Training', dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' },
  'Industry Insights': { label: 'Industry Insights', dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' }
};

const BlogSection = () => {
  const featured = BLOG_POSTS[0];
  const recent = BLOG_POSTS.slice(1);

  return (
    <div>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={insightBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Resources
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Insights &amp; Updates
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Industry expertise, trends, and thought leadership from our team of energy and risk engineering professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-slate-900">Featured</h2>
              <div className="w-16 h-0.5 bg-emerald-600 rounded-full mx-auto mt-3"></div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden mb-20 hover:border-slate-300 transition-colors">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-slate-100 min-h-[280px] flex items-center justify-center">
                  <div className="text-center p-10">
                    <span className="text-7xl block mb-3">&#x1F4F0;</span>
                    <span className="text-sm text-slate-400 font-medium">Featured Article</span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryStyles[featured.category]?.bg || 'bg-slate-100'} ${categoryStyles[featured.category]?.text || 'text-slate-700'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${categoryStyles[featured.category]?.dot || 'bg-slate-400'}`}></span>
                      {featured.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock size={13} />
                      {featured.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1.5">
                      Read Post
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Latest</h2>
              <div className="w-16 h-0.5 bg-emerald-600 rounded-full mx-auto mt-3"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recent.map((post, idx) => (
                <article
                  key={idx}
                  className="border border-slate-200 rounded-2xl p-7 hover:border-slate-300 transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryStyles[post.category]?.bg || 'bg-slate-100'} ${categoryStyles[post.category]?.text || 'text-slate-700'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${categoryStyles[post.category]?.dot || 'bg-slate-400'}`}></span>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1">
                      Read
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                View all posts
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
