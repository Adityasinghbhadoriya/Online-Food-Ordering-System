"use client"

import React from 'react'
import LandingPage from './Components/LandingPage'
import BestSellers from './Components/BestSellers'
import Aboutus from './Components/Aboutus'


function page() {
  return (
    <div className='w-full h-screen'>
         <LandingPage/>
         <BestSellers/>
         <Aboutus/>
    </div>
  )
}

export default page