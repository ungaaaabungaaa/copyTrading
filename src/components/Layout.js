// src/components/Layout.js
import React, { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//code.tidio.co/u1rertwm6macfvpng41rnli5zhlqbhda.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;
