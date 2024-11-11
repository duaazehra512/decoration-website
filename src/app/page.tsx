
import Image from "next/image";

import React from "react";
import one from "../../public/one.jpeg"
import living1 from "../../public/living1.jpeg"
import living2 from "../../public/living2.jpeg"
import living3 from "../../public/living3.jpeg"
import living4 from "../../public/living4.jpeg"
import bed1 from "../../public/bed1.jpeg"
import bed2 from "../../public/bed2.jpeg"
import bed3 from "../../public/bed3.jpeg"
import bed4 from "../../public/bed4.jpeg"
import k1 from "../../public/k1.jpeg"
import k2 from "../../public/k2.jpeg"
import k3 from "../../public/k3.jpeg"
import k4 from "../../public/k4.jpeg"
import home from "../../public/home.jpeg"
import Link from "next/link";


import Navbar from "@/app/components/Navbar";
export default function Home() {
  return (
    <div> < Navbar />
        
           
      <div id="image2">
  <Image src={one} alt="one"/>
  <Image src={home} alt="home"/>
<div id="image-text"> <h1><strong>HOUSE DECORATION </strong></h1></div>
</div >
     
     

           < div>
  <h1 id="home1" >
Living Room</h1> </div>
      <div id="livingroom">  


      <div id="image-container">
      <Image src={living1}alt="living1" width="250" height="180" />
      <Image src={living2} alt="living2"width="250" height="180"/>
      <Image src={living3} alt="living3"width="250" height="180"/>
      <Image src={living4} alt="living4"width="250" height="180"/>
    </div>


<div id="home2">
  <h1>Bed Room</h1>
</div>




<div id="image-container">
      <Image src={bed1}alt="living1" width="250" height="180" />
      <Image src={bed2} alt="living2"width="250" height="180"/>
      <Image src={bed3} alt="living3"width="250" height="180"/>
      <Image src={bed4} alt="living4"width="250" height="180"/>
    </div>


<div id="home3"> Kitchen</div>


<div id="image-container">
      <Image src={k1}alt="living1" width="250" height="180" />
      <Image src={k2} alt="living2"width="250" height="180"/>
      <Image src={k3} alt="living3"width="250" height="180"/>
      <Image src={k4} alt="living4"width="250" height="180"/>
    </div>





<button  id="button" type="button"><Link href="/">
navigate to Home

</Link> </button>




<button  id="button" type="button"><Link href="/About">
navigate to About

</Link> </button>



<button  id="button" type="button"><Link href="/Contact">
navigate to Contact

</Link> </button>


     </div>     </div>
  )
}

