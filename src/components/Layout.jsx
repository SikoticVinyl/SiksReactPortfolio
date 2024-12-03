import React from 'react';
import Navigation from './Navigation';
import { Sparkles } from './Sparkles';
import { Meteors } from './Meteors';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Sparkles particleColor="#FFFFFF" particleCount={200} minSize={1} maxSize={3} />
      <Meteors meteorColor="#8B5CF6" meteorCount={15} />
      <Navigation />
      <main className="pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;