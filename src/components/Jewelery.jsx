import { useEffect, useState } from "react";
import { fetchSpecificCategoryJewelery } from "../Api/index.js";
import ProductCard from "./ProductCard.jsx";
export default function Jewelery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let productsInfo = await fetchSpecificCategoryJewelery();
      console.log("Products", productsInfo);
      setProducts(productsInfo);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>Jwelery</h1>
      <div className="productContainer">
        {products.map((product, i) => (
          <div className="productCard" key={i}>
            <div className="productCardheader">{product.category.jwellery}</div>
            <div className="productImageContainer">
              <img className="productImage" src={product.image} />
            </div>
            <div className="productCardbody">
              <div>
                $ {product.price}
                <div>{product.description}</div>
              </div>
            </div>
            <div className="productCardfooter">
              <button className="btn"> Add to Cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
