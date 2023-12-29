// src/pages/ProfileDashboard/ProfileDashboard.tsx
import React from 'react';
import UserProfileCard from '../../components/UserProfile/UserProfileCard';
import MyGraphsSection from '../../components/UserProfile/MyGraphsSection';
import FavoritePapersSection from '../../components/UserProfile/FavoritePapersSection';

const ProfileDashboard: React.FC = () => {
  // Mock data, replace with actual data from your application or API
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePhoto: 'path/to/profile-photo.jpg',
    subscriptionDetails: {
      type: 'Basic',
      expirationDate: '2023-12-31',
    },
  };

  const recentlyMadeGraphs = ['Graph 1', 'Graph 2', 'Graph 3']; // Mock data
  const favoritePapers = ['Paper 1', 'Paper 2', 'Paper 3']; // Mock data
  const paperCollections = ['Collection 1', 'Collection 2']; // Mock data

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-md shadow-md p-6 mb-6">
        <UserProfileCard {...userData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recently Made Graphs</h2>
          <MyGraphsSection recentlyMadeGraphs={recentlyMadeGraphs} />
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Favorite Papers</h2>
          <FavoritePapersSection favoritePapers={favoritePapers} paperCollections={paperCollections} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
