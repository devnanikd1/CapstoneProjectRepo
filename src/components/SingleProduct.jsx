import { useEffect, useState, useContext } from "react";
import { fetchSingleProduct } from "../Api/index.js";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/product-context.jsx";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  const { addToCart } = useContext(ProductContext);

  useEffect(() => {
    const getSingleProduct = async () => {
      let singleProductInfo = await fetchSingleProduct(id);
      console.log("SinleProduct", singleProductInfo);
      setSingleProduct(singleProductInfo);
    };
    getSingleProduct();
  }, []);
  const product = {
    title: singleProduct.title,
    id: singleProduct.id,
    image: singleProduct.image,
    description: singleProduct.description,
    price: singleProduct.price,
  };
  return (
    <div>
      <div className="productCardheader">{singleProduct.title}</div>
      <div className="productContainer">
        <div className="productCard">
          <div className="productImageContainer">
            <img className="productImage" src={singleProduct.image} />
          </div>
          <div className="productCardbody">
            <div>
              <div>Description: {singleProduct.description}</div>
              <div>Price: ${singleProduct.price}</div>
              <div>
                Ratings: {singleProduct.rating && singleProduct.rating.rate}
              </div>
              <div>
                Count: {singleProduct.rating && singleProduct.rating.count}
              </div>
            </div>
          </div>
          <div className="productCardfooter">
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
