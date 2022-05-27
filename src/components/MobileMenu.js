import styled from "styled-components";
import { useState } from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [open, setopen] = useState(false);
  const toggleNav = (
    <img
      src="./images/hamburger.png"
      width={"50px"}
      onClick={() => setopen(!open)}
      alt=""
    />
  );

  const closeNav = (
    <img
      src="./images/close.png"
      style={{ width: "25px", marginTop: "10px" }}
      onClick={() => setopen(!open)}
      alt=""
    />
  );

  const HandleCloseOnClicked = () => setopen(false);
  return (
    <Mobilenav>
      <Link to="/">
        <div className="small__container">
          <div className="logo">
            <div className="logo_bg">
              <p>S</p>
              <span>L</span>
            </div>
            <small>sneakylegs</small>
          </div>
        </div>
      </Link>

      <div className="handleClicks">{open ? closeNav : toggleNav}</div>

      {open && (
        <Navlinks mobile={true} HandleCloseOnClicked={HandleCloseOnClicked} />
      )}
    </Mobilenav>
  );
};

export default MobileMenu;

const Mobilenav = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 10px;
  height: 50px;
  width: auto;
  display: none;
  background-color: #f5f5f5;
  @media (max-width: 775px) {
    display: block;
  }
  .small__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-left: 20px;
  }
  .logo_bg {
    height: 40px;
    width: 40px;
    background-color: #c55e20;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: white;
    }
    span {
      color: white;
      margin-top: 8px;
    }
  }
  .handleClicks {
    position: absolute;
    right: 10px;
    top: 6px;
    z-index: 99;
  }
`;
