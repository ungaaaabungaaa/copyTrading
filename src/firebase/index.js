import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyBO6FtBtGkbpdNLR-9IfazKEthWAOvtxUw",
    authDomain: "tradeshub-8ea66.firebaseapp.com",
    projectId: "tradeshub-8ea66",
    storageBucket: "tradeshub-8ea66.appspot.com",
    messagingSenderId: "254064509739",
    appId: "1:254064509739:web:42e2a2902ffae3d4e0fb6e",
    measurementId: "G-KKS5GGJ87K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
