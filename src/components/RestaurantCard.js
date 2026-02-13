    import React from "react";  

const RestaurantCard = ({ resData }) => {
  if (!resData) return null;

  const {
    cloudinaryImageId,
    resName,
    cuisine,
    rating,
    timemins,
    costForTwo,
  } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine?.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{timemins} minutes</h4>
      <h4>₹{costForTwo / 100} for two</h4>
    </div>
  );
};

export default RestaurantCard;
