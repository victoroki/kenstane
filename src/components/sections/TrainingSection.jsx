import React from 'react';
import { GraduationCap, Download, CheckCircle, Award, Clock, Users } from 'lucide-react';
import { ENERGY_TYPES, TRAINING_PROGRAMS } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Training Programs"
          subtitle="Industry-certified courses designed to bridge the skills gap and enhance employability"
        />

        {/* Energy Type Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {ENERGY_TYPES.map((energy, idx) => (
            <div 
              key={idx} 
              className={`group bg-gradient-to-br ${energy.color} p-8 rounded-2xl text-white text-center hover:scale-105 hover:shadow-2xl transition-all cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <energy.icon className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="font-bold text-lg">{energy.name}</h4>
            </div>
          ))}
        </div>

        {/* Training Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {TRAINING_PROGRAMS.map((program, idx) => (
            <div 
              key={idx} 
              className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-kenya-green hover:shadow-2xl hover:-translate-y-1 transition-all animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${program.color}-500 to-${program.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <GraduationCap size={32} className="text-white" />
                </div>
                <span className={`bg-${program.color}-100 text-${program.color}-700 px-4 py-2 rounded-full text-sm font-semibold`}>
                  {program.level}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-kenya-green transition-colors">
                {program.title}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-slate-600">
                  <Users size={18} className="mr-3 text-kenya-green" />
                  <span className="text-sm"><strong>Target:</strong> {program.audience}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock size={18} className="mr-3 text-kenya-green" />
                  <span className="text-sm"><strong>Duration:</strong> {program.duration}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="text-kenya-green font-semibold flex items-center hover:gap-3 transition-all group">
                Download Brochure 
                <Download size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Graduate Engineering Training (GET) Highlight */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-kenya-black via-kenya-red to-kenya-green text-white p-12 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award size={40} />
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">Graduate Engineering Training (GET)</h3>
                  <p className="text-emerald-100 text-lg">Our flagship employability program</p>
                </div>
              </div>
              
              <p className="text-lg mb-8 leading-relaxed">
                Graduate training focuses on bridging the skills gap among fresh university and college graduates. The program offers employability training, technical certification programs, mentorship, and corporate induction services aimed at improving workplace readiness and employability.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {['Technical Certification', 'Mentorship Programs', 'Corporate Induction', 'Career Guidance'].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    <CheckCircle className="mx-auto mb-3" size={28} />
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" icon={Download} iconPosition="left">
                  GET Program Details
                </Button>
                <button className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-kenya-green transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;