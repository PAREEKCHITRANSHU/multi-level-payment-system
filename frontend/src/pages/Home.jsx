import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to the MLM Referral System</h1>
        <p className="text-white text-xl mb-8">Join the network and start earning today!</p>
        <Link to="/register" className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 mr-4">
          Register
        </Link>
        <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
