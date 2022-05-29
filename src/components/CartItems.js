import "./cart.css";
import { useStateValue } from "./stateManagement/StateContext";
const CartItems = ({ item }) => {
  const [state, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: item.id,
    });
  };

  return (
    <div>
      <div className="leftCart">
        <div className="image">
          <img
            src={item.image}
            alt=""
            style={{ width: "100px", borderRadius: "10px" }}
          />
        </div>
        <div className="leftCart__details">
          <p>{item.name}</p>
          <p>
            <span>$</span>
            {item.price}
          </p>
          <button className="cartbtn" onClick={removeFromCart}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
