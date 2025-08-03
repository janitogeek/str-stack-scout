'use client';

import { useState, useEffect, useMemo } from 'react';
import { Tool, SUBCATEGORIES } from '@/types/tool';
import { getAllTools } from '@/lib/airtable';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { FeaturedTools } from '@/components/FeaturedTools';
import { TrustIndicators } from '@/components/TrustIndicators';
import { NewsletterCTA } from '@/components/NewsletterCTA';
import Glossary from '@/components/Glossary';

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

  // Calculate dynamic statistics
  const stats = useMemo(() => {
    const totalTools = tools.length;
    const categories = SUBCATEGORIES.length;
    const totalIntegrations = new Set(
      tools.flatMap(tool => tool.integrations || [])
    ).size;
    const avgRating = tools
      .filter(tool => tool.rating)
      .reduce((sum, tool) => sum + (tool.rating?.score || 0), 0) / 
      tools.filter(tool => tool.rating).length;

    return {
      totalTools,
      categories,
      totalIntegrations,
      avgRating: isNaN(avgRating) ? 4.2 : Number(avgRating.toFixed(1))
    };
  }, [tools]);

  // Filter tools for search preview
  const searchPreviewTools = useMemo(() => {
    if (!searchTerm) return [];

    const searchLower = searchTerm.toLowerCase();
    return tools
      .filter(tool =>
        tool.name.toLowerCase().includes(searchLower) ||
        tool.subcategory.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        tool.keyFeatures?.some(feature => feature.toLowerCase().includes(searchLower))
      )
      .slice(0, 6);
  }, [tools, searchTerm]);

  // Featured tools selection
  const featuredTools = useMemo(() => {
    return tools
      .filter(tool => tool.rating && tool.rating.score >= 4.0)
      .sort((a, b) => (b.rating?.score || 0) - (a.rating?.score || 0))
      .slice(0, 8);
  }, [tools]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <HeroSection 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        searchResults={searchPreviewTools}
        stats={stats}
      />

      {/* Dynamic Statistics */}
      <StatsSection stats={stats} />

      {/* Category Showcase */}
      <CategoryShowcase tools={tools} />

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <FeaturedTools tools={featuredTools} />
      )}

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* STR Industry Glossary */}
      <Glossary />

      {/* Newsletter CTA */}
      <NewsletterCTA />

      {/* AI/SEO Content Section */}
      <section className="py-16 bg-white" id="about-str-technology">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Complete STR Technology Ecosystem
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What is STR Technology?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Short-term rental (STR) technology encompasses the comprehensive suite of digital tools, 
                    software platforms, and automation systems designed specifically for vacation rental 
                    management. From property management systems (PMS) to revenue optimization tools, 
                    these technologies enable hosts and property managers to streamline operations, 
                    maximize revenue, and deliver exceptional guest experiences.
                  </p>
                  <p className="text-gray-700">
                    The STR tech stack has evolved rapidly, with innovative solutions emerging across 
                    every aspect of rental management - from guest communication and dynamic pricing 
                    to smart home automation and data analytics.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Why STR Technology Matters
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Operational Efficiency:</strong> Automate repetitive tasks and streamline workflows</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Revenue Optimization:</strong> Dynamic pricing and yield management</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Guest Experience:</strong> Seamless communication and personalization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Scalability:</strong> Manage multiple properties efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Market Trends & Insights
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$8.1B</div>
                    <div className="text-sm text-gray-600">Global STR market size by 2028</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600">AI adoption increase in STR management</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                    <div className="text-sm text-gray-600">Specialized STR tools available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 bg-gray-50" id="str-technology-faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is the best property management system for STR?
                </h3>
                <p className="text-gray-700">
                  The best PMS depends on your specific needs. For solo hosts, tools like Hostfully or 
                  Hospitable offer great value. For larger operations, enterprise solutions like Guesty 
                  or OwnerRez provide advanced features and scalability. Consider factors like property 
                  count, budget, integration needs, and desired automation level.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How much can dynamic pricing tools increase revenue?
                </h3>
                <p className="text-gray-700">
                  Dynamic pricing tools like PriceLabs, Beyond Pricing, and Wheelhouse typically 
                  increase revenue by 10-30% through optimized pricing strategies. These tools analyze 
                  market demand, competitor pricing, and local events to automatically adjust rates 
                  for maximum profitability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What STR tools are essential for new hosts?
                </h3>
                <p className="text-gray-700">
                  Essential tools for new hosts include: a basic PMS (Hostfully, Lodgify), 
                  dynamic pricing (PriceLabs), guest communication (Smartbnb), cleaning coordination 
                  (TurnoverBnB), and smart locks (RemoteLock, August). Start with these core tools 
                  and expand your tech stack as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}