// src/components/UserProfile/FavoritePapersSection.tsx
import React from 'react';
//import csss file
import './FavoritePapersSection.css';

interface FavoritePapersSectionProps {
  favoritePapers: string[]; // assuming an array of paper names or titles
  paperCollections: string[]; // assuming an array of collection names or IDs
}

const FavoritePapersSection: React.FC<FavoritePapersSectionProps> = ({
  favoritePapers,
  paperCollections,
}) => {
  return (
    <div className="favorite-papers-section bg-white p-4 mt-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Favorite Papers</h2>

      {favoritePapers.length === 0 ? (
        <p className="text-gray-500">No favorite papers available.</p>
      ) : (
        <ul className="list-disc ml-6">
          {favoritePapers.map((paper, index) => (
            <li key={index} className="text-blue-500 cursor-pointer">
              {paper}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Paper Collections</h2>

        {paperCollections.length === 0 ? (
          <p className="text-gray-500">No paper collections available.</p>
        ) : (
          <ul className="list-disc ml-6">
            {paperCollections.map((collection, index) => (
              <li key={index} className="text-blue-500 cursor-pointer">
                {collection}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavoritePapersSection;
