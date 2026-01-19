import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ProtectedRoute from './components/Routing/ProtectedRoute';
import MainLayout from './components/Layout/MainLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import LandingPage from './pages/Public/LandingPage';
import Faculty from './pages/Public/Faculty';
import Settings from './pages/Dashboard/Settings';
import Students from './pages/Dashboard/Students';
import Donations from './pages/Dashboard/Donations';
import Events from './pages/Dashboard/Events';
import Gallery from './pages/Dashboard/Gallery';
import About from './pages/Public/About';
import Admission from './pages/Public/Admission';
import Academic from './pages/Public/Academic';
import Placement from './pages/Public/Placement';
import CampusLife from './pages/Public/CampusLife';
import Contact from './pages/Public/Contact';

import FacultyDashboard from './pages/Dashboard/FacultyDashboard';
import DashboardHome from './pages/Dashboard/DashboardHome';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import GenericPage from './pages/Public/GenericPage';

// ... (other imports)

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact" element={<Contact />} />

          {/* Secondary Pages */}
          <Route path="/leadership" element={<GenericPage title="Leadership" />} />
          <Route path="/mission" element={<GenericPage title="Vision & Mission" />} />
          <Route path="/fees" element={<GenericPage title="Fee Structure" />} />
          <Route path="/scholarships" element={<GenericPage title="Scholarships" />} />
          <Route path="/research" element={<GenericPage title="Research & Innovation" />} />
          <Route path="/programs" element={<GenericPage title="Academic Programs" />} />
          <Route path="/academic-calendar" element={<GenericPage title="Academic Calendar" />} />
          <Route path="/recruiters" element={<GenericPage title="Our Recruiters" />} />
          <Route path="/clubs" element={<GenericPage title="Student Clubs" />} />
          <Route path="/library" element={<GenericPage title="Library" />} />
          <Route path="/labs" element={<GenericPage title="Laboratories" />} />
          <Route path="/disclosure" element={<GenericPage title="Public Self-Disclosure" />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <DashboardHome />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/faculty"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <FacultyDashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Settings />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/students"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Students />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/donations"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Donations />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Events />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Gallery />
                </MainLayout>
              </ProtectedRoute>
            }
          />


          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <StudentDashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <AdminDashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
