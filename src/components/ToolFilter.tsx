'use client';

import { useState } from 'react';
import { SUBCATEGORIES, PRICING_MODELS, COMPANY_SIZES, TARGET_MARKETS, ToolFilters } from '@/types/tool';

interface ToolFilterProps {
  filters: ToolFilters;
  onFiltersChange: (filters: ToolFilters) => void;
  toolsCount: number;
  allIntegrations: string[];
}

export default function ToolFilter({ 
  filters, 
  onFiltersChange, 
  toolsCount,
  allIntegrations
}: ToolFilterProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateFilters = (key: keyof ToolFilters, value: string | string[] | number) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      subcategory: '',
      pricingModel: '',
      companySize: '',
      targetMarket: '',
      integrations: [],
      minRating: 0,
      searchTerm: ''
    });
  };

  const hasActiveFilters = filters.subcategory || filters.pricingModel || filters.companySize || 
    filters.targetMarket || filters.integrations.length > 0 || filters.minRating > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
      {/* Basic Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="subcategory" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Category:
            </label>
            <select
              id="subcategory"
              value={filters.subcategory}
              onChange={(e) => updateFilters('subcategory', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[180px]"
            >
              <option value="">All Categories</option>
              {SUBCATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Pricing Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="pricing" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Pricing:
            </label>
            <select
              id="pricing"
              value={filters.pricingModel}
              onChange={(e) => updateFilters('pricingModel', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
            >
              <option value="">All Pricing</option>
              {PRICING_MODELS.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Target Market Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="target" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Focus:
            </label>
            <select
              id="target"
              value={filters.targetMarket}
              onChange={(e) => updateFilters('targetMarket', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
            >
              <option value="">All Focus</option>
              {TARGET_MARKETS.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            Advanced Filters
            <svg 
              className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className="text-sm text-gray-600">
            Showing {toolsCount} tool{toolsCount !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="border-t border-gray-200 pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Company Size Filter */}
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                Company Size
              </label>
              <select
                id="companySize"
                value={filters.companySize}
                onChange={(e) => updateFilters('companySize', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Sizes</option>
                {COMPANY_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Rating
              </label>
              <select
                id="rating"
                value={filters.minRating}
                onChange={(e) => updateFilters('minRating', Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={0}>Any Rating</option>
                <option value={3}>3+ Stars</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
              </select>
            </div>

            {/* Integration Filter */}
            <div>
              <label htmlFor="integrations" className="block text-sm font-medium text-gray-700 mb-2">
                Must Integrate With
              </label>
              <select
                id="integrations"
                value=""
                onChange={(e) => {
                  const integration = e.target.value;
                  if (integration && !filters.integrations.includes(integration)) {
                    updateFilters('integrations', [...filters.integrations, integration]);
                  }
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select integration...</option>
                {allIntegrations.map((integration) => (
                  <option key={integration} value={integration}>
                    {integration}
                  </option>
                ))}
              </select>
              
              {/* Selected Integrations */}
              {filters.integrations.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {filters.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {integration}
                      <button
                        onClick={() => updateFilters('integrations', filters.integrations.filter(i => i !== integration))}
                        className="hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}