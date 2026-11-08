import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
  eyebrow,
  centered = true,
  as: Heading = 'h2',
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Heading className="text-3xl md:text-5xl font-bold text-ink-950 leading-[1.1]">
        {title}
      </Heading>
      <div className={`flag-rule mt-5 ${centered ? 'mx-auto' : ''}`} aria-hidden="true" />
      {subtitle && (
        <p
          className={`mt-5 text-lg md:text-xl text-ink-600 leading-relaxed ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
