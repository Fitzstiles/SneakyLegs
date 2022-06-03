import CartItems from "./CartItems";
import { useStateValue } from "./stateManagement/StateContext";

import "./cart.css";

const Carts = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="cart__items">
      <h2>Your cart</h2>
      <div className="cart__container">
        <div>
          {cart.map((item) => (
            <CartItems key={item._id} item={item} />
          ))}
        </div>

        <div className="right__cart">
          <h4>Subtotal ({cart?.length} items)</h4>
          <h3>Cart Total:</h3>
          <span>{cart.price}</span>
          <div className="proceed">
            <button>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
