// File: app/buses/page.jsx

import React from 'react'
import Aside from '@/components/Aside/Aside'
import Card from '@/components/card/Card'
import axios from 'axios'

export default async function Page({ searchParams }) {
  const { from, where, date } = await searchParams
 
  

  console.log(from, where, date)

  // Example: Fetching data using SSR
  // const response = await axios.post('http://localhost:7777/client/bus', {
  //   from,
  //   where,
  //   date,
  // })
  // console.log(response.data)

  return (
    <div className="flex">
      <Aside />
      <Card />
    </div>
  )
}
