import { useState } from 'react';
import axios from 'axios'; // Import axios
import UploadHeader from '../components/UploadHeader';
import UploadSidebar from '../components/uploadSidebar';

function UploadPodcast() {
  const [showModal, setShowModal] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // To handle file selection
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'THE GABBING UI EPISODE 12', url: 'https://www.youtube.com/watch?v=xxxx', type: 'youtube' },
    { name: 'RSS Feed Podcast', url: 'https://rss.example.com/podcast.xml', type: 'rss' },
    { name: 'My Podcast MP3', url: '/uploads/episode1.mp3', type: 'upload' },
  ]); 

  // Handle Card Click for Different Upload Types
  const handleCardClick = (type) => {
    setUploadType(type);
    setShowModal(true);
  };

  // Handle File Selection (For Direct File Upload)
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload Function
  const handleUpload = async () => {
    if (!name.trim()) return; // Check if name is not empty

    const formData = new FormData();

    // Adding name and URL or file to the form data
    formData.append('name', name);
    formData.append('type', uploadType);
    if (uploadType === 'youtube') {
      formData.append('url', url);
    } else if (uploadType === 'rss') {
      formData.append('url', url);
    } else if (uploadType === 'upload' && selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // Successfully uploaded, add to the uploaded files list
        setUploadedFiles((prev) => [
          ...prev,
          { name, url: uploadType === 'upload' ? selectedFile.name : url, type: uploadType },
        ]);
        setName('');
        setUrl('');
        setUploadType('');
        setSelectedFile(null);
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  // Get Modal Title based on the upload type
  const getModalTitle = () => {
    switch (uploadType) {
      case 'youtube':
        return 'Upload from YouTube';
      case 'rss':
        return 'Upload via RSS Feed';
      case 'upload':
        return 'Upload File Directly';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto py-4 px-4">
      <UploadHeader />
      <div className="flex">
        <UploadSidebar />
        <div className="w-3/4 bg-white text-gray-800 rounded-lg p-6">
          <h2 className="text-5xl font-semibold mb-6">Add Podcast</h2>

          {/* Upload Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              className="border border-gray-200 rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow"
              onClick={() => handleCardClick('rss')}
            >
              <img src="../../rss.png" alt="RSS Feed Icon" className="h-10 mb-2" />
              <h3 className="font-semibold mb-1">RSS Feed</h3>
              <p className="text-xs text-gray-500">Enter URL or paste RSS</p>
            </div>

            <div
              className="border border-gray-200 rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow"
              onClick={() => handleCardClick('youtube')}
            >
              <img src="../../youtube.png" alt="YouTube Icon" className="h-10 mb-2" />
              <h3 className="font-semibold mb-1">YouTube Video</h3>
              <p className="text-xs text-gray-500">Paste a YouTube URL</p>
            </div>

            <div
              className="border border-gray-200 rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow"
              onClick={() => handleCardClick('upload')}
            >
              <img src="../../up.png" alt="Upload Icon" className="h-10 mb-2" />
              <h3 className="font-semibold mb-1">Upload Files</h3>
              <p className="text-xs text-gray-500">Upload audio or video</p>
            </div>
          </div>

          {/* Drop Area */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-12 bg-blue-50">
            <img src="../../upload.png" alt="Upload Cloud" className="h-16 mb-4" />
            <p className="text-center text-gray-600 mb-2">
              Select a file to drag and drop here (Podcast Media or Transcription Text)
            </p>
            <p className="text-center text-xs text-gray-500 mb-6">
              MP3, MP4, M4A, WAV, MOV, TEXT up to 1 GB
            </p>
            <input type="file" onChange={handleFileSelect} />
          </div>

          {/* Uploaded Files Table */}
          <div className="mt-10">
            <h3 className="font-semibold mb-4">Your Files</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-4 text-left">No.</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">URL</th>
                  <th className="py-2 px-4 text-left">Upload Date</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{file.name}</td>
                    <td className="py-2 px-4">{file.url}</td>
                    <td className="py-2 px-4">{new Date().toLocaleString()}</td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600">View</button>
                        <button className="text-red-600">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">{getModalTitle()}</h3>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {uploadType === 'youtube' || uploadType === 'rss' ? (
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">URL</label>
                <input
                  type="text"
                  placeholder="Enter URL"
                  className="w-full border p-2 rounded"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            ) : (
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Upload File</label>
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="w-full border p-2 rounded"
                />
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleUpload}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPodcast;
