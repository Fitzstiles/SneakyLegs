import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Category data-aos="fade-up">
      <h2>CATEGORIES</h2>
      <div data-aos="fade-up" className="container">
        <Link to="/WomenSneakers">
          <div className="image__container">
            <img src="./images/shoe7.jpg" alt="" />
            <span style={{ backgroundColor: "#CDAFA5" }}>WOMEN SNEAKERS</span>
          </div>
        </Link>
        <Link to="/mensneakers">
          <div data-aos="fade-up" className="image__container">
            <img src="./images/shoeess.jpg" alt="" />
            <span style={{ backgroundColor: "#FFFFFF" }}>MEN SNEAKERS</span>
          </div>
        </Link>
        <Link to="/bestselling">
          <div data-aos="fade-up" className="image__container">
            <img src="./images/shoe5.jpg" alt="" />
            <span style={{ backgroundColor: "#A4A4A4" }}>BEST SELLING</span>
          </div>
        </Link>
        <div data-aos="fade-up" className="image__container">
          <img src="./images/shoe44.jpg" alt="" />
          <span style={{ backgroundColor: "#AC8067" }}> NEW ARRIVALS</span>
        </div>
      </div>
    </Category>
  );
};

export default Categories;

const Category = styled.div`
  background-color: #f5f5f5;
  h2 {
    text-align: center;
    margin: 0;
    font-weight: 200;
    color: black;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
    padding-top: 20px;
    overflow: hidden;
    height: auto;
    .image__container {
      position: relative;
      width: 300px;
      height: 200px;
      padding: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 10px;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
        :hover {
          transform: scale(1.1);
        }
      }
      span {
        position: absolute;
        bottom: 40px;
        font-size: 12px;
        left: 30px;
        z-index: 1;
        color: black;
        padding: 5px 10px;
        border-radius: 2px;
      }
    }
  }
`;
