import Image from "@/components/Background/Image";
import Date from "@/components/Date/Date";

import Navbar from "@/components/navbar/Navbar";
import { Pick } from "@/components/Pick/Pick";
import { Button } from "@/components/ui/button";
import Option from "@/main/option/Option";



export default function Home() {
  return (
   <>
    <Navbar />
    <Image>
      <div className="w-[80%] flex justify-center items-center  h-full">
    <Option />
     
     </div>
    </Image>

   </>
  );
}
