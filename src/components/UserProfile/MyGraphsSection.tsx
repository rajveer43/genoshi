// src/components/UserProfile/MyGraphsSection.tsx
import React from 'react';
import './MyGraphsSection.css';

interface MyGraphsSectionProps {
  recentlyMadeGraphs: string[]; // assuming an array of graph names or IDs
}

const MyGraphsSection: React.FC<MyGraphsSectionProps> = ({ recentlyMadeGraphs }) => {
  return (
    <div className="my-graphs-section bg-white p-4 mt-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Graphs</h2>
      {recentlyMadeGraphs.length === 0 ? (
        <p>No graphs available.</p>
      ) : (
        <ul className="my-graphs-list space-y-2">
          {recentlyMadeGraphs.map((graph, index) => (
            <li key={index} className="my-graphs-list-item text-blue-500 cursor-pointer">
              {graph}
            </li>
          ))}
        </ul>
      )}

      <div className="button-container mt-4 flex flex-col md:flex-row items-center">
        <button className="create-graph-button bg-blue-500 text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:mr-2">
          Create New Graph
        </button>
        <button className="share-graphs-button bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
          Share Graphs
        </button>
      </div>
    </div>
  );
};

export default MyGraphsSection;
