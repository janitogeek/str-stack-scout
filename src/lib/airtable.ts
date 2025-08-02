import Airtable from 'airtable';
import { Tool } from '@/types/tool';
import strProviders from '@/data/strProviders';
import { convertProviderToTool } from '@/utils/dataImport';

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

// Mock data for development and testing - now includes comprehensive STR provider database
function getMockTools(): Tool[] {
  // Convert all STR providers to Tool format
  const comprehensiveTools = strProviders.map((provider, index) => 
    convertProviderToTool(provider, `str_${index + 1}`)
  );

  // Add some enhanced details to major providers
  const enhancedTools = comprehensiveTools.map(tool => {
    // Add realistic pricing, ratings, and enhanced details for major providers
    if (tool.name === 'Hostfully') {
      return {
        ...tool,
        foundedYear: 2012,
        rating: { score: 4.5, source: 'G2' as const, reviewCount: 234 },
        pricing: { model: 'Paid' as const, startingPrice: '$49', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }
    if (tool.name === 'PriceLabs') {
      return {
        ...tool,
        foundedYear: 2014,
        rating: { score: 4.3, source: 'Capterra' as const, reviewCount: 456 },
        pricing: { model: 'Freemium' as const, startingPrice: '$19.99', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }
    if (tool.name === 'Guesty') {
      return {
        ...tool,
        foundedYear: 2013,
        rating: { score: 4.2, source: 'G2' as const, reviewCount: 678 },
        pricing: { model: 'Enterprise' as const, startingPrice: 'Contact', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }
    if (tool.name === 'AirDNA') {
      return {
        ...tool,
        foundedYear: 2015,
        rating: { score: 4.4, source: 'G2' as const, reviewCount: 312 },
        pricing: { model: 'Paid' as const, startingPrice: '$99', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }
    if (tool.name === 'Beyond Pricing') {
      return {
        ...tool,
        foundedYear: 2013,
        rating: { score: 4.1, source: 'Capterra' as const, reviewCount: 189 },
        pricing: { model: 'Paid' as const, startingPrice: '$10', currency: 'USD', billingCycle: 'Per booking' as const }
      };
    }
    if (tool.name === 'Smartbnb') {
      return {
        ...tool,
        foundedYear: 2016,
        rating: { score: 4.4, source: 'G2' as const, reviewCount: 123 },
        pricing: { model: 'Freemium' as const, startingPrice: '$19', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }
    if (tool.name === 'TurnoverBnB') {
      return {
        ...tool,
        foundedYear: 2017,
        rating: { score: 4.6, source: 'Internal' as const, reviewCount: 89 },
        pricing: { model: 'Paid' as const, startingPrice: '$25', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }
    if (tool.name === 'RemoteLock') {
      return {
        ...tool,
        foundedYear: 2017,
        rating: { score: 4.3, source: 'G2' as const, reviewCount: 156 },
        pricing: { model: 'Paid' as const, startingPrice: '$19', currency: 'USD', billingCycle: 'Monthly' as const }
      };
    }

    // Add basic ratings for other tools
    const randomRating = 3.8 + Math.random() * 1.2; // Random rating between 3.8 and 5.0
    const randomReviews = Math.floor(Math.random() * 300) + 50; // Random reviews between 50-350
    const ratingSources = ['G2', 'Capterra', 'Internal'] as const;
    const randomSource = ratingSources[Math.floor(Math.random() * ratingSources.length)];

    return {
      ...tool,
      rating: {
        score: Math.round(randomRating * 10) / 10,
        source: randomSource,
        reviewCount: randomReviews
      }
    };
  });

  return enhancedTools;
}