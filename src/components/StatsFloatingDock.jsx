import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Heart } from 'lucide-react';

// Animated number component
const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    const targetValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    const increment = targetValue / (duration * 60); // 60 fps
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);
  
  return <span ref={ref}>{`${count}${value.replace(/[0-9]/g, '')}`}</span>;
};

const StatsFloatingDock = () => {
  const stats = [
    {
      label: 'Satisfied Clients',
      value: '5000+',
      icon: Users,
      gradient: 'from-primary to-secondary',
      bgGradient: 'from-primary/10 to-secondary/5',
    },
    {
      label: 'Years Experience',
      value: '12+',
      icon: Briefcase,
      gradient: 'from-secondary to-primary',
      bgGradient: 'from-secondary/10 to-primary/5',
    },
    {
      label: 'Insurance Partners',
      value: '15+',
      icon: Heart,
      gradient: 'from-accent to-secondary',
      bgGradient: 'from-accent/10 to-secondary/5',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center relative z-20 px-3 sm:px-4 md:px-6 lg:px-8 mb-16 sm:mb-20 mt-8">
      <div className={`w-full max-w-6xl transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main Dock Container */}
        <div className="relative">
          {/* Animated glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60"></div>

          {/* Glass morphism card */}
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Gradient border animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 hover:opacity-30 transition-all duration-700 rounded-3xl animate-gradient-shift"></div>
            
            {/* Subtle inner shadow */}
            <div className="absolute inset-0 shadow-inner rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>

            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-4 sm:py-6">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center justify-center text-center"
                      style={{
                        animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.2}s backwards` : 'none',
                      }}
                    >
                      {/* Enhanced gradient blob background */}
                      <div className={`absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br ${stat.bgGradient} rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl sm:blur-3xl -z-10 scale-105 group-hover:scale-110`}></div>
                      
                      {/* Floating particles effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-secondary rounded-full animate-float"></div>
                        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary rounded-full animate-float-delayed"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-secondary rounded-full animate-float"></div>
                      </div>

                      {/* Modern Icon Container */}
                      <div className="mb-2 sm:mb-3 md:mb-4 relative">
                        <div className={`bg-gradient-to-br ${stat.bgGradient} p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border border-white/60 group-hover:border-white/90 transition-all duration-700 transform group-hover:scale-105 sm:group-hover:scale-110 group-hover:shadow-xl sm:group-hover:shadow-2xl group-hover:shadow-${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'secondary'}/30 relative overflow-hidden`}>
                          {/* Inner glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl sm:rounded-2xl"></div>
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-secondary'} relative z-10 drop-shadow-sm`} />
                        </div>
                      </div>

                      {/* Enhanced Value */}
                      <motion.div 
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-1 sm:mb-2 md:mb-3 font-poppins drop-shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      >
                        <AnimatedNumber value={stat.value} duration={2} />
                      </motion.div>

                      {/* Modern Label */}
                      <motion.p 
                        className="text-navtext font-semibold text-xs sm:text-sm md:text-base font-sans leading-tight tracking-wide mb-1 sm:mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                      >
                        {stat.label}
                      </motion.p>

                      {/* Modern bottom accent line */}
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r ${stat.gradient} group-hover:w-6 sm:group-hover:w-8 md:group-hover:w-12 transition-all duration-700 rounded-full shadow-lg`}></div>
                      
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-secondary/30 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-secondary/30 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-8px) rotate(-180deg);
            opacity: 0.8;
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default StatsFloatingDock;
