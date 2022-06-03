import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./stateManagement/StateContext";
import "./mobilecart.css";
import { Link } from "react-router-dom";
const MobileCart = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="mobilecart">
      <Link to="/cart">
        <ShoppingCartIcon
          style={{
            fontSize: 20,
            fill: "white",
          }}
        />
        <span>{cart?.length}</span>
      </Link>
    </div>
  );
};

export default MobileCart;
