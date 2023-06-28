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
            <div className='flex justify-between bg-pink-50 shadow-lg'>
                <div>
                <img className='h-16 w-16 p-2' src={logo} alt='restaurant pic'></img>
                </div>
                <ul className='flex py-10'>
                <li className='px-2'>
                    <Link to='/about'>About</Link> 
                </li>
                <li className='px-2'>
                    <Link to='/contact'>Contact</Link> 
                </li>
                <li className='px-2'>
                    <Link to="/instamart">Instamart</Link>
                </li>
                <li className="px-2">
                <h2>
                    <Link to="/cart">
                        cart {cartItems.length} items
                </Link></h2>
                </li>
                </ul>
                {
                    isLoggedIn?
                    <Link>
                        <button className='px-2 m-5' onClick={()=>setIsLoggedIn(false)}>LogOut</button>
                    </Link>
                :  <li className='px-2 mx-10'>
                    <Link to="/logIn" className='flex'>
                        <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>
                        <p className='px-2'>{user.name}</p>
                    </Link>
                </li>
                }

            </div>
     )
}
export default Header;