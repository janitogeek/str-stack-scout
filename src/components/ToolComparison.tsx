'use client';

import { useState } from 'react';
import { Tool, ComparisonTool } from '@/types/tool';
import Image from 'next/image';
import Link from 'next/link';

interface ToolComparisonProps {
  selectedTools: ComparisonTool[];
  removeFromComparison: (toolId: string) => void;
  clearComparison: () => void;
}

export default function ToolComparison({ 
  selectedTools, 
  removeFromComparison, 
  clearComparison 
}: ToolComparisonProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (selectedTools.length === 0) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm">Click &quot;Compare&quot; on tools to start comparing</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Floating comparison button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
        >
          <span>Compare ({selectedTools.length})</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Comparison Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Tool Comparison</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={clearComparison}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Comparison Content */}
            <div className="overflow-auto max-h-[calc(90vh-80px)]">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedTools.map((tool) => (
                    <div key={tool.id} className="border border-gray-200 rounded-lg p-4">
                      {/* Tool Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12">
                            <Image
                              src={tool.logoUrl}
                              alt={`${tool.name} logo`}
                              fill
                              className="rounded-lg object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/48x48?text=${tool.name.charAt(0)}`;
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                            <p className="text-sm text-gray-600">{tool.subcategory}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromComparison(tool.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Comparison Details */}
                      <div className="space-y-4">
                        {/* Pricing */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Pricing</h4>
                          {tool.pricing ? (
                            <div>
                              <span className="text-sm font-medium">{tool.pricing.model}</span>
                              {tool.pricing.startingPrice && (
                                <span className="text-sm text-gray-600 ml-2">
                                  from {tool.pricing.startingPrice}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">Not specified</span>
                          )}
                        </div>

                        {/* Target Market */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Focus</h4>
                          <span className="text-sm">{tool.targetMarket || 'Not specified'}</span>
                        </div>

                        {/* Company Size */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Best For</h4>
                          <span className="text-sm">{tool.companySize || 'Not specified'}</span>
                        </div>

                        {/* Rating */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Rating</h4>
                          {tool.rating ? (
                            <div className="flex items-center gap-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-3 h-3 ${i < Math.floor(tool.rating!.score) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-600">
                                {tool.rating.score} ({tool.rating.reviewCount || 0})
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">No rating</span>
                          )}
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Key Features</h4>
                          {tool.keyFeatures && tool.keyFeatures.length > 0 ? (
                            <ul className="text-xs space-y-1">
                              {tool.keyFeatures.slice(0, 4).map((feature, index) => (
                                <li key={index} className="flex items-start gap-1">
                                  <span className="text-green-600 mt-0.5">✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {tool.keyFeatures.length > 4 && (
                                <li className="text-gray-500">+{tool.keyFeatures.length - 4} more features</li>
                              )}
                            </ul>
                          ) : (
                            <span className="text-sm text-gray-400">Not specified</span>
                          )}
                        </div>

                        {/* Integrations */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Integrations</h4>
                          {tool.integrations && tool.integrations.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {tool.integrations.slice(0, 3).map((integration, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {integration}
                                </span>
                              ))}
                              {tool.integrations.length > 3 && (
                                <span className="text-xs text-gray-500">+{tool.integrations.length - 3} more</span>
                              )}
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">Not specified</span>
                          )}
                        </div>

                        {/* Website Link */}
                        <div className="pt-2">
                          <Link
                            href={tool.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Visit Website
                            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add more tools */}
                  {selectedTools.length < 3 && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <p className="text-gray-500 text-sm">
                          Add {3 - selectedTools.length} more tool{3 - selectedTools.length !== 1 ? 's' : ''} to compare
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Close this modal and click &quot;Compare&quot; on tools
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Hook to provide comparison functionality to other components
export function useToolComparison() {
  const [comparisonTools, setComparisonTools] = useState<ComparisonTool[]>([]);

  const addToComparison = (tool: Tool) => {
    if (comparisonTools.length < 3 && !comparisonTools.find(t => t.id === tool.id)) {
      setComparisonTools([...comparisonTools, { ...tool, isSelected: true }]);
    }
  };

  const removeFromComparison = (toolId: string) => {
    setComparisonTools(comparisonTools.filter(t => t.id !== toolId));
  };

  const clearComparison = () => {
    setComparisonTools([]);
  };

  return {
    comparisonTools,
    addToComparison,
    removeFromComparison,
    clearComparison
  };
}