// src/components/UserProfile/UserProfileCard.tsx
import React from 'react';
import './UserProfileCard.css'

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
    <div className="user-profile-card bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center">
        <img src={profilePhoto} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div className="user-info">
          <h2 className="user-name text-xl font-semibold">{name}</h2>
          <p className="user-email text-gray-600">{email}</p>
        </div>
      </div>

      <div className="subscription-details mt-6">
        <h3 className="subscription-title text-lg font-semibold">Subscription Details</h3>
        <p className="subscription-info text-gray-600">
          Type: {subscriptionDetails.type} (Expires on {subscriptionDetails.expirationDate})
        </p>
      </div>
    </div>
  );
};

export default UserProfileCard;
