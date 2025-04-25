"use client";
import Date from '@/components/Date/Date'
import { Pick } from '@/components/Pick/Pick'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' 

function Option() {
    const  [from , setFrom] = useState('')
    const [where , setWhere] = useState('')
    const [date , setDate] = useState('')
console.log(from , where , date)


const router = useRouter();
const handleSearch =()=>{
  if(from === '' || where === '' || date === '') return
  if(from === where) return alert('from and where cannot be same')
    router.push(`/buses?from=${from}&where=${where}&date=${date}`);
}
    

  return (
    <>
     <Pick setFrom={setFrom} setWhere={setWhere} />
     <Date setDate={setDate} />
     <Button className="text-white bg-blue-700 hover:bg-blue-800 hover:pointer h-[65px]" onClick={handleSearch}>Search Buses </Button>
    </>
  )
}

export default Option