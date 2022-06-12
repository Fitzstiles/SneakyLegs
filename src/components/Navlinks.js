import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
const Navlinks = ({ HandleCloseOnClicked }) => {
  return (
    <MobileLinks>
      <AnimatePresence>
        <motion.ul animate={{ y: 10 }}>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={HandleCloseOnClicked}
          >
            <Link to="/">Home</Link>
          </motion.li>

          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={HandleCloseOnClicked}
          >
            <Link to="/products">Products</Link>
          </motion.li>

          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={HandleCloseOnClicked}
          >
            <a href="#featured">Featured</a>
          </motion.li>

          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={HandleCloseOnClicked}
          >
            <a href="#about">About us</a>
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </MobileLinks>
  );
};

export default Navlinks;

const MobileLinks = styled.div`
  position: absolute;
  background-color: #f5f5f5;
  border-top: 1px solid #c55e20;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  left: 0;
  top: 70px;
  height: 100vh;
  width: 100%;
  z-index: 100;
  transition: 0.5s;

  ul {
    margin-top: 30px;
  }

  ul li {
    line-height: 90px;
    font-size: 30px;
    font-weight: bold;
    width: 100%;
    overflow: hidden;
  }
`;
