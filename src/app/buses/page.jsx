"use client";

import React, { useEffect , useState } from "react";
import Aside from "@/components/Aside/Aside";
import Card from "@/components/card/Card";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const where = searchParams.get("where");
  const date = searchParams.get("date");

  console.log(from, date, where);
  const [bus, setBus] = useState([]);

  const GetBuses = async () => {
    try {
      const response = await axios("http://localhost:7777/client/bus", {
        method : "POST",
        data: {
          from,
          date,
          where,
        },
      });
      console.log(response.data);
      setBus(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetBuses();
  }, []);

  // console.log(from, where, date)

  // // Example: Fetching data using SSR
  // const response = await axios('http://localhost:7777/client/bus',{
  //   data : {
  //     from,
  //     where,
  //     date
  //   }
  // })
  // console.log(response.data)

  return (
    <div className="flex justify-center">
      <Aside />
      <Card bus={bus} />
    </div>
  );
}
