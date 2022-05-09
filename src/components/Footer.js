import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <div className="icon">
        <div className="icon__bg">
          <p>SL</p>
        </div>
        <a href="/">SneakyLegs</a>
      </div>
      <div className="content">
        <div className="footer__items">
          <div className="contact__us">
            <h3>CONTACT US</h3>
            <p>15 Palm Hall Street, Lekki phase 1,Lagos,Nigeria</p>
            <p>
              <img src="" alt="" />
              (+234) 1234 5678)
            </p>
          </div>
        </div>
        <div className="company_info">
          <h3>COMPANY</h3>
          <p>Products</p>
          <p>Features</p>
          <p>About us</p>
        </div>
        <div className="links">
          <h3>QUICK LINKS</h3>
          <p>Faq</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div className="socials">
          <h3>Reach us on our social media</h3>
          <div className="social__icon">
            <Link to="/">
              <img src="./images/fb.png" alt="" />
            </Link>
            <Link to="/">
              <img src="./images/insta.png" alt="" />
            </Link>
            <Link to="/">
              <img
                className="twitter__logo"
                src="./images/twitterlogo.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  background-color: black;
  padding: 20px 0;
  line-height: 40px;
  font-size: 15px;
  height: 100%;
  .icon {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-left: 50px;
  }
  .icon__bg {
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #c55e20;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }

  .content {
    display: flex;
    justify-content: space-around;
    @media (max-width: 830px) {
      display: block;
      margin: 40px;
    }
  }

  .social__icon {
    width: 120px;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
  .twitter__logo {
    border-radius: 10px;
  }
`;
