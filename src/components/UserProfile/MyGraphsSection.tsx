// src/components/UserProfile/MyGraphsSection.tsx
import React from 'react';

interface MyGraphsSectionProps {
  recentlyMadeGraphs: string[]; // assuming an array of graph names or IDs
}

const MyGraphsSection: React.FC<MyGraphsSectionProps> = ({ recentlyMadeGraphs }) => {
  return (
    <div className="bg-white p-4 mt-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Graphs</h2>
      {recentlyMadeGraphs.length === 0 ? (
        <p>No graphs available.</p>
      ) : (
        <ul className="space-y-2">
          {recentlyMadeGraphs.map((graph, index) => (
            <li key={index} className="text-blue-500 cursor-pointer">
              {graph}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-col md:flex-row items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:mr-2">
          Create New Graph
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
          Share Graphs
        </button>
      </div>
    </div>
  );
};

export default MyGraphsSection;
