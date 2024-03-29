import React from 'react';
import { useState,useEffect,useContext } from "react";
import {restaurantList} from "../constants";
import RestaurantList from "./RestaurantList";
// import RestaurantCardShimmer from './RestaurantCardShimmer';
import useOnline from './utils/useOnline';
import UserContext from './utils/UserContext';

function filterRestaurantList(restaurants,searchTxt){
    const filterdata= restaurants.filter((x)=>x.data.name.toLowerCase().includes(searchTxt.toLowerCase()));
    return filterdata;
}


const Body=()=>{
    //useState Hook
    const[searchText,setSearchText]= useState("");
    const[allRestaurant,setAllRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);

    //Context
    // const {user,setUser}= useContext(UserContext);
    


   //useEffect
   useEffect(()=>{
 setAllRestaurant(restaurantList);
 setFilteredRestaurant(restaurantList);
   },
   []);
   
  //  async function getRestaurants(){
  //     try {
  //       const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9621948&lng=77.7115841&page_type=DESKTOP_WEB_LISTING");
  //         // if response is not ok then throw new Error
  //       if (!response.ok) {
  //         const err = response.status;
  //         throw new Error(err);
  //       } else {
  //         const json = await response.json();
  //         // updated state variable restaurants with Swiggy API data
  //         setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  //         setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  //       }
  //     } catch (error) {
  //       console.error(error); // show error in console
  //     }
  //  };

   // online or offlines
   const online=useOnline();
   if(!online)
   {
    return <h1>you are offline.Please check your internet connection</h1>
   }
    
    return(
        <>
        <div className="p-5 bg-pink-50 my-5 text-center">
            <input
            className='p-2 mx-3 w-80 rounded-md border border-black focus:outline-none'
             type="text"
             placeholder="serach Restaurants"
             onChange={(e)=>{
                    setSearchText(e.target.value);
             }}>
            </input>
            <button className='p-2 mx-3 bg-purple-800 rounded-lg text-white'
             onClick={()=>{
                const data=filterRestaurantList(allRestaurant,searchText);
                setFilteredRestaurant(data);
             }
             }>
            search</button>
            {/* <input
            className='p-2 m-2'
             type="text"
             value={user.name}
             onChange={(e)=>{
                    setUser({
                        name:e.target.value,
                        email:""});
             }}
            >
            </input> */}
        </div>
        <RestaurantList  allRestaurant={allRestaurant} restaurantlist={filteredRestaurant}/>   
        </>
     )
};
export default Body;