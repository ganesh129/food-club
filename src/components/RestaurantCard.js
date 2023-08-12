import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../constants";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="w-60 h-72 p-2 m-3 flex flex-wrap items-center border border-gray-100 bg-gray rounded-md  bg-gray-50 shadow-[-1px_5px_10px_5px_rgba(42,42,42,.2)]">
      <div>
        <img className="rounded-lg" alt="restaurant card" src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="py-1 text-lg font-semibold">{name.substring(0,21)}</div>
        <p className="text-base text-gray-600 pb-2">{cuisines.join(", ").substring(0,40)}</p>
        <div className=" flex justify-evenly items-center font-semibold">
          <span
            className={
              (avgRating < 3.7 || avgRating === "--"
                ? "bg-orange-500 p-1 "
                : "bg-green-800 p-1 ")+"rounded-lg text-white flex items-center before:content-['\f005']"
            }
          ><i className="fa-solid fa-star"/>{avgRating}
          </span>
          <h4 className="pl-4 pr-1 text-sm">{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </div>
        {/* <span>{user.name}</span>
        <span>{user.email}</span> */}
      </div>
    </div>
  );
};

export default RestaurantCard;