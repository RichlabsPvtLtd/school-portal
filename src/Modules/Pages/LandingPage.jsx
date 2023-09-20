import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';
import AuthLandingPage from '../Authentication/AuthLandingPage';


export default function LandingPage() {
 return (
  <Router>
  <Routes>
    {/* Route for user sign-in */}
    <Route path="/" element={<SignIn />} />

    {/* Route for user sign-up */}
    <Route path="/SignUp" element={<SignUp />} />

      {/* Route for user AuthLandingPage */}
    <Route path="/AuthLandingPage" element={<AuthLandingPage />} />
  </Routes>
</Router>
  )
};
