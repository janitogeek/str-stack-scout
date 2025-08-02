import Airtable from 'airtable';
import { Tool, AirtableRecord } from '@/types/tool';

// Configure Airtable
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY || 'placeholder_key'
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID || 'placeholder_base');
const table = base(process.env.AIRTABLE_TABLE_NAME || 'Tools');

// Helper function to transform Airtable record to Tool interface
function transformRecord(record: any): Tool {
  return {
    id: record.id,
    name: record.fields.Name || '',
    subcategory: record.fields.Subcategory || '',
    description: record.fields.Description || '',
    logoUrl: record.fields['Logo URL'] || '',
    websiteUrl: record.fields['Website URL'] || '',
    tags: record.fields.Tags || [],
    region: record.fields.Region,
    integrations: record.fields.Integrations || []
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
      tags: ['PMS', 'STR-only'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Booking.com']
    },
    {
      id: 'rec2',
      name: 'PriceLabs',
      subcategory: 'Revenue Management',
      description: 'Dynamic pricing and revenue management solution for short-term rentals with market-based pricing recommendations.',
      logoUrl: 'https://via.placeholder.com/120x120?text=PL',
      websiteUrl: 'https://pricelabs.co',
      tags: ['RM', 'STR-only'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Multiple PMS']
    },
    {
      id: 'rec3',
      name: 'Guesty',
      subcategory: 'Property Management System (PMS)',
      description: 'Professional property management platform for vacation rental managers and property management companies.',
      logoUrl: 'https://via.placeholder.com/120x120?text=GU',
      websiteUrl: 'https://guesty.com',
      tags: ['PMS', 'STR-only'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Booking.com', 'Expedia']
    },
    {
      id: 'rec4',
      name: 'ChannelManager.io',
      subcategory: 'Channel Manager',
      description: 'Multi-channel distribution platform connecting your property to 150+ booking channels worldwide.',
      logoUrl: 'https://via.placeholder.com/120x120?text=CM',
      websiteUrl: 'https://channelmanager.io',
      tags: ['CM', 'Cross-Over'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO', 'Booking.com', 'Hotels.com']
    },
    {
      id: 'rec5',
      name: 'Smartbnb',
      subcategory: 'Guest Communication',
      description: 'Automated messaging and guest communication platform for Airbnb and vacation rental hosts.',
      logoUrl: 'https://via.placeholder.com/120x120?text=SB',
      websiteUrl: 'https://smartbnb.io',
      tags: ['STR-only'],
      region: 'Global',
      integrations: ['Airbnb', 'VRBO']
    },
    {
      id: 'rec6',
      name: 'TurnoverBnB',
      subcategory: 'Cleaning & Maintenance',
      description: 'Cleaning and maintenance coordination platform specifically designed for vacation rental properties.',
      logoUrl: 'https://via.placeholder.com/120x120?text=TB',
      websiteUrl: 'https://turnoverbnb.com',
      tags: ['STR-only'],
      region: 'US',
      integrations: ['Airbnb', 'VRBO', 'Major PMS platforms']
    }
  ];
}