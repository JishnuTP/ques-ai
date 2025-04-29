import AppHeader from '../components/AppHeader'

function Projectcreation() {
    
    return(
        <div className="container mx-auto py-8 px-4">
<AppHeader />

<div className="text-center mb-6">
  <h1 className="text-2xl font-bold mb-12">Create a New Project</h1>
  
  <div className="max-w-lg mx-auto bg-red-100 rounded-lg p-8 text-left">
    <h2 className="text-lg font-semibold mb-4 text-red-800">Create Project</h2>
    
    <div className="mb-6">
      <label className="block text-gray-700 mb-2">Enter Project Name:</label>
      <input 
        type="text" 
        placeholder="Type here" 
        className="w-full p-2 border border-gray-300 rounded" 
      />
      <p className="text-xs text-red-600 mt-1">Project Name Can't be empty</p>
    </div>
    
    <div className="flex justify-end">
      <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded mr-2">
        Cancel
      </button>
      <button 
        onClick={onContinue}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded">
        Create
      </button>
    </div>
  </div>
</div>
</div>
    )
}

