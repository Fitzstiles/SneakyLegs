import "./productcard.css";
import { useStateValue } from "./stateManagement/StateContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [state, dispatch] = useStateValue();
  const [liked, setLiked] = useState(false);
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
        <div className="heart__icon" onClick={() => setLiked(!liked)}>
          {liked ? (
            <FavoriteIcon
              style={{
                fill: "red",
              }}
            />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>

        <p>
          <small style={{ color: "white" }}>$</small>
          {product.price}
        </p>
      </div>
      <div className="productCard__details">
        <div className="productcard__name">
          <h4>{product.name}</h4>
        </div>

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
