import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const BlogSection = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'Risk Engineering': 'bg-red-100 text-kenya-red',
      'Technical': 'bg-slate-100 text-kenya-black',
      'Training': 'bg-green-100 text-kenya-green',
      'Industry Insights': 'bg-green-100 text-kenya-green-light'
    };
    return colors[category] || 'bg-slate-100 text-slate-700';
  };

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Insights & Articles"
          subtitle="Industry expertise, trends, and thought leadership from our team"
        />

        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="mb-12 animate-fade-in-up">
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-kenya-green hover:shadow-2xl transition-all group">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="bg-gradient-to-br from-kenya-green to-kenya-red h-80 md:h-auto flex items-center justify-center text-white">
                  <div className="text-center p-12">
                    <div className="text-9xl mb-4">📰</div>
                    <div className="text-2xl font-bold">Featured Article</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-xs px-4 py-2 rounded-full font-semibold ${getCategoryColor(BLOG_POSTS[0].category)}`}>
                      {BLOG_POSTS[0].category}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(BLOG_POSTS[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {BLOG_POSTS[0].readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-kenya-green transition-colors">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <button className="flex items-center text-kenya-green font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-kenya-green hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-kenya-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

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

          {/* View All CTA */}
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-lg font-semibold text-kenya-red hover:text-kenya-red-dark group"
            >
              View All Articles
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;