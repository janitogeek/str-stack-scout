'use client';

import { useState } from 'react';

const glossaryTerms = [
  {
    term: 'STR',
    definition: 'Short-Term Rental',
    description: 'Properties rented for short periods, typically less than 30 days, including vacation rentals, Airbnb properties, and temporary accommodations.'
  },
  {
    term: 'CM',
    definition: 'Channel Manager',
    description: 'Software that connects and synchronizes property listings across multiple booking platforms and OTAs, managing availability, rates, and reservations.'
  },
  {
    term: 'PMS',
    definition: 'Property Management Solution',
    description: 'Comprehensive software platform that manages all aspects of property operations including bookings, guest communication, housekeeping, and reporting.'
  },
  {
    term: 'RM',
    definition: 'Revenue Management Solution',
    description: 'Tools that optimize pricing strategies using dynamic pricing algorithms, market data analysis, and demand forecasting to maximize revenue.'
  },
  {
    term: 'Cross-Over',
    definition: 'Solutions servicing the Hotel and STR industry',
    description: 'Technology platforms that serve both traditional hospitality (hotels, B&Bs) and short-term rental markets with adaptable features for both sectors.'
  },
  {
    term: 'OTAs',
    definition: 'Online Travel Agency',
    description: 'Digital platforms like Airbnb, Booking.com, and Expedia where travelers can search, compare, and book accommodations online.'
  },
  {
    term: 'KYC',
    definition: 'Know Your Customer',
    description: 'Identity verification processes and guest screening procedures to ensure safety, compliance, and risk management for property owners.'
  }
];

interface GlossaryProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function Glossary({ isModal = false, onClose }: GlossaryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTerms = glossaryTerms.filter(
    item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const content = (
    <div className={`${isModal ? 'max-h-[70vh] overflow-y-auto' : ''}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900">
            STR Industry Glossary
          </h2>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close glossary"
            >
              ×
            </button>
          )}
        </div>
        <p className="text-gray-600 mb-6">
          Understanding key terms and acronyms in the short-term rental technology landscape.
        </p>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {filteredTerms.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {item.term}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.definition}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No terms found matching &quot;{searchTerm}&quot;</p>
        </div>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full p-8">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="glossary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}