import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { motion } from "framer-motion";
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero__container">
      <div className="bg__img">
        <img
          src="https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
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
          transition={{ delay: 1, duration: 3 }}
          className="btn"
        >
          <Link to="/products">
            <LocalMallIcon style={{ fill: "#c55e20", fontSize: 15 }} />
            SHOP NOW
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
