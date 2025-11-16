import React, { useEffect, useRef, useState } from 'react';
import { Wind, Sun, ChevronRight, Download } from 'lucide-react';
import { HERO_STATS } from '../../utils/constants';
import Button from '../ui/Button';

const CountUp = ({ end, duration = 2200, suffix = '' }) => {
  const [val, setVal] = useState(1);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        const startTime = performance.now();
        const animate = (t) => {
          const progress = Math.min((t - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(1 + (end - 1) * eased);
          setVal(current);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration, started]);
  return <span ref={ref}>{val}{suffix}</span>;
};

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
              <div className='mb-20'></div>
              {/* Badge */}
              {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-sm tracking-wide">
                  {/* Kenya's Premier Energy Training & Risk Engineering Firm 
                </span>
              </div> */}

{/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug">
              Bridging critical skills gaps with
              <span className="block mt-2 pb-1 md:pb-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                world-class renewable energy & risk engineering training

              </span>
            </h1>

            {/* Spacing */}
            <div className="mb-20"></div>
              {/* Subtitle */}
              {/* <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
                Bridging critical skills gaps with world-class training in renewable energy, power generation, and comprehensive risk engineering
              </p> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-24">
                <Button variant="primary" icon={ChevronRight} iconPosition="right" as="a" href="/services">
                  Explore Our Services
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
          <div className={`grid grid-cols-2 ${HERO_STATS.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-4 md:gap-8 max-w-6xl mx-auto`}>
            {HERO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border-2 border-slate-200"
              >
                <stat.icon className="text-emerald-600 mb-2 md:mb-4 mx-auto" size={32} />
                <div className="text-3xl md:text-5xl font-bold text-slate-900 mb-1 md:mb-2">
                  {(() => {
                    const target = parseInt(String(stat.num).replace(/[^0-9]/g, ''), 10) || 1;
                    const suffix = String(stat.num).replace(/[0-9]/g, '');
                    return <CountUp end={target} duration={2400} suffix={suffix} />;
                  })()}
                </div>
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