import React from 'react';

// Common Header Component for Project Creation Screens
export default function AppHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <img src="../logo.png" alt="Ques.AI Logo" className="h-8 mr-2" />
        {/* <span className="text-xl font-semibold">Ques.AI</span> */}
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <img src="../bell.png" alt="Settings" className="h-6 w-6" />
        </button>
        <button className="p-2">
          <img src="../settings.png" alt="Notifications" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}