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
// Placeholder Dashboard for root dashboard view
const Dashboard = () => <div className="p-10 text-2xl font-bold">Welcome to Monark Portal</div>;

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faculty" element={<Faculty />} />

          {/* Protected Routes */}

          // ... inside Routes
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
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
