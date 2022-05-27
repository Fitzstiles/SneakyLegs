import products from "./Db";
import ProductCard from "./ProductsCard";
import "./productcard.css";

const Products = () => {
  return (
    <div className="AllProduct__container">
      <div className="product__bg">
        <div className="product__container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
