import { Link } from "react-router-dom";

export default function NavBar() {
return (
    <nav>
      <ul>
        <li>
          <Link to="/products"> Products </Link>
        </li>
        <li>
          <Link to="/cart"> Cart </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
         <br></br>
       {/* {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button>Login</button>
        )} */}
      </ul>
    </nav>
  );
}
