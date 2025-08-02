'use client';

import { SUBCATEGORIES } from '@/types/tool';

interface ToolFilterProps {
  selectedSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
  toolsCount: number;
}

export default function ToolFilter({ 
  selectedSubcategory, 
  onSubcategoryChange, 
  toolsCount 
}: ToolFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <label htmlFor="subcategory" className="text-sm font-medium text-gray-700">
            Filter by Category:
          </label>
          <select
            id="subcategory"
            value={selectedSubcategory}
            onChange={(e) => onSubcategoryChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[200px]"
          >
            <option value="">All Categories</option>
            {SUBCATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="text-sm text-gray-600">
          Showing {toolsCount} tool{toolsCount !== 1 ? 's' : ''}
          {selectedSubcategory && (
            <span className="ml-1">
              in <span className="font-medium">{selectedSubcategory}</span>
            </span>
          )}
        </div>
      </div>

      {selectedSubcategory && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => onSubcategoryChange('')}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}