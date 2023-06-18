import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useRestaurant from './useRestaurant';
// import {MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY} from '../constants'

const RestaurantDetails= ()=> {
    const resId=useParams();
    // const[restaurant,setRestaurant]=useState(null);
    // const[menuitems,setMenuItems]=useState([]);

    //customHooks
    const restaurant=useRestaurant(resId);



  return (
    <div className='flex'>
        <div>
       <h1>{restaurant[0]?.name}</h1>
       <img alt="restaurant pic" src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restaurant[0]?.cloudinaryImageId
        }/>
        </div>
       <ul>{restaurant[1]?.map(item=>{
        return(
            <li key={item}>{item}</li>
        )
       })}</ul>
    </div>
  )
}

export default RestaurantDetails