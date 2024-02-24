import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [input, setInput] = useState("");

  const filterData = (input, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(input.toLowerCase())
    );
    return filteredRestaurants;
  };

  return (
    <>
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
              const filteredData = filterData(input, restaurants);
              setRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurants-container">
          {restaurants.map((res) => {
            return <RestaurantCard key={res.info.resId} restaurantList={res} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
