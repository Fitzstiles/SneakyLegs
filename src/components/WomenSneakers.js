import products from "./Db";
import "./productcard.css";
import WomenCard from "./WomenCard";

const WomenSneakers = () => {
  return (
    <div className="product__container">
      {products
        .filter((product) => product.gender === "f")
        .map((filteredPerson) => (
          <WomenCard key={filteredPerson.id} filteredPerson={filteredPerson} />
        ))}
    </div>
  );
};

export default WomenSneakers;
