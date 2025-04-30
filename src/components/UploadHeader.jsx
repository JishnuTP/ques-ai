import { useLocation } from 'react-router-dom';

export default function UploadHeader() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = ['Home', ...pathSegments.map(seg => 
    seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  )];

  return (
    <header className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img src="../../logo.png" alt="Ques.AI Logo" className="h-6 mr-2" />
        <nav className="text-sm space-x-1 text-gray-700">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <span className={index === breadcrumbs.length - 1 ? 'font-semibold' : ''}>
                {crumb}
              </span>
              {index < breadcrumbs.length - 1 && <span className="text-gray-400"> / </span>}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <img src="../../bell.png" alt="Notifications" className="h-6 w-6" />
        </button>
        <button className="p-2">
          <img src="../../settings.png" alt="Settings" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
