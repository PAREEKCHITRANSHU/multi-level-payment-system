import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa"; // Import copy icon from react-icons (or use another icon library)
import API from "../../api";
import { useAuth } from "../store/auth";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(""); // For showing copy success message
  const { authorizationToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/users/dashboard", {
          headers: {
            Authorization: authorizationToken,
          },
        });
        setUserData(response.data);
      } catch (error) {
        setError("Error fetching user data");
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authorizationToken]);

  // Function to copy referral number
  const copyReferralNumber = () => {
    navigator.clipboard.writeText(userData.referralCode).then(() => {
      setCopySuccess("Referral code copied!"); // Show success message
      setTimeout(() => setCopySuccess(""), 2000); // Remove message after 2 seconds
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!userData) return <p>No data available</p>;

  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen w-screen text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="bg-white p-6 rounded shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl mb-4 text-blue-700">
          Welcome, {userData.name}!
        </h2>
        <p className="mb-4">
          <strong>Referrals:</strong> {userData.referralCount}
        </p>
        <p className="mb-4">
          <strong>Bonus:</strong> {userData.bonus} INR
        </p>
        <p className="mb-4 flex items-center">
          <strong>Referral Number:</strong> {userData.referralCode}
          <FaCopy
            className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer"
            onClick={copyReferralNumber} // Call function to copy referral code
          />
        </p>
        {copySuccess && <p className="text-green-500">{copySuccess}</p>} {/* Display success message */}

        <h3 className="text-xl mt-6 mb-4 text-blue-700">Referred Users:</h3>
        {userData.referredUsers.length > 0 ? (
          <ul className="list-disc list-inside">
            {userData.referredUsers.map((referredUser) => (
              <li key={referredUser._id}>
                {referredUser.name} ({referredUser.email})
              </li>
            ))}
          </ul>
        ) : (
          <p>No referred users.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
