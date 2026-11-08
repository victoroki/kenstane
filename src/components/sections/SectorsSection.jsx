import React from 'react';
import { SECTORS } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const SectorsSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight" style={{ lineHeight: '1.1' }}>
              Sectors We Serve
            </h1>
            <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Partnering with leading organizations across multiple industries
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECTORS.map((sector, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <sector.icon className="text-white" size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-bold text-slate-900 text-xl mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorsSection;