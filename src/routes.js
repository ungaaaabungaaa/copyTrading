import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CompoundTrading from './pages/CompoundTrading';
import InvestingTrading from './pages/InvestingTrading';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Deposit from './pages/Deposit';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/compound" component={CompoundTrading} />
        <PrivateRoute path="/investing" component={InvestingTrading} />
        <PrivateRoute path="/deposit" component={Deposit} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
      </Switch>
    </Router>
  );
};

export default Routes;
