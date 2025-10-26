import React from 'react';
import { Wind, Sun, ChevronRight, Download } from 'lucide-react';
import { HERO_STATS } from '../../utils/constants';
import Button from '../ui/Button';

const VideoHeroSection = () => {
  return (
    <div>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Strategic Gradient Overlay - Responsive: Full overlay on mobile, left-side on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/70 md:via-slate-900/75 md:to-transparent w-full md:w-3/4 lg:w-1/2"></div>

      {/* Animated Background Elements - subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 opacity-10 md:opacity-20">
          <Wind size={60} className="text-emerald-400/30 md:w-[100px] md:h-[100px]" />
        </div>
        <div className="absolute bottom-32 right-10 md:right-20 opacity-10 md:opacity-20">
          <Sun size={80} className="text-amber-400/30 md:w-[120px] md:h-[120px]" />
        </div>
      </div>

      {/* Content Container - Left 40% F-Pattern Layout */}
      <div className="relative h-full flex items-center pt-20">
        <div className="px-8 lg:px-16 ml-0">
          <div className="">
            {/* <div className="max-w-2xl"> */}
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm tracking-wide">
                {/* Kenya's Premier Energy Training & Risk Engineering Firm */}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering engineers and underwriters
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                with practical risk solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              Bridging critical skills gaps with world-class training in renewable energy, power generation, and comprehensive risk engineering
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-24">
              <Button variant="primary" icon={ChevronRight} iconPosition="right" as="a" href="#training">
                Explore Programs
              </Button>
              <Button variant="secondary" as="a" href="#contact">
                Book Consultation
              </Button>
              <Button variant="red" icon={Download} iconPosition="left" as="a" href="#">
                Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section - Responsive grid */}
    <section className="relative bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {HERO_STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-slate-200 hover:border-emerald-500" 
            >
              <stat.icon className="text-emerald-600 mb-2 md:mb-4 mx-auto group-hover:scale-110 group-hover:text-emerald-500 transition-all" size={32} />
              <div className="text-3xl md:text-5xl font-bold text-slate-900 mb-1 md:mb-2">{stat.num}</div>
              <div className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default VideoHeroSection;