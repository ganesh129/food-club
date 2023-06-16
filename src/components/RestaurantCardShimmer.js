import React from 'react'

const RestaurantCardShimmer=()=> {
  return (
    <div className='restaurant-list'>
            {Array.from({length:10}).map((x,i)=>{
                return <div key={i} className='card shimmer-card'/> 
            })}
    </div>
  )
}
export default RestaurantCardShimmer;
