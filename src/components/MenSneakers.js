import products from "./Db";
import MenCard from "./Mencard";
import "./productcard.css";
const MenSneakers = () => {
  return (
    <div className="product__container">
      {products
        .filter((product) => product.gender === "m")
        .map((filteredPerson) => (
          <MenCard key={filteredPerson.id} filteredPerson={filteredPerson} />
        ))}
    </div>
  );
};

export default MenSneakers;
