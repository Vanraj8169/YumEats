import { IMG_CDN_URL } from "./config";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="imgCard" />
      <p className="card-Names">{name}</p>
      <p className="cuisines-names">{cuisines.join(",")}</p>
      <h4>
        ⭐ <span className="avgRating">{avgRating}</span>{" "}
      </h4>
    </div>
  );
};

export default RestaurantCard;
