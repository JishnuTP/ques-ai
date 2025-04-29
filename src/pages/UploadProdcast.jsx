import { useState } from 'react';
import UploadHeader from '../components/UploadHeader';
import UploadSidebar from '../components/uploadSidebar';


function UploadPodcast() {
  const [showModal, setShowModal] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleUpload = () => {
    console.log('Uploaded from YouTube:', youtubeUrl);
    setShowModal(false);
  };

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
          
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center" >
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
        
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-12 bg-blue-50">
          <div className="mb-4">
            <img src="/api/placeholder/60/60" alt="Upload Cloud" className="h-16" />
          </div>
          <p className="text-center text-gray-600 mb-2">Select a file to drag and drop here (Podcast Media or Transcription Text)</p>
          <p className="text-center text-xs text-gray-500 mb-6">MP3, MP4, M4A, WAV, MOV, TEXT up to 1 GB</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
            Select File
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default UploadPodcast;