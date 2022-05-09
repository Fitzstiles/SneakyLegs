import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Featured from "./Featured";

const Home = () => {
  return (
    <div className="content">
      <Hero />
      <About />
      <Categories />
      <Featured />
    </div>
  );
};

export default Home;
