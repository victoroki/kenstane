import React from 'react';
import { Download, FileText, File } from 'lucide-react';
import { RESOURCES } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const ResourcesSection = () => {
  const getFileIcon = (type) => {
    switch(type) {
      case 'PDF':
        return <FileText size={32} className="text-red-500" />;
      case 'Excel':
        return <File size={32} className="text-green-500" />;
      default:
        return <FileText size={32} className="text-blue-500" />;
    }
  };

  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Resources & Downloads"
          subtitle="Free tools, templates, and guides to support your projects"
        />

        <div className="max-w-6xl mx-auto">
          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {RESOURCES.map((resource, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-kenya-green hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  {/* File Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getFileIcon(resource.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-kenya-green transition-colors">
                        {resource.title}
                      </h3>
                      <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {resource.size}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <button className="flex items-center gap-2 text-kenya-green font-semibold hover:gap-3 transition-all">
                      <Download size={18} />
                      Download {resource.type}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources CTA */}
          <div className="bg-gradient-to-r from-kenya-green to-kenya-green-light text-white p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold mb-4">Need More Resources?</h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter to receive exclusive tools, industry insights, and training updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button className="bg-white text-kenya-green px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;