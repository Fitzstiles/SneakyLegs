import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Category>
      <h1>CATEGORIES</h1>
      <div className="container">
        <Link to="/WomenSneakers">
          <div className="image__container">
            <img src="./images/shoe7.jpg" alt="" />
            <span>WOMEN SNEAKERS</span>
          </div>
        </Link>
        <Link to="/mensneakers">
          <div className="image__container">
            <img src="./images/shoeess.jpg" alt="" />
            <span>MEN SNEAKERS</span>
          </div>
        </Link>
        <Link to="/bestselling">
          <div className="image__container">
            <img src="./images/shoe5.jpg" alt="" />
            <span>BEST SELLING</span>
          </div>
        </Link>
        <div className="image__container">
          <img src="./images/shoe44.jpg" alt="" />
          <span> NEW ARRIVALS</span>
        </div>
      </div>
    </Category>
  );
};

export default Categories;

const Category = styled.div`
  background-color: #f5f5f5;
  h1 {
    text-align: center;
    margin: 0;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
    margin: auto;
    padding-top: 40px;
    overflow: hidden;
    gap: 20px;
    height: auto;
    .image__container {
      position: relative;
      img {
        width: 300px;
        margin: 10px;
        border-radius: 20px;
        transition: 0.3s ease-in-out;
        :hover {
          transform: translateY(-20px);
        }
      }
      span {
        position: absolute;
        bottom: 35px;
        left: 10px;
        z-index: 1;
        color: white;
        background-color: maroon;
        padding: 10px 20px;
        border-radius: 10px;
      }
    }
  }
`;
