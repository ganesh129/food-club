import React,{useState,useContext} from 'react';
import logo from '../FoodFireLogo.png';
import {Link} from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useSelector } from 'react-redux';
// import cart from './cart';

const Header=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store=> store.cart.items);

     return(
            <div className='flex justify-between bg-pink-50 shadow-lg mb-4'>
                <div>
                <img className='h-16 w-16 p-2' src={logo} alt='restaurant pic'></img>
                </div>
                <ul className='flex py-10'>
                <li className='px-2 font-semibold'>
                    <Link to='/'>Home</Link> 
                </li>
                <li className='px-2 font-semibold'>
                    <Link to='/about'>About</Link> 
                </li>
                <li className='px-2 font-semibold'>
                    <Link to='/contact'>Contact</Link> 
                </li>
                <li className='px-2 font-semibold'>
                    <Link to="/instamart">Instamart</Link>
                </li>
                <li className="px-2 font-semibold">
                <h2>
                    <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>{cartItems.length} items
                </Link></h2>
                </li>
                {
                    isLoggedIn?
                    <li  className='px-2 mx-5 font-semibold'>
                    <Link  className='flex'>
                    {/* <p className='px-2'>{user.name}</p> */}
                        <button onClick={()=>setIsLoggedIn(false)}>LogOut</button>
                    </Link>
                    </li>
                :  <li className='px-2 mx-5 font-semibold'>
                    <Link to="/logIn">
                        <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>
                        {/* <p className='px-2'>{user.name}</p> */}
                    </Link>
                </li>
                }

                </ul>

            </div>
     )
}
export default Header;