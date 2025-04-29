import { useState } from 'react';
import AppHeader from '../components/AppHeader'


function CreateProjectLanding() {
  const [projectName, setProjectName] = useState('');

  const handleCreate = () => {
    console.log('Project Created:', projectName);
    window.location.href = '/projects';
  };

  return (
    <div className="container mx-auto py-8 px-4">
    <AppHeader />
    
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-8">Create a New Project</h1>
      
      <div className="flex justify-center mb-12">
        <img src="/api/placeholder/300/200" alt="Project Creation Illustration" className="h-40" />
      </div>
      
      <p className="text-gray-400 max-w-lg mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <button 
        
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center mx-auto">
        <span>Create New Project</span>
        <span className="ml-2">+</span>
      </button>
    </div>
  </div>
  );
}

export default CreateProjectLanding;
