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