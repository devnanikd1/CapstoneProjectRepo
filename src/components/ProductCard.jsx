import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchSingleProduct } from "../Api/index.js";
import { ProductContext } from "../context/product-context.jsx";

export default function ProductCard({ product, i }) {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const { addToCart } = useContext(ProductContext);

  async function getItem(productid) {
    let itemInfo = await fetchSingleProduct(productid);
    console.log("Items", itemInfo);
    setItem(item);
  }
  return (
    <div className="productCard" key={i}>
      <div className="productCardheader">{product.title}</div>
      <div className="productImageContainer">
        <img className="productImage" src={product.image} />
      </div>
      <div className="productCardbody">
        <div> Description: {product.description}</div>
        <div> Price: $ {product.price}</div>
      </div>
      <div className="productCardfooter">
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart{" "}
        </button>
        <button
          className="btn"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Item Details
        </button>
      </div>
    </div>
  );
}
