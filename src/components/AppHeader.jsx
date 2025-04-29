import React from 'react';

// Common Header Component for Project Creation Screens
export default function AppHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <img src="/api/placeholder/40/40" alt="Ques.AI Logo" className="h-8 mr-2" />
        <span className="text-xl font-semibold">Ques.AI</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <img src="/api/placeholder/24/24" alt="Settings" className="h-6 w-6" />
        </button>
        <button className="p-2">
          <img src="/api/placeholder/24/24" alt="Notifications" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}