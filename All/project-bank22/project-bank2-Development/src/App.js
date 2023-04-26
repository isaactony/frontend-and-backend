import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Contact from './components/contact/Contact';
import Landingpage from './components/landingpage/landingpage';
import Project from './components/Projects/project';
import Cohorts from './components/Cohorts/cohorts';
import Logout from './components/Logout/logout';
import Login from './components/Login/login';
import AddProject from './components/Addproject/addprojectform';
import CohortForm from './components/CohortForm/cohortForm';
import ProjectDetails from './components/Projectdets/projectdets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/cohortform" element={<CohortForm />} />

        <Route path="/add-project" element={<AddProject />} />
        <Route path="/cohortform" element={<CohortForm />} />

        <Route path="/project-dets" element={<ProjectDetails />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;