import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '' 
}) => {
  const baseStyles = "rounded-2xl transition-all";
  
  const variants = {
    default: "bg-white border border-slate-200 p-8",
    gradient: "bg-gradient-to-br from-white to-slate-50 p-8 border border-slate-100",
    glass: "bg-white/80 backdrop-blur-md border border-white/50 p-8",
    colored: "p-8"
  };
  
  const hoverEffect = hover ? "hover:shadow-2xl hover:-translate-y-2 cursor-pointer" : "";
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

export const IconCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "from-kenya-green to-kenya-green-light",
  className = ""
}) => {
  return (
    <Card hover className={className}>
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </Card>
  );
};

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "from-kenya-green to-kenya-green-light",
  link,
  className = ""
}) => {
  return (
    <a href={link} className="group block">
      <Card hover className={className}>
        <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
          <Icon className="text-white" size={36} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-kenya-green transition-colors">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        <span className="text-kenya-green font-semibold flex items-center">
          Learn More 
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Card>
    </a>
  );
};

export default Card;