import { Link } from "react-router-dom";
import "./featured.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Featured = () => {
  return (
    <div data-aos="fade-up" className="featured" id="featured">
      <h2>FEATURED ITEM</h2>
      <div className="featured__container">
        <div data-aos="fade-up" className="featured__left">
          <h3>New season</h3>
          <h5>Adidas YEEZY</h5>
          <p>
            Also nicknamed "sand" sneakers, it doesn't get more futuristic than
            the RNRR "sand" sneaker froms Adidas YEEZY.crafted from EVA foam and
            harvested algae, this pair is ultra lightweight and one of the
            market most progressive step out in unique style
          </p>
          <p>
            Originally made of rubber, with a perforated design,almond toe and
            slip on style.
          </p>
          <p>
            PRICE: <strong>$451.00</strong>
          </p>
          <Link to="/"> BUY NOW</Link>
          <button>ADD TO CART</button>
        </div>
        <div data-aos="zoom-in" className="right">
          <div className="featured__image">
            <FavoriteBorderIcon />
            <img
              src="https://cdn-images.farfetch-contents.com/16/65/80/89/16658089_32552931_480.jpg"
              style={{
                width: "50%",
                height: "auto",
                borderRadius: "20px",
                position: "absolute",
                bottom: "10px",
              }}
              alt=""
            />
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
