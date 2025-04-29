import AppHeader from '../components/AppHeader'

function ProjectList() {

    return (
      <div className="container mx-auto py-8 px-4">
      <AppHeader />
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button 
         
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
            <span>Create New Project</span>
            <span className="ml-2">+</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-orange-500 p-6 rounded-lg flex flex-col">
            <div className="text-2xl font-bold mb-2">SP</div>
            <h3 className="font-semibold mb-1">Sample Project</h3>
            <p className="text-sm text-gray-200 mb-6">Created 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default ProjectList;