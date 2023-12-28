// src/components/UserProfile/FavoritePapersSection.tsx
import React from 'react';

interface FavoritePapersSectionProps {
  favoritePapers: string[]; // assuming an array of paper names or titles
  paperCollections: string[]; // assuming an array of collection names or IDs
}

const FavoritePapersSection: React.FC<FavoritePapersSectionProps> = ({
  favoritePapers,
  paperCollections,
}) => {
  return (
    <div className="bg-white p-4 mt-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Favorite Papers</h2>

      {favoritePapers.length === 0 ? (
        <p>No favorite papers available.</p>
      ) : (
        <ul>
          {favoritePapers.map((paper, index) => (
            <li key={index} className="text-blue-500 cursor-pointer">
              {paper}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Paper Collections</h2>

        {paperCollections.length === 0 ? (
          <p>No paper collections available.</p>
        ) : (
          <ul>
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
