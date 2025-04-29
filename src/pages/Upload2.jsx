import React from 'react';
import UploadHeader from '../components/UploadHeader';
import UploadSidebar from '../components/uploadSidebar';

// Upload Step 2
export default function UploadStep2() {
  return (
    <div className="container mx-auto py-4 px-4">
      <UploadHeader />
      
      <div className="flex">
        <UploadSidebar />
        
        {/* Main content */}
        <div className="w-3/4 bg-white text-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Add Podcast</h2>
          
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Upload from Youtube</h3>
              <button className="text-gray-500" >×</button>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Transcript</label>
              <textarea className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
              
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}