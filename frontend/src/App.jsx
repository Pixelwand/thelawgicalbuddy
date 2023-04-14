import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { Topics, Courses, Webinars } from './components/Topics/index';
import Team from './components/Teams/Team';
import { Faqs } from './components/FAQs/Faqs';
import Dashboard from './components/Dashboard/Dashboard';
import { AdminDashboard } from './components/Admin/Dashboard/Dashboard';
import { AdminAuth } from './components/Admin/Authentication/Auth';
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/courses" element={<Courses />} />
        <Route path="/topics/webinars" element={<Webinars />} />
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
