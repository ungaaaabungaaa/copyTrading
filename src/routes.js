import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CompoundTrading from './pages/CompoundTrading';
import InvestingTrading from './pages/InvestingTrading';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PrivateRoute from './components/PrivateRoute';
import NotFoundPage from './pages/404page';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/compound" element={<CompoundTrading />} />
        <Route path="/investing" element={<InvestingTrading />} />
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
