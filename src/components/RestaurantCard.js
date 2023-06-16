
const RestaurantCard=({cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating})=>{
return(
    <div className="w-56 p-2 m-2 shadow-md bg-pink-50">
        <img alt="restaurant pic" src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }/>
       <h2 className="font-bold text-xl">{name}</h2>
       <h4>{cuisines.join(", ")}</h4>
       <h4><i className='fa fa-star'></i>{avgRating}</h4>
    </div>
)
};
export default RestaurantCard;