import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"; // Assuming this is where your auth logic resides

const Navbar = () => {
  const { isLoggedIn, LogoutUser } = useAuth(); // Destructuring from useAuth context
  const navigate = useNavigate();

  

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Multi-Level Referral System</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/register" className="text-white hover:underline">
            Register
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
