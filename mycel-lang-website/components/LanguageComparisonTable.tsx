'use client';

import React, { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface ComparisonRowProps {
  feature: string;
  mycelCodeHtml: string;
  markdownCodeHtml: string;
  renderedOutput: string;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ 
  feature, 
  mycelCodeHtml, 
  markdownCodeHtml, 
  renderedOutput 
}) => (
  <tr className="border-b border-bedrock last:border-b-0">
    <td className="p-4 align-top font-semibold text-humus">{feature}</td>
    <td className="p-4 align-top" dangerouslySetInnerHTML={{ __html: mycelCodeHtml }} />
    <td className="p-4 align-top" dangerouslySetInnerHTML={{ __html: markdownCodeHtml }} />
    <td className="p-4 align-top whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: renderedOutput }} />
  </tr>
);

interface LanguageComparisonTableProps {
  rows: Omit<ComparisonRowProps, 'feature'>[];
  features: string[];
}

export const LanguageComparisonTable: React.FC<LanguageComparisonTableProps> = ({ rows, features }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const tableContent = (
    <div className={`relative rounded-lg border border-bedrock bg-substrate transition-all duration-300 ease-in-out flex flex-col ${isFullScreen ? 'w-full max-w-7xl h-full max-h-[90vh]' : ''}`}>
      <button
        onClick={toggleFullScreen}
        className="absolute top-2 right-2 p-2 rounded-full bg-crust hover:bg-bedrock text-humus transition-colors z-20"
        title={isFullScreen ? "Exit Fullscreen" : "View Fullscreen"}
      >
        {isFullScreen ? <Minimize className="size-5" /> : <Maximize className="size-5" />}
      </button>
      <div className={`overflow-auto ${isFullScreen ? 'flex-grow' : 'max-h-[60vh]'}`}>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-crust border-b border-bedrock sticky top-0 z-10">
              <th className="p-4 text-humus font-bold">Feature</th>
              <th className="p-4 text-humus font-bold">Mycel</th>
              <th className="p-4 text-humus font-bold">Markdown</th>
              <th className="p-4 text-humus font-bold">Rendered</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <ComparisonRow
                key={features[index]}
                feature={features[index]}
                {...row}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (isFullScreen) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-substrate/80 backdrop-blur-sm animate-in fade-in-50"
        onClick={toggleFullScreen}
      >
        <div onClick={(e) => e.stopPropagation()} className="animate-in zoom-in-95 duration-300">
          {tableContent}
        </div>
      </div>
    );
  }

  return tableContent;
};
