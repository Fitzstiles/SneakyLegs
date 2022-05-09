import styled from "styled-components";
const About = () => {
  return (
    <Abouts>
      <div className="banner">
        <h1>Why shop sneakylegs</h1>
      </div>

      <div className="container">
        <div className="small__container">
          <div className="icons">
            <div className="icons__bg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
              </svg>
            </div>
          </div>
          <h3>Quick Delivery</h3>
          <div className="text">
            <p>Get your items shipped to you within minutes</p>
          </div>
        </div>
        <div className="small__container">
          <div className="icons">
            <div className="icons__bg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
              </svg>
            </div>
          </div>
          <h3>SECURED PAYMENT</h3>
          <div className="text">
            <p>Get your items shipped to you within minutes</p>
          </div>
        </div>

        <div className="small__container">
          <div className="icons">
            <div className="icons__bg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z"></path>
              </svg>
            </div>
          </div>
          <h3>AUTHENCITY GUARANTEED</h3>
          <div className="text">
            <p>Get your items shipped to you within minutes</p>
          </div>
        </div>
      </div>
    </Abouts>
  );
};

export default About;

const Abouts = styled.div`
  padding: 30px 0;
  background-color: #f6f6f6;
  width: auto;
  .banner {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    h1 {
      font-weight: 200;
      color: black;
      font-size: 20px;
      padding-top: 20px;
    }
  }
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @media (max-width: 830px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .small__container {
    line-height: 25px;
    text-align: center;
    margin: 10px 0;
    max-width: 200px;

    h3 {
      color: black;
      margin: 10px 0;
    }
    p {
      font-size: 20px;
    }
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;

      .icons__bg {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: lightgrey;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
