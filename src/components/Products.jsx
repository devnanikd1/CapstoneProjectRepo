import { useEffect, useState } from "react";
import { fetchProducts } from "../Api/index.js";
import NavBar from "./Navbar.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let productsInfo = await fetchProducts();
      console.log("Products", productsInfo);
      setProducts(productsInfo);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="productContainer">
        {products.map((product, i) => (
          <div className="productCard" key={i}>
            <div className="productCardheader">{product.title}</div>
            <div className="productImageContainer">
              <img className="productImage" src={product.image} />
            </div>
            <div className="productCardbody">
              <div>
                 {product.price}
                <div>{product.description}</div>
              </div>
            </div>
            <div className="productCardfooter" >
            <button className="btn"> Add to Cart </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
