export interface Tool {
  id: string;
  name: string;
  subcategory: string;
  description: string;
  logoUrl: string;
  websiteUrl: string;
  tags: string[];
  region?: string;
  integrations?: string[];
  // Enhanced fields
  pricing?: {
    model: 'Free' | 'Freemium' | 'Paid' | 'Enterprise' | 'Contact';
    startingPrice?: string;
    currency?: string;
    billingCycle?: 'Monthly' | 'Yearly' | 'One-time' | 'Per booking';
  };
  companySize?: 'Solo Host' | 'Small Team' | 'Mid-size' | 'Enterprise' | 'All Sizes';
  targetMarket?: 'STR-only' | 'Cross-over' | 'Multi-industry';
  foundedYear?: number;
  rating?: {
    score: number;
    source: 'G2' | 'Capterra' | 'Internal';
    reviewCount?: number;
  };
  keyFeatures?: string[];
  useCases?: string[];
}

export interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Subcategory: string;
    Description: string;
    'Logo URL': string;
    'Website URL': string;
    Tags: string[];
    Region?: string;
    Integrations?: string[];
    // Enhanced fields
    'Pricing Model'?: string;
    'Starting Price'?: string;
    'Currency'?: string;
    'Billing Cycle'?: string;
    'Company Size'?: string;
    'Target Market'?: string;
    'Founded Year'?: number;
    'Rating Score'?: number;
    'Rating Source'?: string;
    'Review Count'?: number;
    'Key Features'?: string[];
    'Use Cases'?: string[];
  };
}

export const SUBCATEGORIES = [
  'Property Management System (PMS)',
  'Channel Manager',
  'Revenue Management',
  'Guest Communication',
  'Cleaning & Maintenance',
  'Smart Home & IoT',
  'Analytics & Reporting',
  'Guest Experience',
  'Accounting & Finance',
  'Marketing & SEO',
  'Legal & Compliance',
  'Insurance',
  'Other'
] as const;

export type Subcategory = typeof SUBCATEGORIES[number];

// Additional constants for enhanced filtering
export const PRICING_MODELS = [
  'Free',
  'Freemium', 
  'Paid',
  'Enterprise',
  'Contact'
] as const;

export const COMPANY_SIZES = [
  'Solo Host',
  'Small Team',
  'Mid-size', 
  'Enterprise',
  'All Sizes'
] as const;

export const TARGET_MARKETS = [
  'STR-only',
  'Cross-over',
  'Multi-industry'
] as const;

export const BILLING_CYCLES = [
  'Monthly',
  'Yearly', 
  'One-time',
  'Per booking'
] as const;

// Filter interfaces
export interface ToolFilters {
  subcategory: string;
  pricingModel: string;
  companySize: string;
  targetMarket: string;
  integrations: string[];
  minRating: number;
  searchTerm: string;
}

export interface ComparisonTool extends Tool {
  isSelected: boolean;
}