import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}<spacer type="horizontal" width="100" height="100"> ♢ </spacer></p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
