import { Link } from "react-router-dom";
import "./featured.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useStateValue } from "./stateManagement/StateContext";

const Featured = ({ featuredItems }) => {
  const [state, dispatch] = useStateValue();
  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: featuredItems,
    });
  };
  const [liked, setLiked] = useState(false);
  return (
    <div data-aos="fade-up" className="featured" id="featured">
      <h2>FEATURED ITEM</h2>
      <div className="featured__container">
        <div data-aos="fade-up" className="featured__left">
          <h3>{featuredItems.season}</h3>
          <h5>{featuredItems.name}</h5>
          <p>
            Also nicknamed "sand" sneakers, it doesn't get more futuristic than
            the RNRR "sand" sneaker from Adidas YEEZY.crafted from EVA foam and
            harvested algae, this pair is ultra lightweight and one of the
            market most progressive step out in unique style
          </p>
          <p>
            Originally made of rubber, with a perforated design,almond toe and
            slip on style.
          </p>
          <p>
            PRICE: <strong>${featuredItems.price}</strong>
          </p>
          <Link to="/"> BUY NOW</Link>
          <button onClick={addTocart}>ADD TO CART</button>
        </div>
        <div data-aos="zoom-in" className="right">
          <div className="featured__image">
            <div onClick={() => setLiked(!liked)} className="liked__container">
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
            <img src={featuredItems.image} alt="" />
          </div>
          <div className="bottom__image">
            <div className="smallImg__container">
              <img
                src="https://cdn-images.farfetch-contents.com/18/13/06/60/18130660_38865231_480.jpg"
                alt=""
              />
            </div>
            <div className="smallImg__container">
              <img
                src="https://cdn-images.farfetch-contents.com/16/89/96/08/16899608_33544113_480.jpg"
                alt=""
              />
            </div>
            <div className="smallImg__container">
              <img
                src="https://cdn-images.farfetch-contents.com/17/71/43/51/17714351_37240424_480.jpg"
                alt=""
              />
            </div>
            <div className="smallImg__container">
              <img
                src="https://cdn-images.farfetch-contents.com/16/65/80/90/16658090_32553873_480.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
