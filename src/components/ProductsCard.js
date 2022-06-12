import "./productcard.css";
import { useStateValue } from "./stateManagement/StateContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [state, dispatch] = useStateValue();
  const [liked, setLiked] = useState(!false);
  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div data-aos="fade-up" className="productCard__wrapper">
      <div className="productCard__image">
        <img src={product.image} alt="" />
        {liked ? (
          <FavoriteBorderIcon
            onClick={() => setLiked(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 10,
              cursor: "pointer",
              fontSize: 30,
            }}
          />
        ) : (
          <FavoriteIcon
            onClick={() => setLiked(true)}
            style={{
              position: "absolute",
              top: 20,
              right: 10,
              cursor: "pointer",
              fill: "red",
              fontSize: 30,
            }}
          />
        )}

        <p>
          <small style={{ color: "white" }}>$</small>
          {product.price}
        </p>
      </div>
      <div className="productCard__details">
        <h4>{product.name}</h4>
        <button onClick={addTocart}>Add to cart</button>
        <div className="rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon style={{ fill: "#F7AB09" }} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
