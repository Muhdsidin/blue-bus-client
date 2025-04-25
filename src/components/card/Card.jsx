import React from 'react'
import "./style.css"

function Card() {
    const busData = {
        numberPlate: "KL-07-AB-1234",
        busId: "Bus_001",
        startFrom: "Kochi",
        whereTo: "Bangalore",
        date: "2025-04-20",
        startTime: "08:00 AM",
        reachTime: "05:00 PM",
        price: 800,
        decker: "Double Decker",
        acType: "AC",
      };
      
  return (
    <div className='mt-[130px] ml-80 w-[90%]  h-auto'>
        <div className='mt-4 w-[90%] ml-[5%] border-2  h-40 shadow-lg  bg-slate-300'>
            <span className='agency-name' >Sulthan Agency / logistics service</span>
        </div>
    </div>
  )
}

export default Card