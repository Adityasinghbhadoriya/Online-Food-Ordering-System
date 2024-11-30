import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Landingpage() {
    return (

        <div className=' flex  w-full h-96 font-bold text-5xl px-28 py-4'>
            <div>
                <h1>Everything</h1>
                <h1>is better</h1>
                <h1>with a Pizza</h1>
                <h2 className='font-light text-2xl py-6'>Pizza is the missing piece that makes everyday<br /> complete, a simple yet delicious joy in life</h2>

                <div className='flex gap-16 text-sm'>
                    <button className='text-white bg-red-500 border-2 rounded-full px-6 py-3 items-center font-medium mt-5 flex gap-2'>ORDER NOW <i class="ri-arrow-right-circle-line"></i></button>
                    <button className='text-black rounded-full px-6 py-3 items-center font-medium mt-5 flex gap-2'>Learn more<i class="ri-arrow-right-circle-line"></i></button>
                </div>
            </div>
            <div>
                <img  src='https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
            </div>
        </div>
    )
}
