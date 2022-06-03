import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./stateManagement/StateContext";
import "./mobilecart.css";
const MobileCart = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="mobilecart">
      <ShoppingCartIcon
        style={{
          fontSize: 50,
          position: "fixed",
          right: 20,
          zIndex: 1000,
          bottom: 150,
        }}
      />
      <span>{cart?.length}</span>
    </div>
  );
};

export default MobileCart;
