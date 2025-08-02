'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Tool, SUBCATEGORIES } from '@/types/tool';

interface CategoryShowcaseProps {
  tools: Tool[];
}

export function CategoryShowcase({ tools }: CategoryShowcaseProps) {
  const categoryData = useMemo(() => {
    const categoryIcons = {
      'Property Management System (PMS)': { icon: '🏢', color: 'from-blue-500 to-blue-700', description: 'All-in-one platforms for managing your STR properties' },
      'Revenue Management': { icon: '💰', color: 'from-green-500 to-green-700', description: 'Dynamic pricing and revenue optimization tools' },
      'Channel Manager': { icon: '📡', color: 'from-purple-500 to-purple-700', description: 'Distribute listings across multiple booking platforms' },
      'Guest Communication': { icon: '💬', color: 'from-pink-500 to-pink-700', description: 'Automate and enhance guest interactions' },
      'Cleaning & Maintenance': { icon: '🧹', color: 'from-orange-500 to-orange-700', description: 'Coordinate cleaning and property maintenance' },
      'Smart Home & IoT': { icon: '🏠', color: 'from-indigo-500 to-indigo-700', description: 'Smart locks, thermostats, and automation' },
      'Analytics & Reporting': { icon: '📊', color: 'from-teal-500 to-teal-700', description: 'Data insights and performance analytics' },
      'Guest Experience': { icon: '⭐', color: 'from-yellow-500 to-yellow-700', description: 'Enhance guest satisfaction and reviews' },
      'Accounting & Finance': { icon: '💳', color: 'from-red-500 to-red-700', description: 'Financial management and accounting tools' },
      'Marketing & SEO': { icon: '📈', color: 'from-cyan-500 to-cyan-700', description: 'Marketing automation and SEO optimization' },
      'Legal & Compliance': { icon: '⚖️', color: 'from-slate-500 to-slate-700', description: 'Legal compliance and regulatory tools' },
      'Insurance': { icon: '🛡️', color: 'from-emerald-500 to-emerald-700', description: 'Property and liability insurance solutions' },
      'Other': { icon: '🔧', color: 'from-gray-500 to-gray-700', description: 'Specialized tools and unique solutions' }
    };

    return SUBCATEGORIES.map(category => {
      const categoryTools = tools.filter(tool => tool.subcategory === category);
      const avgRating = categoryTools.length > 0 
        ? categoryTools
            .filter(tool => tool.rating)
            .reduce((sum, tool) => sum + (tool.rating?.score || 0), 0) / 
          categoryTools.filter(tool => tool.rating).length
        : 0;

      return {
        name: category,
        count: categoryTools.length,
        avgRating: isNaN(avgRating) ? 0 : Number(avgRating.toFixed(1)),
        tools: categoryTools.slice(0, 3), // Top 3 tools for preview
        ...categoryIcons[category]
      };
    }).filter(cat => cat.count > 0);
  }, [tools]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover specialized tools for every aspect of your STR business. 
            From property management to guest experience, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category) => (
            <Link
              key={category.name}
              href={`/tools?category=${encodeURIComponent(category.name)}`}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-20 text-6xl transform translate-x-4 -translate-y-2">
                    {category.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{category.count} tools</span>
                      {category.avgRating > 0 && (
                        <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
                          <svg className="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium">{category.avgRating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tool Previews */}
                <div className="p-6">
                  <div className="space-y-3">
                    {category.tools.map((tool) => (
                      <div key={tool.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-600">
                          {tool.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{tool.name}</div>
                          {tool.rating && (
                            <div className="flex items-center text-xs text-gray-500">
                              <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {tool.rating.score}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {category.count > 3 && (
                      <div className="text-center text-sm text-gray-500 pt-2">
                        +{category.count - 3} more tools
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Explore category</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View All Categories</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}