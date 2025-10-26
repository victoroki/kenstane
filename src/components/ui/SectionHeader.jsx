import React from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className = "" 
}) => {
  return (
    <div className={`mb-16 animate-fade-in-up ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      <div className={`w-32 h-1.5 bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black rounded-full ${centered ? 'mx-auto' : ''} mb-6`}></div>
      {subtitle && (
        <p className={`text-xl text-slate-600 leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;