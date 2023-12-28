// src/components/pricing/SelectedPlanCard.tsx
import React from 'react';

interface SelectedPlanCardProps {
  selectedPlan: {
    planName: string;
    price: string;
    features: string[];
  };
}

const SelectedPlanCard: React.FC<SelectedPlanCardProps> = ({ selectedPlan }) => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">{selectedPlan.planName}</h2>
      <p className="text-2xl font-bold mb-4">${selectedPlan.price}/month/user</p>
      <ul className="list-disc ml-6 mb-4">
        {selectedPlan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className="mb-4">You've selected this plan.</p>
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
        Change Plan
      </button>
    </div>
  );
};

export default SelectedPlanCard;
