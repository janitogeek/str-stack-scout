'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Tool } from '@/types/tool';
import { getAllTools } from '@/lib/airtable';
import Image from 'next/image';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export default function ToolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [tool, setTool] = useState<Tool | null>(null);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchToolData() {
      try {
        const tools = await getAllTools();
        const toolId = params.id as string;
        
        // Find the specific tool
        const foundTool = tools.find(t => t.id === toolId);
        if (!foundTool) {
          router.push('/tools');
          return;
        }
        
        setTool(foundTool);
        
        // Find related tools (same category, excluding current tool)
        const related = tools
          .filter(t => t.subcategory === foundTool.subcategory && t.id !== foundTool.id)
          .slice(0, 4);
        setRelatedTools(related);
        
      } catch (error) {
        console.error('Error fetching tool data:', error);
        router.push('/tools');
      } finally {
        setLoading(false);
      }
    }

    fetchToolData();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!tool) {
    return null;
  }



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/tools" className="text-blue-600 hover:text-blue-800">
              Tools
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tool Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Logo and Basic Info */}
            <div className="flex items-start gap-6">
              <OptimizedImage
                src={tool.logoUrl}
                alt={`${tool.name} logo`}
                width={96}
                height={96}
                className="w-24 h-24 rounded-xl flex-shrink-0"
                fallbackText={tool.name}
                priority
                sizes="96px"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {tool.name}
                    </h1>
                    <p className="text-lg text-blue-600 font-medium mb-2">
                      {tool.subcategory}
                    </p>
                    {tool.rating && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < Math.floor(tool.rating!.score) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {tool.rating.score} ({tool.rating.reviewCount || 0} reviews)
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-col gap-2">
                    {tool.targetMarket && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tool.targetMarket === 'STR-only' 
                          ? 'bg-blue-100 text-blue-800'
                          : tool.targetMarket === 'Cross-over'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tool.targetMarket}
                      </span>
                    )}
                    
                    {tool.pricing && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tool.pricing.model === 'Free' 
                          ? 'bg-green-100 text-green-800'
                          : tool.pricing.model === 'Freemium'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {tool.pricing.model}
                        {tool.pricing.startingPrice && ` from ${tool.pricing.startingPrice}`}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {tool.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={tool.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  
                  <button
                    onClick={() => router.back()}
                    className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Tools
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Features */}
            {tool.keyFeatures && tool.keyFeatures.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {tool.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases */}
            {tool.useCases && tool.useCases.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
                <div className="space-y-3">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Integrations */}
            {tool.integrations && tool.integrations.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Integrations</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
              <div className="space-y-3">
                {tool.foundedYear && (
                  <div>
                    <span className="text-sm text-gray-500">Founded</span>
                    <p className="text-gray-900 font-medium">{tool.foundedYear}</p>
                  </div>
                )}
                
                {tool.companySize && (
                  <div>
                    <span className="text-sm text-gray-500">Company Size</span>
                    <p className="text-gray-900 font-medium">{tool.companySize}</p>
                  </div>
                )}
                
                {tool.region && (
                  <div>
                    <span className="text-sm text-gray-500">Region</span>
                    <p className="text-gray-900 font-medium">{tool.region}</p>
                  </div>
                )}
                
                {tool.pricing && (
                  <div>
                    <span className="text-sm text-gray-500">Pricing Model</span>
                    <p className="text-gray-900 font-medium">
                      {tool.pricing.model}
                      {tool.pricing.startingPrice && (
                        <span className="text-gray-600"> from {tool.pricing.startingPrice}</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            {tool.tags && tool.tags.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-50 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Tools in {tool.subcategory}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.id}`}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={relatedTool.logoUrl}
                        alt={`${relatedTool.name} logo`}
                        fill
                        className="rounded object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/40x40?text=${relatedTool.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {relatedTool.name}
                      </h3>
                      {relatedTool.rating && (
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs text-gray-600">{relatedTool.rating.score}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {relatedTool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}