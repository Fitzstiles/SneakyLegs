import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateManagement/StateContext";

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <Navigation>
      <Link to="/">
        <div className="icon">
          <div className="icon__bg">
            <p>S</p>
            <span>L</span>
          </div>
          <small>sneakylegs</small>
        </div>
      </Link>

      <div className="nav__items">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <a href="#featured">Featured</a>
        <a href="#about">About us</a>

        <div className="input__section">
          <input type="text" placeholder="Search" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
          </svg>
        </div>
        <div className="icons">
          <Link to="/cart">
            <div className="cart">
              <img src="./images/cart.png" width={"20px"} alt="" />
              <span>{cart?.length}</span>
            </div>
          </Link>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJ5MygTLp9djg2JFzViPzoMU5p_5obekERQ&usqp=CAU"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              margin: "0",
            }}
            alt=""
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Header;

const Navigation = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  height: 30px;
  width: auto;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media (max-width: 775px) {
    display: none;
  }

  .icon {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-left: 50px;
  }
  .icon__bg {
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
  .nav__items {
    display: flex;
    align-items: center;
    a {
      margin-right: 10px;
      position: relative;
      :hover {
        color: #c55e20;
      }
    }
    .input__section {
      border-radius: 20px;
      padding: 8px 10px;
      background-color: #eeeeee;
      margin-right: 10px;
    }
    input {
      outline: none;
      border: none;
      background-color: #eeeeee;
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 3px;
      .cart {
        position: relative;
        span {
          text-align: center;
          position: absolute;
          top: -8px;
          left: -4px;
          background-color: #e52a21;
          color: white;
          width: 15px;
          border-radius: 50%;
          font-size: 10px;
        }
      }
    }
    .icons > img {
      margin-left: 10px;
    }
  }
`;
