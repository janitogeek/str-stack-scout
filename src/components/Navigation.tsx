'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Tools Directory', href: '/tools', current: pathname === '/tools' },
    { name: 'Categories', href: '/tools#categories', current: false },
    { name: 'About', href: '#about-str-technology', current: false },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-900">S</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className={`text-xl font-black ${isScrolled ? 'text-gray-900' : 'text-white'} group-hover:text-blue-600 transition-colors`}>
                STR Stack Scout
              </div>
              <div className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-blue-200'} font-medium`}>
                Ultimate STR Directory
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 relative group ${
                  item.current
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {item.current && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/tools"
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
              }`}
            >
              Explore Tools
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 mx-4 ${
                    item.current
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link
                  href="/tools"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Explore Tools
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Overlay Toggle (Future Feature) */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <button
          className={`p-2 rounded-xl transition-all duration-200 ${
            isScrolled
              ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              : 'text-blue-200 hover:text-white hover:bg-white/10'
          }`}
          title="Quick Search (Coming Soon)"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Progress Bar (shows on scroll) */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300"></div>
      )}
    </nav>
  );
}