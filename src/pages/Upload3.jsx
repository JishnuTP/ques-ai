import React from 'react';
import UploadHeader from '../components/UploadHeader';
import UploadSidebar from '../components/uploadSidebar';

// Upload Step 3
export default function UploadStep3() {
  return (
    <div className="container mx-auto py-4 px-4">
      <UploadHeader />
      
      <div className="flex">
        <UploadSidebar />
        
        {/* Main content */}
        <div className="w-3/4 bg-white text-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Add Podcast</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <div className="mb-2">
                <img src="/api/placeholder/50/50" alt="RSS Feed Icon" className="h-10" />
              </div>
              <h3 className="font-semibold mb-1">RSS Feed</h3>
              <p className="text-xs text-gray-500 mb-2">Enter URL or paste RSS</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <div className="mb-2">
                <img src="/api/placeholder/50/50" alt="YouTube Icon" className="h-10" />
              </div>
              <h3 className="font-semibold mb-1">Youtube Video</h3>
              <p className="text-xs text-gray-500 mb-2">Paste a YouTube URL</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <div className="mb-2">
                <img src="/api/placeholder/50/50" alt="Upload Icon" className="h-10" />
              </div>
              <h3 className="font-semibold mb-1">Upload Files</h3>
              <p className="text-xs text-gray-500 mb-2">Upload audio or video</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Your Files</h3>
            
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-4 text-left">No.</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Upload Date & Time</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">THE GABBING UI EPISODE 12</td>
                  <td className="py-2 px-4">01:30:21 / 15:45</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600">View</button>
                      <button className="text-red-600">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">THE GABBING UI EPISODE 11</td>
                  <td className="py-2 px-4">01:30:21 / 11:58</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600">View</button>
                      <button className="text-red-600">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">THE GABBING UI EPISODE 10</td>
                  <td className="py-2 px-4">01:30:20 / 18:42</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600">View</button>
                      <button className="text-red-600">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}