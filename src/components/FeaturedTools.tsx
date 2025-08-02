'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tool } from '@/types/tool';

interface FeaturedToolsProps {
  tools: Tool[];
}

export function FeaturedTools({ tools }: FeaturedToolsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [];
  const toolsPerSlide = 4;
  
  for (let i = 0; i < tools.length; i += toolsPerSlide) {
    slides.push(tools.slice(i, i + toolsPerSlide));
  }

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  if (tools.length === 0) return null;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M30 30m-2 0a2,2 0 1,1 4,0a2,2 0 1,1 -4,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Top Rated Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured STR Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked tools with the highest ratings and proven track records. 
            These solutions are trusted by thousands of STR professionals worldwide.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slideTools, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    {slideTools.map((tool) => (
                      <div key={tool.id} className="group">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          {/* Tool Header */}
                          <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="relative w-12 h-12 flex-shrink-0">
                                <Image
                                  src={tool.logoUrl}
                                  alt={`${tool.name} logo`}
                                  fill
                                  className="rounded-xl object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://via.placeholder.com/48x48?text=${tool.name.charAt(0)}`;
                                  }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                                  {tool.name}
                                </h3>
                                <p className="text-sm text-gray-500 truncate">{tool.subcategory}</p>
                              </div>
                            </div>

                            {/* Rating */}
                            {tool.rating && (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(tool.rating?.score || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="ml-2 text-sm font-medium text-gray-700">
                                    {tool.rating?.score || 0}
                                  </span>
                                </div>
                                <span className="text-xs text-gray-500">
                                  {tool.rating?.reviewCount || 0} reviews
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Tool Content */}
                          <div className="p-6">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {tool.description}
                            </p>

                            {/* Key Features */}
                            {tool.keyFeatures && tool.keyFeatures.length > 0 && (
                              <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                  {tool.keyFeatures.slice(0, 2).map((feature, index) => (
                                    <span
                                      key={index}
                                      className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                  {tool.keyFeatures.length > 2 && (
                                    <span className="inline-block text-gray-500 text-xs px-2 py-1">
                                      +{tool.keyFeatures.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Pricing */}
                            {tool.pricing && (
                              <div className="mb-4">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-500">Starting at</span>
                                  <span className="font-semibold text-gray-900">
                                    {tool.pricing.model === 'Free' ? 'Free' : 
                                     tool.pricing.model === 'Contact' ? 'Contact for pricing' :
                                     tool.pricing.startingPrice || tool.pricing.model}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* CTA */}
                            <Link
                              href={tool.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* View All Tools CTA */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-2xl hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Explore All {tools.length} Tools</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}