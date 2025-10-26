import React from 'react';
import { AnimatedCounter } from '../animations/AnimatedElements';

const StatCard = ({ 
  number, 
  label, 
  suffix = '', 
  prefix = '', 
  icon: Icon, 
  color = 'emerald',
  animateNumber = true,
  className = ''
}) => {
  const colorVariants = {
    emerald: {
      border: 'border-kenya-green',
      bg: 'bg-green-50',
      text: 'text-kenya-green',
      iconBg: 'bg-gradient-to-br from-kenya-green to-kenya-green-dark'
    },
    blue: {
      border: 'border-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    purple: {
      border: 'border-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    red: {
      border: 'border-kenya-red',
      bg: 'bg-red-50',
      text: 'text-kenya-red',
      iconBg: 'bg-gradient-to-br from-kenya-red to-kenya-red-dark'
    },
    amber: {
      border: 'border-amber-600',
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600'
    },
    green: {
      border: 'border-kenya-green',
      bg: 'bg-green-50',
      text: 'text-kenya-green',
      iconBg: 'bg-gradient-to-br from-kenya-green to-kenya-green-light'
    }
  };

  const colors = colorVariants[color] || colorVariants.emerald;

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${colors.border} hover:shadow-xl transition-all group ${className}`}>
      {Icon && (
        <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="text-white" size={24} />
        </div>
      )}
      
      <div className={`text-3xl font-bold ${colors.text} mb-1`}>
        {animateNumber ? (
          <AnimatedCounter 
            target={number} 
            suffix={suffix} 
            prefix={prefix}
            duration={2000}
          />
        ) : (
          <span>{prefix}{number}{suffix}</span>
        )}
      </div>
      
      <div className="text-sm text-slate-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;