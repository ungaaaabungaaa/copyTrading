import React, { useState } from 'react';
import '../styles/compoundingCalculator.css';

const CompoundingCalculator = () => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [compoundedReturns, setCompoundedReturns] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const calculateReturns = () => {
    const initialAmount = parseFloat(amount);
    const durationInYears = parseFloat(duration) / 12; // Assuming duration is in months
    const annualInterestRate = 0.1; // 10% interest rate
    const compoundedReturns = initialAmount * Math.pow(1 + annualInterestRate, durationInYears) - initialAmount;
    const totalAmount = initialAmount + compoundedReturns;

    setCompoundedReturns(compoundedReturns.toFixed(2));
    setTotalAmount(totalAmount.toFixed(2));
  };

  return (
    <>
      <div className='compoundCalculator_section'>
        <label htmlFor="amount">Enter investment amount</label>
        <br></br>
        <input
          className='CompoundCalculator_Input'
          type="number"
          id="amount"
          placeholder='i.e 200$'
          value={amount}
          onChange={handleAmountChange}
        />
        <select className='CompoundCalculator_Input' id="duration" value={duration} onChange={handleDurationChange}>
          <option value="">Select duration</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="12">1 year</option>
          <option value="18">1.5 years</option>
          <option value="24">2 years</option>
          <option value="36">3 years</option>
        </select>
        <br></br>
        <button onClick={calculateReturns}>Calculate Returns</button>
        <br></br>
      </div>
      <div className='CompoundCalculator_box_layout'>
            <div className='box1'>
                <br></br>
                <br></br>
                <p>Initial Investment <br></br> <br></br> ${amount}</p>
                <br></br>
            </div>
            <div className='box2'>
                <br></br>
                <br></br>
                <p>Compounded Returns <br></br> <br></br> ${compoundedReturns}</p>
                <br></br>
                <br></br>
            </div>
            <div className='box3'>
                <br></br>
                <br></br>
                <p>Total Amount <br></br> <br></br> ${totalAmount}</p>
                <br></br>
                <br></br>
            </div>

      </div>

    </>
  );
};

export default CompoundingCalculator;