import React, { useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantCardShimmer from './RestaurantCardShimmer';
import { Link } from 'react-router-dom';

const RestaurantList=(props)=>{
    useEffect(()=>{
        console.log(props.allRestaurant);
    })
    return (props.allRestaurant.length===0)?<RestaurantCardShimmer/>:(
        <div className="flex flex-wrap">
            {props.restaurantlist.length===0?<h1>No Restaurant Found</h1>:
                props.restaurantlist.map((restaurant)=>
                {
                   return <Link key={restaurant.data.id} to={"/restaurant/"+restaurant.data.id}><RestaurantCard key={restaurant.data.id} {...restaurant.data}/></Link>
                }
                
                )}
        </div>
    )
}
export default RestaurantList;