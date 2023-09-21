import { useEffect, useState } from "react";
import { fetchProducts } from "../Api/index.js";
import ProductCard from "./ProductCard.jsx";

export default function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let productsInfo = await fetchProducts();
      setProducts(productsInfo);
    };
    getProducts();
  }, []);

  const filterProducts = (product) => {
    if (category) {
      return product.category === category;
    }
    return true;
  };
  return (
    <div style={{ textTransform: "capitalize" }}>
      <h1>{category ? category : "Products"}</h1>
      <div className="productContainer">
        {products.filter(filterProducts).map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </div>
  );
}
