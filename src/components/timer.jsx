import React from "react";

const Timer = ({ time }) => {
  return (
    <div className="timer">
      <h2>{time}</h2>
    </div>
  );
};

export default Timer;