import { Link } from "react-router-dom";
import styled from "styled-components";
const HeroSection = () => {
  return (
    <Heros>
      <div className="bg__img">
        <img src="./images/hero_bg.jpg" alt="" />
      </div>
      <div className="textarea">
        <div className="bold__text">
          <h1>
            Run Your World With the Right <span>Shoes</span>
          </h1>
        </div>
        <div className="middle__text">
          <p>
            Never be caught unfresh at any moment, follow the ever evolving
            fashion and get the right sneakers today.
          </p>
        </div>
      </div>
      <div className="btn">
        <Link to="/products">SHOP NOW</Link>
      </div>
    </Heros>
  );
};

export default HeroSection;
const Heros = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 100px;
  @media (min-width: 830px) {
    height: 100vh;
  }
  .bg__img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .textarea {
    height: 100%;
    padding-top: 20%;
    margin: 0 20px;
    h1 {
      color: white;
      span {
        color: green;
      }
    }
    .middle__text {
      margin-top: 30px;
      width: 100%;
    }
    p {
      color: white;
      line-height: 30px;
      font-size: 22px;
    }
    @media (min-width: 830px) {
      padding: 0;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 40%;
      margin-left: 30px;
      p {
        font-size: 16px;
      }
      .middle__text {
        margin: 0;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    a {
      text-decoration: none;
      color: #c55e20;
      background-color: white;
      padding: 15px 30px;
      border-radius: 10px;
      font-weight: bold;
      @media (min-width: 830px) {
        position: absolute;
        left: 30px;
        bottom: 30%;
      }
    }
  }
`;
