'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Tool } from '@/types/tool';
import SearchBar from '@/components/SearchBar';
import { AnimatedStats } from '@/components/AnimatedStats';

interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  searchResults: Tool[];
  stats: {
    totalTools: number;
    categories: number;
    totalIntegrations: number;
    avgRating: number;
  };
}

export function HeroSection({ searchTerm, onSearchChange, searchResults, stats }: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingTexts = [
    "Property Management Systems",
    "Revenue Optimization Tools", 
    "Guest Communication Platforms",
    "Smart Home Automation",
    "Channel Management Solutions",
    "Analytics & Reporting Tools"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                The Ultimate
              </span>
              <br />
              <span className="text-white">STR Tech Directory</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-blue-100 mb-4 h-8">
              <span>Discover the best </span>
              <span 
                className={`inline-block transition-all duration-300 font-semibold text-yellow-300 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
                }`}
              >
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Compare <strong className="text-white">{stats.totalTools}+ vetted tools</strong> across 
              <strong className="text-white"> {stats.categories} categories</strong>. 
              From solo hosts to enterprise operations – find your perfect tech stack.
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                placeholder="Search tools, categories, or solutions..."
                className="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:border-white/40 focus:bg-white/20"
                showIcon={true}
              />
              
              {/* Search Results Preview */}
              {searchTerm && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                  <div className="p-4">
                    <div className="text-sm font-medium text-gray-500 mb-3">
                      Found {searchResults.length} tools
                    </div>
                    <div className="space-y-2">
                      {searchResults.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools?search=${encodeURIComponent(searchTerm)}`}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-sm font-semibold text-blue-700">
                              {tool.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 truncate">{tool.name}</div>
                              <div className="text-sm text-gray-500 truncate">{tool.subcategory}</div>
                            </div>
                            {tool.rating && (
                              <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {tool.rating.score}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/tools?search=${encodeURIComponent(searchTerm)}`}
                      className="block mt-4 text-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all results →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-2xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Explore All Tools
            </Link>
            <Link
              href="/tools?category=Property Management System (PMS)"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 text-white border-2 border-white/30 rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:border-white/50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Start with PMS
            </Link>
          </div>

          {/* Animated Statistics */}
          <AnimatedStats stats={stats} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}