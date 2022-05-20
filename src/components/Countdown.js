import "./countdown.css";
const Countdown = ({ timerDays, timerHours, timerMinutes, timerseconds }) => {
  return (
    <div className="timer">
      <div className="timer__items">
        <p>{timerDays}</p>
        <small>Days</small>
      </div>
      <div className="timer__items">
        <p>{timerHours}</p>
        <small>Hours</small>
      </div>
      <div className="timer__items">
        <p>{timerMinutes}</p>
        <small>Minutes</small>
      </div>
      <div className="timer__items">
        <p>{timerseconds}</p>
        <small>Seconds</small>
      </div>
    </div>
  );
};

export default Countdown;
