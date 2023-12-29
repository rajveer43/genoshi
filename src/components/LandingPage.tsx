// src/components/LandingPage.tsx
import React from 'react';
//import navbar
import NavBar from './NavBar';

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
        <NavBar />
      <h1 className="text-4xl font-bold mb-4">Welcome to Genoshi.io</h1>
      <p className="text-lg text-gray-600">
      Read cutting-edge research, no matter who you are.
      </p>
      <p className="text-lg text-gray-400">
      Dive deep into research with AI-powered summaries, interactive queries and a revolutionary knowledge graph structure, overhauling your understanding of complex topics.
      </p>
      
      {/* Add more content and styling as needed */}
    </div>
  );
};

export default LandingPage;
