import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navlinks = ({ HandleCloseOnClicked }) => {
  const animateFrom = { x: 200 };
  const animateTo = { x: 0 };
  const exit = { x: -200 };
  return (
    <MobileLinks>
      <motion.ul
        initial={animateFrom}
        animate={animateTo}
        transition={{ duration: 0.4 }}
        exit={exit}
      >
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={HandleCloseOnClicked}
        >
          <Link to="/">Home</Link>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={HandleCloseOnClicked}
        >
          <Link to="/products">Products</Link>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.7, delay: 0.1 }}
          onClick={HandleCloseOnClicked}
        >
          <Link to="/">Featured</Link>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.8, delay: 0.1 }}
          exit={exit}
          onClick={HandleCloseOnClicked}
        >
          <Link to="/">About us</Link>
        </motion.li>
      </motion.ul>
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
  height: 100%;
  width: 100%;
  z-index: 1;
  ul {
    margin-top: 30px;
  }

  ul li {
    line-height: 90px;
    font-size: 30px;
    font-weight: bold;
    width: 100%;
  }
`;
