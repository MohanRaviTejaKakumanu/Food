import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { dataList } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, id, avgRating } =
    dataList?.info;

  const { deliveryTime } = dataList?.info?.sla;
  return (
    <div className="cards">
      <div className="card-details">
        <img className="food-img" src={CDN_URL + cloudinaryImageId}></img>
        <div className="res-name">{name}</div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div>{costForTwo}</div>
        <div>{avgRating} Stars</div>
        <div>{deliveryTime} Minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCards;
