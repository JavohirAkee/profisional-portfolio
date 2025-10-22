import React from 'react';
import DevLogo from '../img/dev-logo.webp';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'text';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'full' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const LogoIcon = () => (
    <img
      src={DevLogo}
      alt="Javoxir Logo"
      className={`${sizeClasses[size]} ${className} rounded-full object-cover`}
    />
  );

  const LogoText = () => (
    <span className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent ${textSizes[size]} ${className}`}>
      
    </span>
  );

  const FullLogo = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon />
      <div className="flex flex-col">
        <span className={`font-bold text-gray-900 dark:text-white ${textSizes[size]}`}>
          Javoxir
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium -mt-1">
          Developer
        </span>
      </div>
    </div>
  );

  switch (variant) {
    case 'icon':
      return <LogoIcon />;
    case 'text':
      return <LogoText />;
    case 'full':
    default:
      return <FullLogo />;
  }
};

export default Logo;
