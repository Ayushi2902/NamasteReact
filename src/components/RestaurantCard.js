const RestaurantCard = ({ resData }) => {
  const { info } = resData;

  return (
    <div className="res-card" style={{ padding: "10px" }}>
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
        alt={info.name}
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>⭐ {info.avgRating} stars</h4>
      <h4>🕒 {info.sla.deliveryTime} minutes</h4>
      <h4>💰 {info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
