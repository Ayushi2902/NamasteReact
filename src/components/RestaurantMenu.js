import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [resInfo, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?" +
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5721353&lng=77.2139292&restaurantId=200760",
      );

      const json = await data.json();

      // IMPORTANT LINE 👇
      const restaurantData = json?.data?.cards[2]?.card?.card?.info;

      setMenu(restaurantData);
    } catch (error) {
      console.error(error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h4>⭐ {avgRating}</h4>
    </div>
  );
};

export default RestaurantMenu;
