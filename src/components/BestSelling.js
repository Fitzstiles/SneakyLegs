import Countdown from "./Countdown";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const [timerDays, setTimerdays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerseconds, setTimerseconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("september  26 , 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerdays(days);
        setTimerHours(hour);
        settimerMinutes(minutes);
        setTimerseconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <BestsellingContainer>
      <div className="bestselling__container">
        <Countdown
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerseconds={timerseconds}
        />
        <div className="image__container">
          <img
            src="./images/shoe2.jpg"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              marginTop: "20px",
            }}
            alt=""
          />
          <h2>70% off</h2>
        </div>
      </div>
      <div className="link__container">
        <Link to="/"> BUY NOW</Link>
      </div>
    </BestsellingContainer>
  );
};

export default BestSelling;

const BestsellingContainer = styled.div`
  background-color: black;
  .bestselling__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: auto;
    flex-wrap: wrap;
    overflow: hidden;
    .image__container {
      position: relative;
      width: 600px;
    }
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #7b1a2b;
    top: 130px;
    right: 15px;
    background-color: #c4c3c8;
    height: 90px;
    width: 130px;
    border-radius: 40px;
  }
  .link__container {
    display: flex;
    justify-content: center;
    padding-top: 80px;
    a {
      background-color: #c4c3c8;
      padding: 10px 25px;
      border-radius: 10px;
      margin-right: 20px;
      color: black;
    }
  }
`;
