import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore'; // Import the necessary Firestore functions

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileComplete, setProfileComplete] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      setCurrentUser(user);
      if (user) {
        try {
          const docRef = doc(db, 'Profiles', user.uid); // Reference to the user document
          const docSnapshot = await getDoc(docRef); // Retrieve the user document
          if (docSnapshot.exists() && docSnapshot.data().isComplete) {
            setProfileComplete(true);
            console.log("Profile is not found");
          } else {
            setProfileComplete(false);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          console.log("Profile is  found");
        }
      } else {
        setProfileComplete(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    profileComplete,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
