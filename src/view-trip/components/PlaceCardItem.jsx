import React from 'react'

const PlaceCardItem = ({place}) => {
  return (
    <div className='shadow-md border rounded-lg p-3 mt-2'>
      <img src='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
       className='w-[100px] h-[100px] rounded-lg'/>
       <div>
        <h2>{place.plan.placeName}</h2>
       </div>
    </div>
  )
}

export default PlaceCardItem
