import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofrestaurant, setListofrestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5721353&lng=77.2139292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await response.json();

      let restaurants = [];
      for (let card of json?.data?.cards || []) {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

      setListofrestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-red-600 text-center mt-20 text-2xl font-bold">
        🔴 You are offline, Please check your internet connection!!
      </h1>
    );
  }

  return listofrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            onClick={() => {
              const filtered = listofrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            onClick={() => {
              const topRated = listofrestaurant.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setFilteredRestaurant(topRated);
            }}
          >
            Top Rated
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            onClick={() => setFilteredRestaurant(listofrestaurant)}
          >
            Show All
          </button>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
