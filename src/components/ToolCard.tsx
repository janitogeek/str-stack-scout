import { Tool } from '@/types/tool';
import Image from 'next/image';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
  onCompare?: (tool: Tool) => void;
  isComparing?: boolean;
}

// Helper component for pricing display
function PricingBadge({ pricing }: { pricing: Tool['pricing'] }) {
  if (!pricing) return null;
  
  const getPricingDisplay = () => {
    if (pricing.model === 'Free') return 'Free';
    if (pricing.model === 'Contact') return 'Contact for pricing';
    if (pricing.startingPrice) {
      return `From ${pricing.startingPrice}`;
    }
    return pricing.model;
  };

  const getBadgeColor = () => {
    switch (pricing.model) {
      case 'Free': return 'bg-green-100 text-green-800';
      case 'Freemium': return 'bg-blue-100 text-blue-800';
      case 'Paid': return 'bg-purple-100 text-purple-800';
      case 'Enterprise': return 'bg-gray-100 text-gray-800';
      case 'Contact': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor()}`}>
      {getPricingDisplay()}
    </span>
  );
}

// Helper component for rating display
function RatingDisplay({ rating }: { rating: Tool['rating'] }) {
  if (!rating) return null;
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-3 h-3 ${i < Math.floor(rating.score) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-600">
        {rating.score} ({rating.reviewCount || 0})
      </span>
    </div>
  );
}

// Helper component for target market badge
function TargetMarketBadge({ targetMarket }: { targetMarket: Tool['targetMarket'] }) {
  if (!targetMarket) return null;
  
  const getBadgeColor = () => {
    switch (targetMarket) {
      case 'STR-only': return 'bg-indigo-100 text-indigo-800';
      case 'Cross-over': return 'bg-teal-100 text-teal-800';
      case 'Multi-industry': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor()}`}>
      {targetMarket}
    </span>
  );
}

export default function ToolCard({ tool, onCompare, isComparing = false }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="flex flex-col h-full">
        {/* Header with Logo, Name and Badges */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={tool.logoUrl}
              alt={`${tool.name} logo`}
              fill
              className="rounded-lg object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/64x64?text=${tool.name.charAt(0)}`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">
                {tool.name}
              </h3>
              <TargetMarketBadge targetMarket={tool.targetMarket} />
            </div>
            <p className="text-sm text-gray-600 truncate mb-2">
              {tool.subcategory}
            </p>
            <div className="flex items-center justify-between">
              <RatingDisplay rating={tool.rating} />
              <PricingBadge pricing={tool.pricing} />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-3">
          {tool.description}
        </p>

        {/* Key Features */}
        {tool.keyFeatures && tool.keyFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Key Features</h4>
            <div className="flex flex-wrap gap-1">
              {tool.keyFeatures.slice(0, 4).map((feature, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
              {tool.keyFeatures.length > 4 && (
                <span className="inline-block text-gray-500 text-xs px-2 py-1">
                  +{tool.keyFeatures.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="inline-block text-gray-500 text-xs px-2 py-1">
                +{tool.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Integrations */}
        {tool.integrations && tool.integrations.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">🔗 Integrates with:</span>
              <div className="flex flex-wrap gap-1">
                {tool.integrations.slice(0, 3).map((integration, index) => (
                  <span key={index} className="text-xs text-gray-600 font-medium">
                    {integration}
                  </span>
                ))}
                {tool.integrations.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{tool.integrations.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Footer with Region and Company Size */}
        <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
          {tool.region && (
            <span>📍 {tool.region}</span>
          )}
          {tool.companySize && (
            <span>👥 {tool.companySize}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-2">
          <Link
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Visit Website
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
          
          {onCompare && (
            <button
              onClick={() => onCompare(tool)}
              disabled={isComparing}
              className={`inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isComparing
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isComparing ? (
                <>
                  <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Added
                </>
              ) : (
                <>
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Compare
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}