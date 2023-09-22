import { ProductContext } from "../context/product-context.jsx";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { cart, cartItems, removeFromCart } =
    useContext(ProductContext);
  console.log(cart, cartItems);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    setTotalCost(cart.reduce(
      (acc, currentVal) =>
        acc + Number(currentVal.price) * cartItems[currentVal.id],
      0
    ));
  }, [cartItems, cart]);
 
  return (
    <div>
      {cart.length ? (
        <div>
          <h1>Items In Your Cart</h1>
          <div className="cartContainer">
            <div className="productCard">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Product Title</th>
                      <th>Product Image</th>
                      <th>Product price</th>
                      <th>Product Quantity</th>
                      <th>Total Cost for this Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.map((product, i) => (
                        <tr key={i}>
                          <td>
                            <div>
                              {product.title}: quantity {cartItems[product.id]}
                            </div>
                          </td>
                          <td>
                            <div className="productImageContainer">
                              <img
                                className="productImage"
                                src={product.image}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="productPrice">
                              ${product.price.toFixed(2)}
                            </div>
                          </td>
                          <td>
                            <div className="productQuantity">
                              {cartItems[product.id]}
                            </div>
                          </td>
                          <td>
                            <div className="totalCost">
                              ${" "}
                              {(
                                Number(cartItems[product.id]) *
                                Number(product.price)
                              ).toFixed(2)}
                            </div>
                          </td>
                          <td>
                            <div>
                              <button
                                className="removebtn"
                                onClick={() => removeFromCart(product)}
                              >
                                Remove Item
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    <tr>
                      <td>Grand Total: ${totalCost.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>No Items in the cart</h1>
        </div>
      )}
    </div>
  );
}
