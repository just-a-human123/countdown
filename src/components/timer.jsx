import React from 'react';
import DateTimeDisplay from './date-time';
import useCountdown from '../hooks/countdown';
import { countDownStyle } from '../style/style';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={countDownStyle}>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <spacer type="horizontal" width="100" height="100"> ♢ </spacer>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <spacer type="horizontal" width="100" height="100"> ♢ </spacer>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <spacer type="horizontal" width="100" height="100"> ♢ </spacer>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
