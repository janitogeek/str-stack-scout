'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Tool } from '@/types/tool';
import { getAllTools } from '@/lib/airtable';
import SearchBar from '@/components/SearchBar';
import ToolGrid from '@/components/ToolGrid';

export default function HomePage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchTools() {
      try {
        const toolsData = await getAllTools();
        setTools(toolsData);
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTools();
  }, []);

  // Filter tools by search term
  const filteredTools = useMemo(() => {
    if (!searchTerm) return tools.slice(0, 12); // Show first 12 tools on homepage

    const searchLower = searchTerm.toLowerCase();
    return tools.filter(tool =>
      tool.name.toLowerCase().includes(searchLower) ||
      tool.subcategory.toLowerCase().includes(searchLower) ||
      tool.description.toLowerCase().includes(searchLower) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }, [tools, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="font-black">STR STACK</span>{' '}
              <span className="font-light">Scout</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your curated directory of Short-Term Rental technology tools
            </p>
            <p className="text-lg mb-12 text-blue-100 max-w-2xl mx-auto">
              Discover, compare, and choose the best tools to scale your STR business. 
              From PMS to revenue management, we&apos;ve got you covered.
            </p>
            
            {/* Newsletter CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Quick search: Find tools by name or category..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {searchTerm ? 'Search Results' : 'Featured Tools'}
              </h2>
              <p className="text-gray-600">
                {searchTerm 
                  ? `Found ${filteredTools.length} tool${filteredTools.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                  : 'Explore our curated selection of top STR technology tools'
                }
              </p>
            </div>
            {!searchTerm && (
              <Link
                href="/tools"
                className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View All Tools
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : (
            <ToolGrid tools={filteredTools} />
          )}

          {searchTerm && filteredTools.length > 0 && (
            <div className="text-center mt-12">
              <Link
                href="/tools"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                View All Tools
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find tools organized by the specific needs of your STR business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Property Management System (PMS)', icon: '🏠', count: tools.filter(t => t.subcategory === 'Property Management System (PMS)').length },
              { name: 'Revenue Management', icon: '📈', count: tools.filter(t => t.subcategory === 'Revenue Management').length },
              { name: 'Channel Manager', icon: '🔗', count: tools.filter(t => t.subcategory === 'Channel Manager').length },
              { name: 'Guest Communication', icon: '💬', count: tools.filter(t => t.subcategory === 'Guest Communication').length },
              { name: 'Cleaning & Maintenance', icon: '🧹', count: tools.filter(t => t.subcategory === 'Cleaning & Maintenance').length },
              { name: 'Smart Home & IoT', icon: '🏡', count: tools.filter(t => t.subcategory === 'Smart Home & IoT').length },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/tools?category=${encodeURIComponent(category.name)}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200 group"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} tool{category.count !== 1 ? 's' : ''} available
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}