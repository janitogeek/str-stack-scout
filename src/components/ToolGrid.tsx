import { Tool } from '@/types/tool';
import ToolCard from './ToolCard';

interface ToolGridProps {
  tools: Tool[];
  onCompare?: (tool: Tool) => void;
  comparedToolIds?: string[];
}

export default function ToolGrid({ tools, onCompare, comparedToolIds = [] }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No tools found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filter or check back later for new tools.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <ToolCard 
          key={tool.id} 
          tool={tool} 
          onCompare={onCompare}
          isComparing={comparedToolIds.includes(tool.id)}
        />
      ))}
    </div>
  );
}