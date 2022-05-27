import "./productcard.css";
import formatCurrency from "format-currency";
import { useStateValue } from "./stateManagement/StateContext";

const ProductCard = ({ product }) => {
  const [state, dispatch] = useStateValue();
  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const opts = { format: "%s%v", Symbol: "$" };
  return (
    <div className="productCard__wrapper">
      <div className="productCard__image">
        <img src={product.image} alt="" />
        <span>love</span>
        <p>{formatCurrency(`${product.price}`, opts)}</p>
      </div>
      <div className="productCard__details">
        <h4>{product.name}</h4>
        <button onClick={addTocart}>Add to cart</button>
        <div className="rating">*****</div>
      </div>
    </div>
  );
};

export default ProductCard;
