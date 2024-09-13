# Multi-Level Referral System

This is a Multi-Level Referral System built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The system allows users to register, log in, and refer other users. Users can track their referrals, bonuses, and referral codes through a personalized dashboard. 

## Features

- User Registration and Login
- JWT-based Authentication and Authorization
- Multi-level Referral Tracking
- User Dashboard displaying referrals and bonus data
- Copy referral code functionality
- Secure API endpoints with CRUD operations
- Built using Tailwind CSS for a responsive UI
- Backend deployed on Render, Frontend deployed on Vercel

## Technologies Used

### Frontend:
- React.js
- Tailwind CSS
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Mongoose

## Installation and Setup Instructions

### Prerequisites:
- Node.js (v14 or above)
- MongoDB (local or cloud-based)
- Git

### Backend Setup:
1. Clone the backend repository from GitHub:
   
   git clone https://github.com/PAREEKCHITRANSHU/multi-level-payment-system
  
2. Navigate to the backend folder:
   
   cd backend
   
3. Install the required packages:
   
   npm install
   
4. Create a `.env` file in the root directory and add the following environment variables:
   
   PORT=5000
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET_KEY=<Your JWT Secret>
  
5. Start the backend server:
   
   npm index.js
   

### Frontend Setup:
1. Clone the frontend repository from GitHub:
   ```bash
   git clone https://github.com/PAREEKCHITRANSHU/multi-level-payment-system
   ```
2. Navigate to the frontend folder:
   
   cd frontend
   
3. Install the required packages:
  
   npm install
   
4. Start the React development server:
   npm start
   

### Deployment
- Backend: Deployed on Render
- Frontend: Deployed on Vercel

#### Live Application Link:
- [Multi-Level Referral System - Live](https://mlmsystem.vercel.app/)

### Authentication:
- **POST** `/api/auth/register` – Register a new user.
- **POST** `/api/auth/login` – Login user and return JWT token.

### User Dashboard:
- **GET** `/api/users/dashboard` – Fetch user data including referral information (protected route, requires JWT).

## Usage

1. **Register** on the platform to get your referral code.
2. **Log in** to view your dashboard and track the users you referred.
3. **Copy** the referral code and share it with others.
4. For each user who registers using your referral code, you will receive a bonus.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact me via:
- Email: [chitranshu@example.com](mailto:chitranshupareek@gmail.com.com)
- LinkedIn: [Chitranshu Pareek](https://www.linkedin.com/in/chitranshu-pareek)
