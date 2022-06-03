import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Category data-aos="fade-up">
      <h2>CATEGORIES</h2>
      <div data-aos="fade-up" className="container">
        <Link to="/WomenSneakers">
          <div className="image__container">
            <img
              src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJzJTIwd29tZW58ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <span style={{ backgroundColor: "#CDAFA5" }}>WOMEN SNEAKERS</span>
          </div>
        </Link>
        <Link to="/mensneakers">
          <div data-aos="fade-up" className="image__container">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%27"
              alt=""
            />
            <span style={{ backgroundColor: "#FFFFFF" }}>MEN SNEAKERS</span>
          </div>
        </Link>
        <Link to="/bestselling">
          <div data-aos="fade-up" className="image__container">
            <img
              src="https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <span style={{ backgroundColor: "#A4A4A4" }}>BEST SELLING</span>
          </div>
        </Link>
        <div data-aos="fade-up" className="image__container">
          <img
            src="https://images.unsplash.com/photo-1608319294852-d87737e8e46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
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
