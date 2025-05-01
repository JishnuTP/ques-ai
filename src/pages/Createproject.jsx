import { useContext, useState } from 'react';
import AppHeader from '../components/AppHeader';
import axios from 'axios';
import { API_BASE_URL } from '../api/Api';

function CreateProjectLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const {token} = localStorage.getItem('token')
  const [error, setError] = useState('');

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setProjectName('');
    setError('');
  };

  const handleSubmit = async () => {
    if (!projectName.trim()) {
      setError("Project Name can't be empty");
      return;
    }
  
    const token = localStorage.getItem('token'); // Get token from localStorage
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}api/projects`,
       
        { name: projectName, description: "project description" },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to request headers
          },
        }
      );
  
      console.log('Project Created:', response.data);
      setIsModalOpen(false);
      window.location.href = '/projects';
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Something went wrong. Try again.');
    }
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <AppHeader />

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-8">Create a New Project</h1>

        <div className="flex justify-center mb-12">
          <img src="../back.png" alt="Project Creation Illustration" className="h-40" />
        </div>

        <p className="text-gray-400 max-w-lg mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <button
          onClick={handleCreateClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center mx-auto"
        >
          <span>Create New Project</span>
          <span className="ml-2 text-xl font-bold">+</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
            <h2 className="text-lg font-semibold mb-4 text-purple-700">Create Project</h2>

            <label className="block text-gray-700 mb-2">Enter Project Name:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
                setError('');
              }}
              placeholder="Type here"
              className="w-full p-2 border border-gray-300 rounded mb-1"
            />
            {error && <p className="text-xs text-red-600 mb-4">{error}</p>}

            <div className="flex justify-end">
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 py-2 px-6 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProjectLanding;
