import React from 'react';
import logo from '../FoodFireLogo.png';
import {Link} from 'react-router-dom';

const Header=()=>{
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
                    <Link to="/login">LogIn</Link>
                </li>
                <li className='px-2'>Sign Up</li>
                </ul>
                <h2 className='py-10 pr-3'>cart</h2>
            </div>
     )
}
export default Header;