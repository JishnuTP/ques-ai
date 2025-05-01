import { useState, useRef, useContext } from 'react';
import { Upload, User, CheckCircle } from 'lucide-react';
import UploadHeader from '../components/UploadHeader';
import { mainContext } from '../context/MainContext';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [notification, setNotification] = useState(false);
  const fileInputRef = useRef(null);
  const {user} = useContext(mainContext)

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send data to a server
    console.log('Profile data:', { name, email, profileImage });
    
    // Show notification
    setNotification(true);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto py-4 px-4">
   <UploadHeader/>
   <div className="min-h-screen bg-white py-12 px-4 max-w-md mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-6">
          <div 
            className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={triggerFileInput}
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <User className="text-gray-400" size={40} />
            )}
          </div>
          
          <button
            type="button"
            onClick={triggerFileInput}
            className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white border-2 border-white hover:bg-blue-700 focus:outline-none"
          >
            <Upload size={14} />
          </button>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
        
        <h1 className="text-xl font-medium text-gray-900 mb-6">Profile Information</h1>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Profile
        </button>
      </div>
      
      {notification && (
        <div className="mt-6 bg-green-500 text-white p-3 rounded-md flex items-center justify-center">
          <CheckCircle size={18} className="mr-2" />
          Profile updated successfully!
        </div>
      )}
    </div>
    </div>
  );
}