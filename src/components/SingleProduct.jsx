    import { useEffect, useState } from "react";
    import { fetchSingleProduct} from "../Api/index.js";
    
    export default function SingleProduct() {
      const [singleProduct, setSingleProduct] = useState([]);
    
      useEffect(() => {
        const getSingleProduct = async () => {
          let singleProductInfo = await  fetchSingleProduct();
          console.log("SinleProduct", singleProductInfo);
          setSingleProduct(singleProductInfo);
        };
        getSingleProduct();
      }, []);
      return (
        <div>
          <h1>Single Product</h1>
          <div className="productContainer">
            {singleProduct.map((singleProduct, i) => (
              <div className="productCard" key={i}>
                <div className="productCardheader">{singleProduct.title}</div>
                <div className="productImageContainer">
                  <img className="productImage" src={singleProduct.image} />
                </div>
                <div className="productCardbody">
                  <div>
                    {singleProduct.price}
                    <div>{singleProduct.description}</div>
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
    

