const Header = () => {
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
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
