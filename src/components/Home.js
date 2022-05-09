import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Featured from "./Featured";
import Testimonial from "./Testimonials";

const Home = () => {
  return (
    <div className="content">
      <Hero />
      <About />
      <Categories />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
