// src/utils/mockData.ts

export const profileDashboardData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePhoto: 'path/to/profile-photo.jpg',
    subscriptionDetails: {
      type: 'Basic',
      expirationDate: '2023-12-31',
    },
  };
  
  export const myGraphsData = {
    recentlyMadeGraphs: ['Graph 1', 'Graph 2', 'Graph 3'],
  };
  
  export const favoritePapersData = {
    favoritePapers: ['Paper 1', 'Paper 2', 'Paper 3'],
    paperCollections: ['Collection 1', 'Collection 2'],
  };
  
  export const pricingPlansData = [
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
  