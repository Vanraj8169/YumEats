import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

function filterList(restaurant, searchText) {
  const filteredData = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setsearchText] = useState();
  const [restaurant, setrestaurant] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = getRestaurants();
    // setIsLoading(false);
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
    );
    const json = await data.json();
    setrestaurant(json?.data?.success?.cards[0]?.favourite?.cards);
  }
  return restaurant.length === 0 ? (
    <>
      <div className="restraunt-list">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  ) : (
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
          const data = filterList(restaurant, searchText);
          setrestaurant(data);
        }}
      >
        Search
      </button>
      <div className="restraunt-list">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
