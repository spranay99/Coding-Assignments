import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const resId = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" +
        resId
    );

    const menu = await response.json();
    setRestaurantMenu(menu.data);
  };

  const { name, avgRating, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <>
      <h1>{name}</h1>
      <h2>
        {avgRating} - {costForTwoMessage}
      </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
