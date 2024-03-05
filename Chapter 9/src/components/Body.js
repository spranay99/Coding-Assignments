import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.07480&lng=72.88560"
    );
    const rdata = await response.json();
    setRestaurants(
      rdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      rdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search Restaurants/Food..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurants-container">
        {filteredRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard restaurantList={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
