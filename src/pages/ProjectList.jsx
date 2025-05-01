import { useEffect, useState } from 'react';
import axios from 'axios';
import AppHeader from '../components/AppHeader';
import {Link} from "react-router-dom"
import { API_BASE_URL } from '../api/Api';


function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${API_BASE_URL}api/projects`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <AppHeader />

      <div className="mb-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
            <span>Create New Project</span>
            <span className="ml-2">+</span>
          </button>
        </div>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link to={`/projects/${project._id}/upload`} key={project._id}>
              <div className="bg-orange-500 p-6 rounded-lg flex flex-col hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {project.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-gray-200 mb-6">
                  Created {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        )}
      </div>
    </div>
  );
}

export default ProjectList;
