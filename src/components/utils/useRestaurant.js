import { useState,useEffect } from "react";
import {MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY} from '../../constants'


const useRestaurant=(resId)=>{
const[restaurant,setRestaurant]=useState(null);
const[menuitems,setMenuItems]=useState([]);


useEffect(()=>{
    getRestaurantDetail()},
[]);


async function getRestaurantDetail(){
   const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9621948&lng=77.7115841&restaurantId=${resId.id}&submitAction=ENTER`);
   const json=await data.json();
   //set restaurant data
   const restaurantData = json?.data?.cards?.map(x => x.card)?.
   find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
   setRestaurant(restaurantData);

  //Set Menu Items
   const menu=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
   const restaurantMenu=menu.map(x=>x?.card?.card)?.filter(x=>x['@type']===MENU_ITEM_TYPE_KEY)?.map(x=>x.itemCards)?.flat()?.map(x=>x?.card?.info);
   const uniqueMenuItems=[];
   restaurantMenu.forEach(item=>{
    uniqueMenuItems.push(item);
   })
   setMenuItems(uniqueMenuItems)
};
const restaurant_Menu=[restaurant,menuitems]
return restaurant_Menu;
};
export default useRestaurant;