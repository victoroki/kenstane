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
  onClick,
  ...props
}) => {
  const baseStyles =
    'group/btn font-semibold rounded-lg inline-flex items-center justify-center gap-2 transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kenya-green disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-kenya-green text-white hover:bg-kenya-green-dark shadow-sm hover:shadow-md',
    secondary: 'bg-white text-ink-900 border border-ink-200 hover:border-ink-300 hover:bg-ink-50 shadow-sm',
    accent: 'bg-kenya-red text-white hover:bg-kenya-red-dark shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-kenya-green hover:bg-kenya-green/5',
    red: 'bg-kenya-red text-white hover:bg-kenya-red-dark shadow-sm hover:shadow-md',
    outline: 'border border-ink-300 text-ink-800 hover:border-kenya-green hover:text-kenya-green',
    light: 'bg-white/10 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-[15px]',
    lg: 'px-8 py-4 text-base',
  };

  let Component = 'button';
  if (as === 'a') Component = 'a';
  else if (as === 'link') Component = Link;

  const componentProps = {
    className: `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`,
    onClick,
    ...props,
  };

  if (Component === 'a') componentProps.href = href || to || '#';
  if (Component === Link) componentProps.to = to || href || '#';

  return (
    <Component {...componentProps}>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon size={18} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-0.5" />
      )}
    </Component>
  );
};

export default Button;
