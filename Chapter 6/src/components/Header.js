import { useState } from "react";

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
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
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
