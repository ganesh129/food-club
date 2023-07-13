import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurant from './utils/useRestaurant';
import { IMG_CDN_URL } from '../constants';
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
    <div className='flex'>
        <div>
        <h2>{restaurant[0]?.name}</h2>
        <img alt="restaurant pic"src={IMG_CDN_URL + restaurant[0]?.cloudinaryImageId} />
        <h3>{restaurant[0]?.area}</h3>
        </div>
       <ul>{restaurant[1]?.map((item)=>{
        return(
          <li key={item.id}>
          {item.name} -{" "}
          <button
            data-testid="addBtn"
            className="p-1 bg-green-50"
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