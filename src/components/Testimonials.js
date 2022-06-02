import "./testimonials.css";
const Testimonial = () => {
  return (
    <div className="comment__container">
      <h2>TESTIMONIALS</h2>
      <div className="comment__session">
        <div data-aos="fade-right" className="testimonial__container">
          <div className="testimonial__header">
            <div className="comment__image">
              <img
                src="./images/user-2.png"
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                alt=""
              />
            </div>
            <div className="comment__details">
              <h4>Joseph BLaze</h4>
              <p>Uganda</p>
            </div>
          </div>
          <p>
            I really love the sneakers I bought from this store, very long
            lasting and pretty inexpensive
          </p>
        </div>
        <div data-aos="fade-right" className="testimonial__container">
          <div className="testimonial__header">
            <div className="comment__image">
              <img
                src="./images/user-1.png"
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                alt=""
              />
            </div>
            <div data-aos="fade-right" className="comment__details">
              <h4>Bolatito</h4>
              <p>Nigeria</p>
            </div>
          </div>
          <p>
            They deliver expressly, got my sneakers the same day I placed the
            order. also love how original the product is.
          </p>
        </div>
        <div data-aos="fade-right" className="testimonial__container">
          <div className="testimonial__header">
            <div className="comment__image">
              <img
                src="./images/user-3.png"
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                alt=""
              />
            </div>
            <div className="comment__details">
              <h4>Kwame Ama</h4>
              <p>Ghana</p>
            </div>
          </div>
          <p>
            This is my go to plug for all things sneakers cause their customer
            service is top notch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
