import RestaurantCard from './RestaurantCard';
import RestaurantCardShimmer from './RestaurantCardShimmer';
import { Link } from 'react-router-dom';

const RestaurantList=(props)=>{
    return (props.allRestaurant.length===0)?<RestaurantCardShimmer/>:(
        <div className="flex flex-wrap">
            {props.restaurantlist.length===0?<h1>No Restaurant Found</h1>:
                props.restaurantlist.map((restaurant)=>
                {
                   return <Link to={"/restaurant/"+restaurant.data.id}><RestaurantCard key={restaurant.data.id} {...restaurant.data}/></Link>
                }
                
                )}
        </div>
    )
}
export default RestaurantList;