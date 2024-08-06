import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import ShimmerUi from "./ShimmerUi";
import { APP_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchListOfRestaurants, setSearchListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(APP_API);
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
            <Link
              className="link"
              key={res.info.id}
              to={"/restaurant/" + res.info.id}
            >
              <RestaurantCards dataList={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
