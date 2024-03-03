import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Sign In");

  return (
    <nav>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
            <a
              className="signin"
              onClick={() => {
                login === "Sign In"
                  ? setLogin("Sign Out")
                  : setLogin("Sign In");
              }}
            >
              {login}
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
