// src/components/pricing/PricingCard.tsx
import React from 'react';

interface PricingCardProps {
  planName: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, features }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">{planName}</h2>
      <p className="text-2xl font-bold mb-4">${price}/month/user</p>
      <ul className="list-disc ml-6 mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Select Plan
      </button>
    </div>
  );
};

export default PricingCard;
