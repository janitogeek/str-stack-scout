import { Tool } from '@/types/tool';

// Utility functions for bulk importing STR provider data

export interface ProviderData {
  name: string;
  category: string;
  description?: string;
  website?: string;
  tags?: string[];
  region?: string;
  integrations?: string[];
  pricing?: {
    model: string;
    startingPrice?: string;
  };
  targetMarket?: string;
  companySize?: string;
}

// Function to convert provider data to Tool format
export function convertProviderToTool(provider: ProviderData, id?: string): Tool {
  // Generate a URL-safe ID if not provided
  const toolId = id || `tool_${provider.name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .substring(0, 50)}`; // Limit length
  
  // Map categories to our standardized subcategories
  const categoryMapping: Record<string, string> = {
    'PMS': 'Property Management System (PMS)',
    'Property Management': 'Property Management System (PMS)',
    'Revenue Management': 'Revenue Management',
    'Dynamic Pricing': 'Revenue Management',
    'Channel Manager': 'Channel Manager',
    'Distribution': 'Channel Manager',
    'Guest Communication': 'Guest Communication',
    'Messaging': 'Guest Communication',
    'Cleaning': 'Cleaning & Maintenance',
    'Maintenance': 'Cleaning & Maintenance',
    'Smart Home': 'Smart Home & IoT',
    'IoT': 'Smart Home & IoT',
    'Analytics': 'Analytics & Reporting',
    'Reporting': 'Analytics & Reporting',
    'Guest Experience': 'Guest Experience',
    'Concierge': 'Guest Experience',
    'Accounting': 'Accounting & Finance',
    'Finance': 'Accounting & Finance',
    'Marketing': 'Marketing & SEO',
    'SEO': 'Marketing & SEO',
    'Legal': 'Legal & Compliance',
    'Compliance': 'Legal & Compliance',
    'Insurance': 'Insurance'
  };

  const subcategory = categoryMapping[provider.category] || 'Other';

  // Generate a placeholder logo URL
  const logoUrl = `https://via.placeholder.com/120x120?text=${provider.name.charAt(0).toUpperCase()}`;

  // Determine target market based on tags or category
  let targetMarket: 'STR-only' | 'Cross-over' | 'Multi-industry' = 'STR-only';
  if (provider.tags?.some(tag => tag.toLowerCase().includes('hotel') || tag.toLowerCase().includes('cross'))) {
    targetMarket = 'Cross-over';
  }
  if (provider.tags?.some(tag => tag.toLowerCase().includes('multi') || tag.toLowerCase().includes('enterprise'))) {
    targetMarket = 'Multi-industry';
  }

  // Determine company size based on pricing or tags
  let companySize: 'Solo Host' | 'Small Team' | 'Mid-size' | 'Enterprise' | 'All Sizes' = 'All Sizes';
  if (provider.pricing?.model === 'Free' || provider.tags?.includes('Solo Host')) {
    companySize = 'Solo Host';
  } else if (provider.pricing?.model === 'Enterprise') {
    companySize = 'Enterprise';
  }

  return {
    id: toolId,
    name: provider.name,
    subcategory,
    description: provider.description || `${provider.name} - ${subcategory} solution for short-term rentals`,
    logoUrl,
    websiteUrl: provider.website || `https://${provider.name.toLowerCase().replace(/\s+/g, '')}.com`,
    tags: provider.tags || [subcategory.split(' ')[0], targetMarket],
    region: provider.region || 'Global',
    integrations: provider.integrations || ['Airbnb', 'VRBO'],
    pricing: provider.pricing ? {
      model: provider.pricing.model as 'Free' | 'Freemium' | 'Paid' | 'Enterprise' | 'Contact',
      startingPrice: provider.pricing.startingPrice,
      currency: 'USD',
      billingCycle: 'Monthly' as 'Monthly' | 'Yearly' | 'One-time' | 'Per booking'
    } : undefined,
    companySize,
    targetMarket,
    keyFeatures: generateKeyFeatures(subcategory),
    useCases: generateUseCases(subcategory)
  };
}

// Generate relevant key features based on category
function generateKeyFeatures(subcategory: string): string[] {
  const featureMap: Record<string, string[]> = {
    'Property Management System (PMS)': [
      'Property Management',
      'Booking Management', 
      'Guest Communication',
      'Channel Distribution',
      'Reporting Dashboard'
    ],
    'Revenue Management': [
      'Dynamic Pricing',
      'Market Analysis',
      'Revenue Optimization',
      'Competitive Intelligence'
    ],
    'Channel Manager': [
      'Multi-channel Distribution',
      'Inventory Sync',
      'Rate Management',
      'Booking Consolidation'
    ],
    'Guest Communication': [
      'Automated Messaging',
      'Guest Screening',
      'Review Management',
      'Multi-language Support'
    ],
    'Cleaning & Maintenance': [
      'Cleaning Coordination',
      'Maintenance Tracking',
      'Vendor Management',
      'Quality Control'
    ],
    'Smart Home & IoT': [
      'Smart Lock Integration',
      'Energy Management',
      'Security Monitoring',
      'Guest Access Control'
    ]
  };

  return featureMap[subcategory] || ['Professional Service', 'Customer Support', 'Integration Ready'];
}

// Generate relevant use cases based on category
function generateUseCases(subcategory: string): string[] {
  const useCaseMap: Record<string, string[]> = {
    'Property Management System (PMS)': [
      'Multi-property Management',
      'Guest Experience Optimization',
      'Operational Efficiency'
    ],
    'Revenue Management': [
      'Revenue Optimization',
      'Competitive Pricing',
      'Seasonal Adjustments'
    ],
    'Channel Manager': [
      'Multi-channel Distribution',
      'Inventory Management',
      'Market Reach Expansion'
    ]
  };

  return useCaseMap[subcategory] || ['Business Growth', 'Operational Efficiency', 'Guest Satisfaction'];
}

// Batch import function
export function batchImportProviders(providers: ProviderData[]): Tool[] {
  return providers.map((provider, index) => 
    convertProviderToTool(provider, `imported_${index + 1}`)
  );
}

// Function to merge with existing tools
export function mergeWithExistingTools(existingTools: Tool[], newTools: Tool[]): Tool[] {
  const existingNames = new Set(existingTools.map(tool => tool.name.toLowerCase()));
  const uniqueNewTools = newTools.filter(tool => !existingNames.has(tool.name.toLowerCase()));
  
  return [...existingTools, ...uniqueNewTools];
}