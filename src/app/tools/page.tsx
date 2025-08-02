'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tool } from '@/types/tool';
import { getAllTools } from '@/lib/airtable';
import ToolFilter from '@/components/ToolFilter';
import ToolGrid from '@/components/ToolGrid';
import SearchBar from '@/components/SearchBar';

export default function ToolsPage() {
  const searchParams = useSearchParams();
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Set initial category from URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedSubcategory(decodeURIComponent(category));
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchTools() {
      try {
        const toolsData = await getAllTools();
        setTools(toolsData);
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTools();
  }, []);

  // Filter and search tools
  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by subcategory
    if (selectedSubcategory) {
      filtered = filtered.filter(tool => tool.subcategory === selectedSubcategory);
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchLower) ||
        tool.subcategory.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [tools, selectedSubcategory, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-20 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            STR Tech Tools Directory
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Discover the best technology tools for your short-term rental business. 
            Filter by category and search to find exactly what you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search by tool name, category, or description..."
          />
        </div>

        {/* Filter */}
        <ToolFilter
          selectedSubcategory={selectedSubcategory}
          onSubcategoryChange={setSelectedSubcategory}
          toolsCount={filteredTools.length}
        />

        {/* Tools Grid */}
        <ToolGrid tools={filteredTools} />
      </div>
    </div>
  );
}