import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "../Api";
import { ShoppingCart } from "phosphor-react";

export default function NavBar({ token, setToken, setCategory }) {
  const [categories, setCategories] = useState("");
  useEffect(() => {
    const getCategories = async () => {
      let categoriesInfo = await fetchCategories();
      console.log("Categories", categoriesInfo);
      setCategories(categoriesInfo);
    };
    getCategories();
  }, []);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    setCategory("");
    navigate("/");
  }

  function handleClick() {
    setCategory("");
  }

  function handleChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="navbar">
      <div className="links">
        <Link onClick={handleClick} to="/">
          {" "}
          Home{" "}
        </Link>
        <Link onClick={handleClick} to="/products">
          Products{" "}
        </Link>
        <Link to="/products" className="dropdown">
          Categories
          <select className="dropdown-content" onChange={handleChange}>
            {/* <option value={""}>View All Products</option> */}
            {categories &&
              categories.map((category, i) => (
                <option value={category} key={i}>
                  {category}
                </option>
              ))}
          </select>
        </Link>
        <Link onClick={handleClick} to="/carts">
          {" "}
          Cart{" "}
        </Link>
        <ShoppingCart size={32} />
        {token ? (
          <Link onClick={handleLogout}>Logout</Link>
        ) : (
          <Link onClick={handleClick} to="/login">
            {" "}
            Login{" "}
          </Link>
        )}
      </div>
    </div>
  );
}
