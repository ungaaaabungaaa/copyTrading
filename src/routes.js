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
import Layout from './components/Layout';  // Import the Layout component

import NotFoundPage from './pages/404page';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Affiliate from './pages/Affiliate';
import Faq from './pages/FAQ';
import AboutUs from './pages/AboutUs';

function AppRoutes() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/compound" element={<CompoundTrading />} />
        <Route path="/investing" element={<InvestingTrading />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/affiliate' element={<Affiliate />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;
