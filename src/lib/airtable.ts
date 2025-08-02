import Airtable from 'airtable';
import { Tool } from '@/types/tool';

// Configure Airtable
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY || 'placeholder_key'
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID || 'placeholder_base');
const table = base(process.env.AIRTABLE_TABLE_NAME || 'Tools');

// Helper function to transform Airtable record to Tool interface
// Using any here to work with Airtable's type constraints
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformRecord(record: Airtable.Record<any>): Tool {
  const pricing = record.fields['Pricing Model'] ? {
    model: record.fields['Pricing Model'] as 'Free' | 'Freemium' | 'Paid' | 'Enterprise' | 'Contact',
    startingPrice: record.fields['Starting Price'],
    currency: record.fields['Currency'] || 'USD',
    billingCycle: record.fields['Billing Cycle'] as 'Monthly' | 'Yearly' | 'One-time' | 'Per booking'
  } : undefined;

  const rating = record.fields['Rating Score'] ? {
    score: record.fields['Rating Score'],
    source: (record.fields['Rating Source'] || 'Internal') as 'G2' | 'Capterra' | 'Internal',
    reviewCount: record.fields['Review Count']
  } : undefined;

  return {
    id: record.id,
    name: record.fields.Name || '',
    subcategory: record.fields.Subcategory || '',
    description: record.fields.Description || '',
    logoUrl: record.fields['Logo URL'] || '',
    websiteUrl: record.fields['Website URL'] || '',
    tags: record.fields.Tags || [],
    region: record.fields.Region,
    integrations: record.fields.Integrations || [],
    // Enhanced fields
    pricing,
    companySize: record.fields['Company Size'] as 'Solo Host' | 'Small Team' | 'Mid-size' | 'Enterprise' | 'All Sizes',
    targetMarket: record.fields['Target Market'] as 'STR-only' | 'Cross-over' | 'Multi-industry',
    foundedYear: record.fields['Founded Year'],
    rating,
    keyFeatures: record.fields['Key Features'] || [],
    useCases: record.fields['Use Cases'] || []
  };
}

// Fetch all tools from Airtable
export async function getAllTools(): Promise<Tool[]> {
  try {
    const records = await table.select({
      // You can add filtering, sorting, etc. here
      sort: [{ field: 'Name', direction: 'asc' }]
    }).all();

    return records.map(transformRecord);
  } catch (error) {
    console.error('Error fetching tools from Airtable:', error);
    // Return mock data for development
    return getMockTools();
  }
}

// Get tools by subcategory
export async function getToolsBySubcategory(subcategory: string): Promise<Tool[]> {
  try {
    const records = await table.select({
      filterByFormula: `{Subcategory} = '${subcategory}'`,
      sort: [{ field: 'Name', direction: 'asc' }]
    }).all();

    return records.map(transformRecord);
  } catch (error) {
    console.error('Error fetching tools by subcategory:', error);
    return getMockTools().filter(tool => tool.subcategory === subcategory);
  }
}

