import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import CompoundTrading from '../pages/CompoundTrading';
import InvestingTrading from '../pages/InvestingTrading';
import Contact from '../pages/Contact';
import Terms from '../pages/Terms';
import Deposit from '../pages/Deposit';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/compound" element={<CompoundTrading />} />
          <Route path="/investing" element={<InvestingTrading />} />
          <Route path="/deposit" element={<Deposit />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
