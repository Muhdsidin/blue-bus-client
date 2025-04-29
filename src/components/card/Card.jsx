import React from 'react'
import "./style.css"

function Card({bus}) {
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
    <div className=' mt-[150px] flex ml-80 gap-x-6 flex-wrap  '>
      {bus.map((bus) => (
        
    <div class="max-w-md mx-auto  bg-white shadow-xl rounded-2xl overflow-hidden border border-navy-700">
    <div class="bg-navy-700 text-white px-6 py-4 flex justify-between items-center">
      <div class="text-lg font-semibold">Bus No: KL 59 M 131</div>
      <div class="text-sm">ID: 12121</div>
    </div>
    <div class="p-6 space-y-4 text-gray-800">
      <div class="flex justify-between">
        <div>
          <p class="text-sm text-gray-500">From</p>
          <p class="text-base font-medium capitalize">Kannur</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">To</p>
          <p class="text-base font-medium capitalize">Majestic</p>
        </div>
      </div>
  
      <div class="flex justify-between">
        <div>
          <p class="text-sm text-gray-500">Date</p>
          <p class="text-base font-medium">2025-04-29</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Decker</p>
          <p class="text-base font-medium">2</p>
        </div>
      </div>
  
      <div class="flex justify-between">
        <div>
          <p class="text-sm text-gray-500">Start Time</p>
          <p class="text-base font-medium">23:28</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">End Time</p>
          <p class="text-base font-medium">23:27</p>
        </div>
      </div>
  
      <div class="flex justify-between">
        <div>
          <p class="text-sm text-gray-500">AC Type</p>
          <p class="text-base font-medium uppercase">NON-AC</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Price</p>
          <p class="text-lg font-bold text-navy-700">₹1212</p>
        </div>
      </div>

      <div class="flex justify-between">
      <button
        type="button"
        className="text-white ml-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Get started
      </button>
      </div>
    </div>
  </div>
      ))}




  </div>
  
  )
}

export default Card