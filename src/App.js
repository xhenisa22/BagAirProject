import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import HomePage from  './components/homePage/homePage';
import NavBar from "./components/userDashboard/navBar"
import UserDashboard from "./components/userDashboard/userDashboard";
import EditProfile from "./components/Profile/editProfile"
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import ForgotPassword from './components/Auth/forgotPassword';
import VerificationCode from "./components/Auth/verificationCode";
import ResetPassword from "./components/Auth/resetPassword";
import ChangePassword from "./components/Auth/changePassword"

function App() {
  const [userState, setUserState] = useState({});


  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Login" element={<Login setUserState={setUserState} />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/VerificationCode" element={<VerificationCode />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/navBar" element={<NavBar />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />

          </Routes>
        </Router>
      </div>
  );
}

export default App;