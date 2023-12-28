// src/components/UserProfile/UserProfileCard.tsx
import React from 'react';

interface UserProfileCardProps {
  name: string;
  email: string;
  profilePhoto: string;
  subscriptionDetails: {
    type: string;
    expirationDate: string;
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  email,
  profilePhoto,
  subscriptionDetails,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center">
        <img src={profilePhoto} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Subscription Details</h3>
        <p className="text-gray-600">
          Type: {subscriptionDetails.type} (Expires on {subscriptionDetails.expirationDate})
        </p>
      </div>
    </div>
  );
};

export default UserProfileCard;
