import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Featured from "./Featured";
import Testimonial from "./Testimonials";
import { featuredItems } from "./Db";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Categories />
      <Featured featuredItems={featuredItems} />
      <Testimonial />
    </div>
  );
};

export default Home;
