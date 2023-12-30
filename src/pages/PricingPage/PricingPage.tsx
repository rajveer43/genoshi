// src/pages/PricingPage/PricingPage.tsx
import React, { useState } from 'react';
import PricingCard from '../../../src/pricing/PricingCard';
import SelectedPlanCard from '../../../src/pricing/SelectedPlanCard';
import './PricingPage.css';
const PricingPage: React.FC = () => {
  // Mock data, replace with actual data from your application or API
  const pricingPlans = [
    {
      planName: 'Basic Plan',
      price: '4',
      features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    },
    {
      planName: 'Pro Plan',
      price: '8',
      features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
    },
    {
      planName: 'Enterprise Plan',
      price: '20',
      features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]);

  return (
    <div>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
          <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </div>
    <div className="selected-plan mt-6">
      <SelectedPlanCard selectedPlan={selectedPlan} />
    </div>
    </div>
  
  );
};

export default PricingPage;
