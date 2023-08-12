import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useRestaurant from './utils/useRestaurant';
import { IMG_CDN_URL,ITEM_IMG_CDN_URL,NO_IMAGE_AVAILABLE } from '../constants';
import { addItem } from './utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantDetails= ()=> {
    const resId=useParams();
    //customHooks
    const restaurant=useRestaurant(resId);

   const dispatch= useDispatch();
   const addFoodItem=(item)=>{
    dispatch(addItem(item));
   }

  return (
    <div>
      <div className=" flex  p-16 justify-center mt-4 bg-gray-900 text-gray-100">
        <img
          className="w-96 rounded-md"
          alt="restaurant pic"
          src={IMG_CDN_URL + restaurant[0]?.cloudinaryImageId}
        />
        <div className="justify-center space-y-1">
          <h1 className="text-4xl font-semibold ">{restaurant[0]?.name} </h1>
          <h3 className="text-2xl">
            📍 {restaurant[0]?.areaName}, {restaurant[0]?.city}
          </h3>
          <h3 className="text-2xl">🌟 {restaurant[0]?.avgRatingString} stars</h3>
          <h3 className="text-2xl">🍲 {restaurant[0]?.costForTwoMessage}</h3>
        </div>
      </div>
        {/* <div>
        <h2>{restaurant[0]?.name}</h2>
        <img alt="restaurant pic"src={IMG_CDN_URL + restaurant[0]?.cloudinaryImageId} />
        <h3>{restaurant[0]?.area}</h3>
        </div> */}
       <ul className='flex flex-col justify-between items-center'>{restaurant[1]?.map((item,index)=>{
        return(
          <li 
          className='flex justify-between mt-4 items-center  text-lg font-semibold text-black w-96'
          key={item.name + index}>
            <div className='flex items-center'>
                <img
                  src={
                    !item.imageId
                      ? NO_IMAGE_AVAILABLE : ITEM_IMG_CDN_URL + item.imageId
                  }
                  className="w-24 rounded-md  m-2"
                />
          <div>{item.name}
          <h4 className='font-normal'>₹ {item.price/100}</h4>
          </div>
          </div>
          <button
            data-testid="addBtn"
            className="px-2 py-1 m-1 rounded-md bg-green-700 text-white"
            onClick={() => addFoodItem(item)}
          >
            Add
          </button>
        </li>
        )
       })}</ul>
    </div>
  )
}

export default RestaurantDetails