import React from 'react'
import 'remixicon/fonts/remixicon.css'
function LandingPage() {
  return (
    <div className='w-full flex gap-64'>
        <div className='p-14'>
           {["Everything", "is better", "with a Pizza"].map((item,index) => {
            return(
              <div key={index} className='text-[6vw] tracking-tighter leading-none '>
                <h1>{item}</h1>
              </div>
            )
           })}


         <div className='text-xl mt-10'>
             <h1>Pizza is the missing piece that makes every day<br/> complete, a simple yet delicious joy in life.</h1>
             <button className='px-6 py-3 bg-red-600 text-white rounded-full mt-5'>ORDER NOW <i class="ri-arrow-right-circle-line"></i></button>
             <button className='px-6 py-3 bg-white text-black rounded-full mt-5 text-base font-bold'>LEARN MORE<i class="ri-arrow-right-circle-line"></i></button>
             
         </div>
         </div>
         <div className='img'>
           <img  width={500} src='https://img.freepik.com/premium-photo/pizza-isolated-white-background-online-delivery-from-pizzeria-take-away-fast-food-concept_360074-127625.jpg?size=626&ext=jpg'/>
         </div>
    </div>
  )
}

export default LandingPage