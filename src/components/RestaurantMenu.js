import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";  

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurauntMenu(resId);


  const [restaurantData, setRestaurantData] = useState(null);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        `https://thingproxy.freeboard.io/fetch/${MENU_API}${resId}`,
      );

      if (!response.ok) {
        throw new Error("Network response not ok");
      }

      const text = await response.text();

      if (!text) {
        throw new Error("Empty API response");
      }

      const json = JSON.parse(text);

      console.log("Menu API:", json);

      setRestaurantData(json);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  if (!restaurantData) return <Shimmer />;

  resInfo = restaurantData?.data?.cards?.find(
    (card) => card?.card?.card?.info,
  )?.card?.card?.info;

  const { name, cuisines, costForTwoMessage, avgRating, sla } = resInfo || {};

  const menuCards =
    restaurantData?.data?.cards?.find((card) => card?.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards || [];

  const categories = menuCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>{name}</h1>

      <h3>{cuisines?.join(", ")}</h3>

      <h3>{costForTwoMessage}</h3>

      <h4>⭐ {avgRating}</h4>

      <h4>🕒 {sla?.slaString}</h4>

      <hr />

      {categories.map((category) => (
        <div key={category.card.card.title}>
          <h2>{category.card.card.title}</h2>

          {category.card.card.itemCards.map((item) => {
            const info = item.card.info;

            return (
              <div key={info.id} style={{ marginBottom: "10px" }}>
                <h4>{info.name}</h4>

                <p>₹ {(info.price || info.defaultPrice) / 100}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
