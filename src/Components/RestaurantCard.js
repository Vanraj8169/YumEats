import { IMG_CDN_URL } from "./config";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="imgCard" />
      <p className="card-Names">{name}</p>
      <p className="cuisines-names">{cuisines.join(",")}</p>
      <div className="rating-container">
        <span className="avgRating"> ⭐ {avgRating}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
