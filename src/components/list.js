import React from 'react';
import '../styles/list.css'; // Import your CSS file for styling

const List = ({ data }) => {
  return (
    <div className="list-container">
      <ul className="list">
        {data.map((item, index) => (
          <li key={index} className="list-item">
            <div className="name">{item.name}</div>
            <div className="amount"><span className='highlight'>$</span> {item.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
