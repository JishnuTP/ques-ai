import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/Wlecome';
import CreateProjectLanding from './pages/Createproject';
import ProjectList from './pages/ProjectList';
import UploadPodcast from './pages/UploadProdcast';
import EditTranscript from './pages/EditTranscript';
import ProfilePage from './pages/Profile';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects/create" element={<CreateProjectLanding />} />
        {/* <Route path="/projects/creation" element={<Projectcreation />} /> */}
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:projectId/upload" element={<UploadPodcast />} />
        <Route path="/projects/:projectId/podcasts/:podcastId/edit" element={<EditTranscript/>} />
      </Routes>
    </Router>
  );
}

export default App;
