'use client';

import { useEffect } from 'react';

export function Analytics() {
  useEffect(() => {
    // Track page views and user interactions for SEO insights
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Add your analytics tracking code here
        console.log('Page view tracked:', window.location.pathname);
      }
    };

    trackPageView();

    // Track scroll depth for engagement metrics
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
        console.log(`Scroll depth: ${scrollPercentage}%`);
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return null;
}