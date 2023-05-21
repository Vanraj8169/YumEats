import RestaurantCard from "./RestaurantCard";
import { restrauntList } from "./config";
import React, { useState } from "react";

function filterList(restaurant, searchText) {
  const filteredData = restaurant.filter((res) =>
    res.data.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setsearchText] = useState();
  const [restaurant, setrestaurant] = useState(restrauntList);
  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const filterdData = filterList(restaurant, searchText);
          setrestaurant(filterdData);
        }}
      >
        Search
      </button>
      <div className="restraunt-list">
        {restrauntList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
