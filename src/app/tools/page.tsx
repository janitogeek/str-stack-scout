'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tool, ToolFilters } from '@/types/tool';
import { getAllTools } from '@/lib/airtable';
import ToolFilter from '@/components/ToolFilter';
import ToolGrid from '@/components/ToolGrid';
import SearchBar from '@/components/SearchBar';
import ToolComparison, { useToolComparison } from '@/components/ToolComparison';

function ToolsContent() {
  const searchParams = useSearchParams();
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Enhanced filters state
  const [filters, setFilters] = useState<ToolFilters>({
    subcategory: '',
    pricingModel: '',
    companySize: '',
    targetMarket: '',
    integrations: [],
    minRating: 0,
    searchTerm: ''
  });

  // Comparison functionality
  const { comparisonTools, addToComparison, removeFromComparison, clearComparison } = useToolComparison();

  // Set initial category from URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        subcategory: decodeURIComponent(category)
      }));
    }
  }, [searchParams]);

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

  // Get all unique integrations for filter dropdown
  const allIntegrations = useMemo(() => {
    const integrations = new Set<string>();
    tools.forEach(tool => {
      tool.integrations?.forEach(integration => integrations.add(integration));
    });
    return Array.from(integrations).sort();
  }, [tools]);

  // Enhanced filter and search logic
  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by subcategory
    if (filters.subcategory) {
      filtered = filtered.filter(tool => tool.subcategory === filters.subcategory);
    }

    // Filter by pricing model
    if (filters.pricingModel) {
      filtered = filtered.filter(tool => tool.pricing?.model === filters.pricingModel);
    }

    // Filter by company size
    if (filters.companySize) {
      filtered = filtered.filter(tool => 
        tool.companySize === filters.companySize || tool.companySize === 'All Sizes'
      );
    }

    // Filter by target market
    if (filters.targetMarket) {
      filtered = filtered.filter(tool => tool.targetMarket === filters.targetMarket);
    }

    // Filter by integrations
    if (filters.integrations.length > 0) {
      filtered = filtered.filter(tool =>
        filters.integrations.every(integration =>
          tool.integrations?.includes(integration)
        )
      );
    }

    // Filter by minimum rating
    if (filters.minRating > 0) {
      filtered = filtered.filter(tool =>
        tool.rating && tool.rating.score >= filters.minRating
      );
    }

    // Filter by search term with enhanced matching
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      
      // Define category aliases for better matching
      const categoryAliases: { [key: string]: string[] } = {
        'property management system (pms)': ['pms', 'property management', 'property management system'],
        'channel manager': ['cm', 'channel management', 'distribution'],
        'revenue management': ['rm', 'revenue optimization', 'dynamic pricing', 'pricing'],
        'smart home & iot': ['iot', 'smart home', 'automation', 'smart locks'],
        'guest communication': ['communication', 'messaging', 'guest experience'],
        'cleaning & maintenance': ['cleaning', 'maintenance', 'housekeeping', 'turnover'],
        'analytics & reporting': ['analytics', 'reporting', 'data', 'insights'],
        'accounting & finance': ['accounting', 'finance', 'payments', 'financial'],
        'marketing & seo': ['marketing', 'seo', 'website', 'digital marketing'],
        'insurance': ['protection', 'coverage'],
        'guest experience': ['experience', 'concierge', 'services']
      };

      filtered = filtered.filter(tool => {
        // Standard field matching
        const standardMatch = 
          tool.name.toLowerCase().includes(searchLower) ||
          tool.subcategory.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          tool.keyFeatures?.some(feature => feature.toLowerCase().includes(searchLower)) ||
          tool.useCases?.some(useCase => useCase.toLowerCase().includes(searchLower));

        // Enhanced category matching using aliases
        const categoryKey = tool.subcategory.toLowerCase();
        const aliases = categoryAliases[categoryKey] || [];
        const aliasMatch = aliases.some(alias => 
          alias.includes(searchLower) || searchLower.includes(alias)
        );

        return standardMatch || aliasMatch;
      });
    }

    return filtered;
  }, [tools, filters, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-20 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            STR Tech Tools Directory
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Discover the best technology tools for your short-term rental business. 
            Filter by category and search to find exactly what you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search by tool name, category, or description..."
          />
        </div>

        {/* Enhanced Filter */}
        <ToolFilter
          filters={filters}
          onFiltersChange={setFilters}
          toolsCount={filteredTools.length}
          allIntegrations={allIntegrations}
        />

        {/* Tools Grid */}
        <ToolGrid 
          tools={filteredTools} 
          onCompare={addToComparison}
          comparedToolIds={comparisonTools.map(tool => tool.id)}
        />

        {/* Tool Comparison */}
        <ToolComparison 
          selectedTools={comparisonTools}
          removeFromComparison={removeFromComparison}
          clearComparison={clearComparison}
        />
      </div>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-20 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <ToolsContent />
    </Suspense>
  );
}