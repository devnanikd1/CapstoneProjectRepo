import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Categories from "./components/Categories";
import Jewelery from "./components/Jewelery";
import ProductsLimit from "./components/ProductsLimit";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";
import { ProductContextProvider } from "./context/product-context";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <>
      <div>
        <ProductContextProvider>
           <Navbar token={token} setToken={setToken} setCategory={setCategory} /> 
          <Routes>
            <Route path="/" element={<Products />} />
            <Route
              path="/products"
              element={<Products category={category} />}
            />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/products/categories" element={<Categories />} />
            <Route path="/products/category/jewelery" element={<Jewelery />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/products?limit" element={<ProductsLimit />} />
            <Route
              path="/login"
              element={<Login setToken={setToken} token={token} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/users"
              element={<Users setToken={setToken} token={token} />}
            />
            <Route
              path="/users/:id"
              element={<SingleUser setToken={setToken} token={token} />}
            />
          </Routes>
        </ProductContextProvider>
      </div>
    </>
  );
}

export default App;
