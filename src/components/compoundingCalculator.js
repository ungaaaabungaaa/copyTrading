import React, { useState, useEffect } from 'react';
import '../styles/compoundingCalculator.css';

const CompoundingCalculator = () => {
  const [amount, setAmount] = useState(250);
  const [months, setMonths] = useState(1);
  const [earned, setEarned] = useState(250);
  const [compoundInterest, setCompoundInterest] = useState(0);

  useEffect(() => {
    calculate();
  }, [amount, months]);

  const calculate = () => {
    let earnedValue = amount;
    for (let i = 0; i < months; i++) {
      earnedValue += earnedValue * 0.10; // 10% growth
    }
    const compoundInterestValue = ((earnedValue - amount) / amount) * 100;
    setEarned(earnedValue);
    setCompoundInterest(compoundInterestValue);
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleMonthsChange = (e) => {
    setMonths(parseInt(e.target.value));
  };

  return (
    <div className="Growth-Calculator flex_center_center flex_dir_col">
      <div className="Growth-title flex_center_center">
        <h1>Growth <span className="highlight">Calculator</span></h1>
      </div>
      <br />
      <div className='slider_layout'>
        <span id="amountDisplay">${amount}</span>
        <input
          type="range"
          id="amount"
          min="250"
          max="10000"
          step="250"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <br />
      <div className='slider_layout'>
        <span id="monthsDisplay">{months} {months === 1 ? 'month' : 'months'}</span>
        <input
          type="range"
          id="months"
          min="1"
          max="36"
          value={months}
          onChange={handleMonthsChange}
        />
      </div>
      <br /><br />
      <div className="flex_center_center flex_dir_row">
        <h1 id="earnedDisplay">${earned.toFixed(2)}</h1>
        &nbsp;&nbsp;
        <span className="highlight" id="interestDisplay">↑{compoundInterest.toFixed(2)}%</span>
      </div>
      <button id="CopyTrading">Start Now</button>
      <p id="learn_more">Unlock exponential growth with Compound Trading. <br></br> Try it now to maximize your investment potential!</p>
      <br />
    </div>
  );
};

export default CompoundingCalculator;
