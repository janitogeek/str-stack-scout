'use client';

import { useState, useEffect } from 'react';

interface StatsSectionProps {
  stats: {
    totalTools: number;
    categories: number;
    totalIntegrations: number;
    avgRating: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StatsSection(_: StatsSectionProps) {
  const [currentStat, setCurrentStat] = useState(0);

  const statItems = [
    {
      icon: "🚀",
      label: "Startup Accelerator",
      description: "Tools designed for rapid growth and scaling",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "🏆", 
      label: "Enterprise Ready",
      description: "Enterprise-grade solutions for large operations",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "💡",
      label: "Innovation Hub", 
      description: "Cutting-edge AI and automation tools",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "🌟",
      label: "Quality Assured",
      description: "Hand-picked and thoroughly vetted solutions",
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % statItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [statItems.length]);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering STR Success Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of hosts, property managers, and STR professionals globally
          </p>
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                currentStat === index
                  ? 'bg-gradient-to-br text-white shadow-2xl scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
              style={{
                background: currentStat === index ? `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` : undefined
              }}
              onClick={() => setCurrentStat(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                <p className={`text-sm ${currentStat === index ? 'text-white/90' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              
              {/* Animated border */}
              {currentStat === index && (
                <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Industry Leaders Choose STR Stack Scout
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Comprehensive vetting process ensures quality</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Real user reviews and ratings</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Detailed comparison and filtering tools</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Regular updates with latest tools and trends</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Updated</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                  <div className="text-gray-300">Monthly Users</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                  <div className="text-gray-300">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}