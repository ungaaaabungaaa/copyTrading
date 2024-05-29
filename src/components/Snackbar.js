// Snackbar.js
import React, { useContext, useState, createContext } from 'react';
import '../styles/snackbar.css'; // Assuming your CSS is in this file

const SnackbarContext = createContext();

export const useSnackbar = () => {
    return useContext(SnackbarContext);
};

const SnackbarProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const showSnackbar = (msg) => {
        setMessage(msg);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    return (
        <SnackbarContext.Provider value={showSnackbar}>
            {children}
            <div id="snackbar" className={visible ? 'show' : ''}>
                {message}
            </div>
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
