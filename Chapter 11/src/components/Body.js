import { useContext, useEffect, useState } from "react";
import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_DESKTOP } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [input, setInput] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_DESKTOP);
      const rdata = await data.json();
      const fetchRestaurants =
        rdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(fetchRestaurants);
      setFilteredRestaurants(fetchRestaurants);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!restaurants) {
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
      <div className="search-container">
        <input
          className="search"
          type="text"
          value={loggedInUser}
          placeholder="Change loggedIn Username"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="restaurants-container">
        {filteredRestaurants.map((res) => (
          <React.Fragment key={res.info.id}>
            {res.info.promoted ? (
              <RestaurantCardPromoted restaurantList={res} />
            ) : (
              <RestaurantCard restaurantList={res} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Body;
