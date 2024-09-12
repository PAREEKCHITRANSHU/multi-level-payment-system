import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import API from "../../api";
import { useAuth } from "../store/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
        referredBy,
      });
      alert("Registration successful!");

      storeTokenInLS(response.data.token); 
      setEmail(""); 
      setPassword(""); 

      // Navigate to dashboard after successful registration
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during registration", error);
      alert("Registration failed!");
      setEmail(""); 
      setPassword(""); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
        onSubmit={handleRegister}
      >
        <h2 className="text-3xl mb-6 text-center text-blue-700">Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={referredBy}
          onChange={(e) => setReferredBy(e.target.value)}
          placeholder="Referral Code (Optional)"
          className="w-full p-3 mb-6 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 p-3 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
