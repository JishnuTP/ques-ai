import React from 'react';

// Header Component for Upload Screens
export default function UploadHeader() {
  return (
    <header className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img src="/api/placeholder/40/40" alt="Ques.AI Logo" className="h-6 mr-2" />
        <span className="text-sm">Home Page / Sample Project / </span>
        <span className="text-sm font-semibold">Add your podcast</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-1">
          <img src="/api/placeholder/20/20" alt="Search" className="h-5 w-5" />
        </button>
        <button className="p-1">
          <img src="/api/placeholder/20/20" alt="Notifications" className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}