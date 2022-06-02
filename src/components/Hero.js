import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { motion } from "framer-motion";
import "./hero.css";
const HeroSection = () => {
  return (
    <div className="hero__container">
      <div className="bg__img">
        <img src="./images/hero_bg.jpg" alt="" />
      </div>
      <div className="textarea">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bold__text"
        >
          <h1>
            Run Your World With the Right <span>Shoes</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="middle__text"
        >
          <p>
            Never be caught unfresh at any moment, follow the ever evolving
            fashion and get the right sneakers today.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 3, type: "tween" }}
          className="btn"
        >
          <Link to="/products">
            <LocalMallIcon style={{ fill: "#c55e20" }} />
            SHOP NOW
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
