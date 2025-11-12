import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  iconPosition = 'right',
  className = '',
  as,
  href,
  to,
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-xl transition-all transform inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-kenya-green to-kenya-green-light text-white hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105",
    secondary: "bg-white border-2 border-kenya-green text-kenya-green hover:bg-green-50 hover:scale-105 shadow-lg",
    accent: "bg-gradient-to-r from-kenya-red to-kenya-red-light text-white hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105",
    ghost: "bg-transparent text-kenya-green hover:bg-green-50",
    red: "bg-kenya-red text-white hover:bg-kenya-red-dark hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105",
    outline: "border-2 border-slate-300 text-slate-700 hover:border-kenya-green hover:text-kenya-green"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };
  
  // Determine which component to render based on `as`
  let Component = 'button';
  if (as === 'a') {
    Component = 'a';
  } else if (as === 'link') {
    Component = Link;
  }

  const componentProps = {
    className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
    ...props
  };

  if (Component === 'a') {
    componentProps.href = href || to || '#';
  }

  if (Component === Link) {
    componentProps.to = to || href || '#';
  }

  return (
    <Component {...componentProps}>
      {Icon && iconPosition === 'left' && <Icon size={20} className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} className="ml-2" />}
    </Component>
  );
};

export default Button;