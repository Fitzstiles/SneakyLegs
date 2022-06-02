import { useStateValue } from "./stateManagement/StateContext";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./productcard.css";

const Women = ({ filteredPerson }) => {
  const [state, dispatch] = useStateValue();

  const addTocart = () => {
    // totalUpdate();
    dispatch({
      type: "ADD_TO_CART",
      payload: filteredPerson,
    });
  };
  return (
    <div className="productCard__wrapper">
      <div className="productCard__image">
        <img src={filteredPerson.image} alt="" />
        <FavoriteBorderIcon
          style={{ position: "absolute", top: 20, right: 20 }}
        />
        <p>
          <small style={{ color: "white" }}>$</small>
          {filteredPerson.price}
        </p>
      </div>
      <div className="productCard__details">
        <h4>{filteredPerson.name}</h4>
        <button onClick={addTocart}>Add to cart</button>
        <div className="rating">
          {Array(filteredPerson.rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon style={{ fill: "#F7AB09" }} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