// Mock data for development and testing
function getMockTools(): Tool[] {
  return [
    {
      id: 'rec1',
      name: 'Hostfully',
      subcategory: 'Property Management System (PMS)',
      description: 'All-in-one property management solution for vacation rentals with booking management, guest communication, and operations tools.',
      logoUrl: 'https://via.placeholder.com/120x120?text=HF',
      websiteUrl: 'https://hostfully.com',
      tags: ['PMS', 'STR-only', 'Automation', 'Multi-channel'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Booking.com'],
      pricing: {
        model: 'Paid',
        startingPrice: '$49',
        currency: 'USD',
        billingCycle: 'Monthly'
      },
      companySize: 'All Sizes',
      targetMarket: 'STR-only',
      foundedYear: 2012,
      rating: {
        score: 4.5,
        source: 'G2',
        reviewCount: 234
      },
      keyFeatures: ['Property Management', 'Guest Communication', 'Channel Management', 'Reporting'],
      useCases: ['Vacation Rental Management', 'Multi-property Operations', 'Guest Experience']
    },
    {
      id: 'rec2',
      name: 'PriceLabs',
      subcategory: 'Revenue Management',
      description: 'Dynamic pricing and revenue management solution for short-term rentals with market-based pricing recommendations.',
      logoUrl: 'https://via.placeholder.com/120x120?text=PL',
      websiteUrl: 'https://pricelabs.co',
      tags: ['Revenue Management', 'Dynamic Pricing', 'STR-only'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Multiple PMS'],
      pricing: {
        model: 'Freemium',
        startingPrice: '$19.99',
        currency: 'USD',
        billingCycle: 'Monthly'
      },
      companySize: 'Small Team',
      targetMarket: 'STR-only',
      foundedYear: 2014,
      rating: {
        score: 4.3,
        source: 'Capterra',
        reviewCount: 456
      },
      keyFeatures: ['Dynamic Pricing', 'Market Analysis', 'Revenue Optimization', 'Multi-calendar Sync'],
      useCases: ['Revenue Optimization', 'Competitive Pricing', 'Seasonal Adjustments']
    },
    {
      id: 'rec3',
      name: 'Guesty',
      subcategory: 'Property Management System (PMS)',
      description: 'Professional property management platform for vacation rental managers and property management companies.',
      logoUrl: 'https://via.placeholder.com/120x120?text=GU',
      websiteUrl: 'https://guesty.com',
      tags: ['PMS', 'Enterprise', 'Multi-channel'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Booking.com', 'Expedia'],
      pricing: {
        model: 'Enterprise',
        startingPrice: 'Contact',
        currency: 'USD',
        billingCycle: 'Monthly'
      },
      companySize: 'Enterprise',
      targetMarket: 'STR-only',
      foundedYear: 2013,
      rating: {
        score: 4.2,
        source: 'G2',
        reviewCount: 678
      },
      keyFeatures: ['Multi-property Management', 'Team Collaboration', 'Advanced Reporting', 'API Integration'],
      useCases: ['Property Management Companies', 'Large-scale Operations', 'Multi-team Coordination']
    },
    {
      id: 'rec4',
      name: 'ChannelManager.io',
      subcategory: 'Channel Manager',
      description: 'Multi-channel distribution platform connecting your property to 150+ booking channels worldwide.',
      logoUrl: 'https://via.placeholder.com/120x120?text=CM',
      websiteUrl: 'https://channelmanager.io',
      tags: ['Channel Management', 'Distribution', 'Cross-over'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Booking.com', 'Hotels.com'],
      pricing: {
        model: 'Paid',
        startingPrice: '$39',
        currency: 'USD',
        billingCycle: 'Monthly'
      },
      companySize: 'Mid-size',
      targetMarket: 'Cross-over',
      foundedYear: 2015,
      rating: {
        score: 4.1,
        source: 'Capterra',
        reviewCount: 189
      },
      keyFeatures: ['150+ Channels', 'Real-time Sync', 'Inventory Management', 'Rate Management'],
      useCases: ['Multi-channel Distribution', 'Hotel Management', 'Vacation Rental Distribution']
    },
    {
      id: 'rec5',
      name: 'Smartbnb',
      subcategory: 'Guest Communication',
      description: 'Automated messaging and guest communication platform for Airbnb and vacation rental hosts.',
      logoUrl: 'https://via.placeholder.com/120x120?text=SB',
      websiteUrl: 'https://smartbnb.io',
      tags: ['Guest Communication', 'Automation', 'STR-only'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO'],
      pricing: {
        model: 'Freemium',
        startingPrice: '$19',
        currency: 'USD',
        billingCycle: 'Monthly'
      },
      companySize: 'Solo Host',
      targetMarket: 'STR-only',
      foundedYear: 2016,
      rating: {
        score: 4.4,
        source: 'G2',
        reviewCount: 123
      },
      keyFeatures: ['Automated Messaging', 'Guest Screening', 'Review Management', 'Multi-language Support'],
      useCases: ['Guest Communication', 'Review Management', 'Check-in Automation']
    },
    {
      id: 'rec6',
      name: 'TurnoverBnB',
      subcategory: 'Cleaning & Maintenance',
      description: 'Cleaning and maintenance coordination platform specifically designed for vacation rental properties.',
      logoUrl: 'https://via.placeholder.com/120x120?text=TB',
      websiteUrl: 'https://turnoverbnb.com',
      tags: ['Cleaning', 'Maintenance', 'Operations'],
      region: 'US',
      integrations: ['Airbnb', 'VRBO', 'Major PMS platforms'],
      pricing: {
        model: 'Paid',
        startingPrice: '$25',
        currency: 'USD',
        billingCycle: 'Monthly'
      },
      companySize: 'Small Team',
      targetMarket: 'STR-only',
      foundedYear: 2017,
      rating: {
        score: 4.6,
        source: 'Internal',
        reviewCount: 89
      },
      keyFeatures: ['Cleaning Coordination', 'Maintenance Tracking', 'Vendor Management', 'Photo Verification'],
      useCases: ['Cleaning Management', 'Maintenance Coordination', 'Property Inspections']
    }
  ];
}