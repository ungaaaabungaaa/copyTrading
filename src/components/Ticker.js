import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Ticker.css'; // Import your CSS file for styling

const Ticker = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const btcResponse = await axios.get('/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const ethResponse = await axios.get('/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        setBtcPrice(btcResponse.data.bitcoin.usd);
        setEthPrice(ethResponse.data.ethereum.usd);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    const intervalId = setInterval(fetchPrices, 60000); // Update prices every 60 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="ticker">
      <div className="ticker-item">
        <br></br>
        <span className='highlight'>Bitcoin: </span>
        <span>{btcPrice ? `$${btcPrice}` : 'Loading...'}</span>
        <br></br>
      </div>
      <div className="ticker-item">
        <br></br>
        <span className='highlight'>Ethereum: </span>
        <span>{ethPrice ? `$${ethPrice}` : 'Loading...'}</span>
        <br></br>
      </div>
    </div>
  );
};

export default Ticker;
