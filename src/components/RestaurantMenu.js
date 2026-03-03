import { useParams } from "react-router-dom";
import menuData from "../utils/menuMock";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantData = menuData?.restaurants?.[resId];

  if (!restaurantData) return <h2>Restaurant Not Found</h2>;

  const resInfo = restaurantData.data.cards.find(
    (card) => card?.card?.card?.info,
  )?.card?.card?.info;

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, sla } = resInfo;

  const menuCards =
    restaurantData.data.cards.find((card) => card?.groupedCard)?.groupedCard
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
                <p>₹ {info.price / 100}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
