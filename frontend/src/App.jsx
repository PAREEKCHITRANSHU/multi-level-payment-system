import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Importing the Navbar

// Helper function to conditionally show Navbar based on the route
const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'; // Only hide Navbar on Home page

  return (
    <>
      {showNavbar && <Navbar />} {/* Show Navbar except on the home page */}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
