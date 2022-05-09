import { Link } from "react-router-dom";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <h2>FEATURED ITEM</h2>
      <div className="featured__container">
        <div className="featured__left">
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
            slip on style. these ...see more
          </p>
          <p>
            PRICE: <strong>$451.00</strong>
          </p>
          <Link to="/"> BUY NOW</Link>
          <button>ADD TO CART</button>
        </div>
        <div className="right">
          <div className="featured__image">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
