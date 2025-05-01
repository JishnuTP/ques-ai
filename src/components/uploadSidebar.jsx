import React, { useContext } from 'react';
import {
  Mic,
  Repeat,
  LayoutGrid,
  ArrowUpRight,
  HelpCircle,
  User
} from 'lucide-react';

import { mainContext } from '../context/MainContext';
import { Link } from 'react-router-dom';


export default function UploadSidebar() {
  // Dummy user info — replace with real data
  // const user = {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  // };

  const {user} = useContext(mainContext)
 

  return (
    <div className="w-1/4 h-screen bg-white p-4 flex flex-col justify-between border-r overflow-y-auto">
      {/* Top Section */}
      <div className="space-y-2">
        <div className="flex items-center p-2 bg-purple-100 text-purple-800 rounded">
          <Mic className="w-5 h-5 mr-2" />
          <span>Add your Podcast(s)</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-100 rounded">
          <Repeat className="w-5 h-5 mr-2" />
          <span>Create & Repurpose</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-100 rounded">
          <LayoutGrid className="w-5 h-5 mr-2" />
          <span>Podcast Widget</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-100 rounded">
          <ArrowUpRight className="w-5 h-5 mr-2" />
          <span>Upgrade</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center p-2 hover:bg-gray-100 rounded mb-4">
          <HelpCircle className="w-5 h-5 mr-2" />
          <span>Help</span>
        </div>
<Link to="/profile">
     <div className="flex items-center p-3 bg-gray-100 rounded">
          <User className="w-6 h-6 mr-3 text-gray-700" />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">{user.name}</div>
            <div className="text-gray-600">{user.email}</div>
          </div>
        </div>
        </Link>   
      </div>
    </div>
  );
}
