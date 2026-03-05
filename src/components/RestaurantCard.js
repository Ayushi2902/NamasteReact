import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { info } = resData;

  return (
    <Link to={"/restaurant/" + info.id}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer">
        <img
          className="w-full h-48 object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
          alt={info.name}
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{info.name}</h3>
          <p className="text-gray-500 text-sm mb-1">
            {info.cuisines.join(", ")}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
            <span>⭐ {info.avgRating}</span>
            <span>🕒 {info.sla.deliveryTime} min</span>
            <span>💰 {info.costForTwo}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
