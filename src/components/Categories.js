import { Link } from "react-router-dom";
import styled from "styled-components";
import items from "./Db";

const Categories = () => {
  return (
    <Category>
      <h1>CATEGORIES</h1>
      <Link to="/womenshoe">
        <div className="img-container">
          <div className="single__image">
            <img className="main__image" src="./images/shoe7.jpg" alt="" />
          </div>
          <div className="productname">
            <p>Women shoes</p>
          </div>
        </div>
      </Link>
    </Category>
  );
};

export default Categories;

const Category = styled.div`
  max-width: 1000px;
  margin: auto;

  h1 {
    text-align: center;
    font-size: 16px;
    max-height: 300px;
    margin-top: 30px;
    color: black;
    /* font-weight: 200; */
  }

  .img-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: auto;
    overflow-x: hidden;
    margin-top: 30px;
    .main__image {
      position: relative;
    }
    .productname {
      position: absolute;
      margin-top: 290px;
      margin-right: 160px;
      background-color: maroon;
      border-radius: 10px;
      p {
        color: white;
        padding: 0 20px;
      }
    }

    img {
      max-width: 300px;
      padding: 20px;
      transition: 0.3s ease-in-out;
      border-radius: 40px;
      /* :hover {
        transform: translateY(-10px);
      } */
    }
  }
`;
