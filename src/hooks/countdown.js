import { useState, useEffect } from "react";

const useCountDown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [coundDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(coundDown);
};

const getReturnValues = (coundDown) => {
  //calculate time left
  const days = Math.floor(coundDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (coundDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
};
