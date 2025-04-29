import React from 'react';

// Sidebar Component for Upload Screens
export default function UploadSidebar() {
  return (
    <div className="w-1/4 pr-4">
      <div className="space-y-2 mb-6">
        <div className="flex items-center p-2 bg-purple-100 text-purple-800 rounded">
          <span className="mr-2">+</span>
          <span>Add your Podcast(s)</span>
        </div>
        <div className="flex items-center p-2">
          <span className="mr-2">+</span>
          <span>Create & Repurpose</span>
        </div>
        <div className="flex items-center p-2">
          <span className="mr-2">+</span>
          <span>Podcast Widget</span>
        </div>
        <div className="flex items-center p-2">
          <span className="mr-2">+</span>
          <span>Upgrade</span>
        </div>
      </div>
      
      <div className="mt-auto pt-24">
        <div className="flex items-center p-2">
          <span className="mr-2">+</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}