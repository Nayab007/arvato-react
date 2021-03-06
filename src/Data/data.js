import React from 'react';
import './Data.css';

/* Here I have all the data Info for the cards, This data  can be export to other components as well */
const Data = ({ Data }) => {
  return (
    <div data-testid="data" className="container">
      <div className="card">
        <div className="content">
          <h2>£35</h2>
          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£45</h2>
          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£55</h2>
          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£65</h2>
          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£75</h2>
          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£85</h2>

          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£95</h2>

          <h3>Monthly Plan</h3>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>£105</h2>

          <h3>Monthly Plan</h3>
        </div>
      </div>
    </div>
  );
};

export default Data;
