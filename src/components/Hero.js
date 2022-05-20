import { Link } from "react-router-dom";
import "./hero.css";
const HeroSection = () => {
  return (
    <div className="hero__container">
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
        <div className="btn">
          <Link to="/products">SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
