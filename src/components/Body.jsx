import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchListOfRestaurants, setSearchListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.313286848460436&lng=80.43512453809817&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setSearchListOfRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topRated = () => {
    const filteredData = listOfRestaurants.filter((x) => {
      return x.info.avgRating > 4.2;
    });
    setSearchListOfRestaurants(filteredData);
  };

  const search = () => {
    const filteredSearch = listOfRestaurants.filter((e) => {
      return e.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchListOfRestaurants(filteredSearch);
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            className="input-search"
            type="text"
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="input-submit" onClick={search}>
            search
          </button>
        </div>
        <div className="top-rated">
          <button onClick={topRated}>Top-RatedRestaurant</button>
        </div>
      </div>
      <div className="restaurant-container">
        <div className="restaurant-cards">
          {searchListOfRestaurants.map((res) => (
            <RestaurantCards key={res.info.id} dataList={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
