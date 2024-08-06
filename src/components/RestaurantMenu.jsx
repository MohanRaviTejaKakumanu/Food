import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    // console.log(json);
    setRestaurantMenu(json.data);
  };

  console.log("body rendered");
  console.log(restaurantMenu);

  if (restaurantMenu === null) {
    return <ShimmerUi />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, totalRatingsString } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card;
  console.log(itemCards);
  return (
    <div className="restaurant-menu-card">
      <div className="restaurant-menu-card-details">
        <div>
          <h1>
            {name}- {costForTwoMessage}
          </h1>
        </div>
        <div>
          {avgRating} stars ({totalRatingsString})
        </div>
        <div>{cuisines.join(", ")}</div>
        <h1>Menu</h1>
        <div className="items">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
