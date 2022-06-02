import "./productcard.css";
import { useStateValue } from "./stateManagement/StateContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProductCard = ({ product }) => {
  const [state, dispatch] = useStateValue();

  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="productCard__wrapper">
      <div className="productCard__image">
        <img src={product.image} alt="" />
        <FavoriteBorderIcon
          style={{ position: "absolute", top: 20, right: 20 }}
        />
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
