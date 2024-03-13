import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Sign In");
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
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
            <li>
              <Link to="/grocery">Grocery</Link>
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
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
