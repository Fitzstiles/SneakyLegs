import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navlinks = ({ HandleCloseOnClicked }) => {
  return (
    <MobileLinks>
      <ul>
        <li onClick={HandleCloseOnClicked}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={HandleCloseOnClicked}>
          <Link to="/products">Products</Link>
        </li>

        <li onClick={HandleCloseOnClicked}>
          <a href="#featured">Featured</a>
        </li>

        <li onClick={HandleCloseOnClicked}>
          <a href="#about">About us</a>
        </li>
      </ul>
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
