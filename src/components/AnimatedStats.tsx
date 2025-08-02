'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedStatsProps {
  stats: {
    totalTools: number;
    categories: number;
    totalIntegrations: number;
    avgRating: number;
  };
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    totalTools: 0,
    categories: 0,
    totalIntegrations: 0,
    avgRating: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        totalTools: Math.floor(stats.totalTools * easeOut),
        categories: Math.floor(stats.categories * easeOut),
        totalIntegrations: Math.floor(stats.totalIntegrations * easeOut),
        avgRating: Number((stats.avgRating * easeOut).toFixed(1)),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, stats]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="transform hover:scale-105 transition-transform duration-200">
        <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">
          {animatedStats.totalTools}+
        </div>
        <div className="text-blue-200 font-medium">Vetted Tools</div>
      </div>
      
      <div className="transform hover:scale-105 transition-transform duration-200">
        <div className="text-4xl md:text-5xl font-black text-green-300 mb-2">
          {animatedStats.categories}
        </div>
        <div className="text-blue-200 font-medium">Categories</div>
      </div>
      
      <div className="transform hover:scale-105 transition-transform duration-200">
        <div className="text-4xl md:text-5xl font-black text-pink-300 mb-2">
          {animatedStats.totalIntegrations}+
        </div>
        <div className="text-blue-200 font-medium">Integrations</div>
      </div>
      
      <div className="transform hover:scale-105 transition-transform duration-200">
        <div className="text-4xl md:text-5xl font-black text-orange-300 mb-2 flex items-center justify-center">
          <svg className="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {animatedStats.avgRating}
        </div>
        <div className="text-blue-200 font-medium">Avg Rating</div>
      </div>
    </div>
  );
}