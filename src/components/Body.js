
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
  const [listofrestaurant, setListofrestaurant] = useState([]);
  
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  const[searchText, setSearchText] = useState("");


      //when state variable updates, react triggers a reconciliation cycle and updates the UI with the new state value. This allows the component to re-render and reflect the changes in the UI based on the updated state.
    
    
    
    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5721353&lng=77.2139292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await response.json();

      console.log("API Response:", json);


      let restaurants = [];
      for (let card of json?.data?.cards || []) {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

      
      if (restaurants.length > 0) {
        setListofrestaurant(restaurants);
        setFilteredRestaurant(restaurants);
      } else {
        setListofrestaurant(resList);
        setFilteredRestaurant(resList);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setListofrestaurant(resList);
      setFilteredRestaurant(resList);
    }
  };

 return listofrestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text" className="search-box" value= {searchText} onChange={(e) =>{
              setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={() =>{
              console.log(searchText);

              const filteredRestaurant = listofrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
