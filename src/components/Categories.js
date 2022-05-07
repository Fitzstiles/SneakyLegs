import styled from "styled-components";

const Categories = () => {
  return (
    <Category>
      <h1>CATEGORIES</h1>
      <div className="container">
        <div className="image__container">
          <img
            src="./images/shoe7.jpg"
            style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
            alt=""
          />
          <span>WOMEN SNEAKERS</span>
        </div>
        <div className="image__container">
          <img
            src="./images/shoeess.jpg"
            style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
            alt=""
          />
          <span>MEN SNEAKERS</span>
        </div>
        <div className="image__container">
          <img
            src="./images/shoe5.jpg"
            style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
            alt=""
          />
          <span>BEST SELLING</span>
        </div>
        <div className="image__container">
          <img
            src="./images/shoe44.jpg"
            style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
            alt=""
          />
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
    overflow: hidden;
    gap: 20px;
    height: auto;
    .image__container {
      position: relative;
      span {
        position: absolute;
        bottom: 30px;
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
