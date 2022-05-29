import "./productcard.css";
import { useStateValue } from "./stateManagement/StateContext";

const ProductCard = ({ product }) => {
  const [state, dispatch] = useStateValue();

  const addTocart = () => {
    // totalUpdate();
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="productCard__wrapper">
      <div className="productCard__image">
        <img src={product.image} alt="" />
        <span>love</span>
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
              <p>*</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
