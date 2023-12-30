// src/components/LandingPage.tsx
import React from 'react';
//import navbar
import NavBar from './NavBar';
import PricingPage from '../pages/PricingPage/PricingPage';
import './landingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div>
    <NavBar />
    <div className="landing-container   container mx-auto p-4 text-center">
        {/* <NavBar /> */}
        <div className="content-container">
      <h1 className="title text-4xl font-bold mb-4">Welcome to Genoshi.io</h1>
      <p className="subtitle">
      Read cutting-edge research, no matter who you are.
      </p>
      <p className="description">
      Dive deep into research with AI-powered summaries, interactive queries and a revolutionary knowledge graph structure, overhauling your understanding of complex topics.
      </p>
      
      {/* Add more content and styling as needed */}
      {/* Try it out button */}
      <button className="cta-button">Try it out</button>

{/* Create Custom Graphs button */}
<button className="cta-button">Create Custom Graphs</button>
      </div>
    </div>
    <PricingPage/>
    </div>
  );
};

export default LandingPage;
