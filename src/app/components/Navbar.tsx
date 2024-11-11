import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return ( <nav id='navbar'>
    <div id='navdiv'>
      <div>
      <div id="navbar-brand">HOME DECORATION</div>
        <ul id='link' className='flex gap-11 justify-center  text-pretty'>
          
          
<li><Link id='active' href="/">Home</Link></li>
<li><Link href="/About">About</Link></li>
<li><Link href="/Contact">Contact</Link></li>
        </ul> 
        
      </div>



    </div> </nav> 
  )
}

export default Navbar




