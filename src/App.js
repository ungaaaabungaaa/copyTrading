import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import './styles/global.css';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading time for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      {loading ? <SplashScreen /> : <Routes />}
    </AuthProvider>
  );
}

export default App;
