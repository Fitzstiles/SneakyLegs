import { useStateValue } from "./stateManagement/StateContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./productcard.css";
import { useState } from "react";

const MenCard = ({ filteredPerson }) => {
  const [state, dispatch] = useStateValue();
  const [liked, setLiked] = useState(!false);

  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: filteredPerson,
    });
  };
  return (
    <div className="productCard__wrapper">
      <div className="productCard__image">
        <img src={filteredPerson.image} alt="" />
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

export default MenCard;
