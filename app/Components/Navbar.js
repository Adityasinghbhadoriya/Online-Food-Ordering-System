"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar() {
  const session = useSession();
  console.log(session)
  return (
      <div className='w-full  h-16 flex  gap-14 text-bold text-xl text-zinc-600  px-16 py-5 justify-between'>
        <div className='flex gap-16'>
      <h1 className='text-2xl font-extrabold text-red-600 font-sans'>YOURPIZZA'S</h1>
           <div className='flex gap-20 '>
           <Link 
  className='hover:text-white    hover:bg-black bg-white border-none text-black rounded-full px-4 pb-9' 
  href='/'
>
  Home
</Link>

           <Link className='hover:text-white  hover:bg-black bg-white border-none text-black rounded-full px-4 pb-9'  href='/Menu'>Menu</Link>
           <Link className='hover:text-white  hover:bg-black bg-white border-none text-black rounded-full px-4 pb-9'  href='/About'>About</Link>
           <Link className='hover:text-white  hover:bg-black bg-white border-none text-black rounded-full px-4 pb-9'  href='/Contact'>Contact</Link>
       </div>
        </div>
           <div className='flex gap-5 items-center'>
            <Link href='/UserLoginPage' >Login</Link>
            <button className=' py-2 px-6 bg-red-600 text-white rounded-full'><Link href='/UserRegisterPage'>Register</Link></button>
            <i className="ri-shopping-cart-2-line"></i>
           </div>
       </div>
          
    
  )
}

export default Navbar