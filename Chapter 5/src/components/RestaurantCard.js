const RestaurantCard = ({ restaurantList }) => {
  const { name, cuisine, image, rating, cft } = restaurantList.info;

  //Cuisines is an array of object
  const fetchedCSN = cuisine.map((csn) => csn.name);

  return (
    <div className="restaurant-cards">
      <img className="restaurant-img" src={image.url} />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p>{fetchedCSN.slice(0, 2).join(", ")}</p>
        <div className="additional-details">
          <span>{rating.aggregate_rating}⭐</span>
          <span>{restaurantList.distance}</span>
        </div>
        <p>{cft.text}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
