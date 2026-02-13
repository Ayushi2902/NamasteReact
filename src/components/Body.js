
import React,{ useState } from "react";


const Body = () => {


  //state variable - super powerful variable - react variable

  const [listofrestaurant, setListofrestaurant] = useState([
    {
      data: {
        resName: "Pizza Hut",
        cuisine: ["Pizza", "Italian"],
        rating: "4.5",
        timemins: "30",
        costForTwo: 500,
        cloudinaryImageId:
          "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      },
    },
    {
      data: {
        resName: "Burger King",
        cuisine: ["Burger", "Fast Food"],
        rating: "4.2",
        timemins: "25",
        costForTwo: 300,
        cloudinaryImageId:
          "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },
    },
    {
      data: {
        resName: "Subway",
        cuisine: ["Sandwich", "Fast Food"],
        rating: "3.0",
        timemins: "20",
        costForTwo: 200,
        cloudinaryImageId:
          "https://images.unsplash.com/photo-1631515242808-497c3fbd3972",
      },
    },
  ]);
  

return (
  <>
    <div className="body-container">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("Before:", listofrestraunt.length);

          const filteredList = listofrestraunt.filter(
            (res) => parseFloat(res.data.rating) > 4,
          );

          console.log("After:", filteredList.length);

          setListofrestraunt(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>

    <div className="body">
      <div className="res-container">
        {listofrestraunt.map((res) => (
          <RestaurantCard key={res.data.resName} resData={res.data} />
        ))}
      </div>
    </div>
  </>
);
};

export default Body;
