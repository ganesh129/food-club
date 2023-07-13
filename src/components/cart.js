import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart} from "./utils/cartSlice";

const Cart =()=> {
   const cartItems= useSelector((store)=>store.cart.items);
   const dispatch=useDispatch();
   const clearCartHandler=()=>{
    dispatch(clearCart());
   }
    return(
        <>
        <h1 className="text-3xl font-bold">Total Items In cart: {cartItems.length}</h1>
        <button className="p-2 m-2 bg-green-200" onClick={()=>clearCartHandler()}>clear Cart</button>
          <div className="flex">
          {cartItems.map((item)=>
        <FoodItem key={item.id} {...item}/>
        )}
        </div>
        </>
    )
}
export default Cart;