import React from 'react'

function BestSellers() {
  return (
<div className='w-full h-screen'>
    <div className='flex flex-col py-5 items-center justify-center'>
        <h1 className='uppercase font-extrabold text-slate-600'>Check Out</h1>
        <h1 className='uppercase text-[3vw] font-extrabold text-red-600 italic'>our BestSellers</h1>
    </div>
    <div className='flex gap-10 items-center justify-center'>

    <div className='cards w-[25vw] h-[60vh] bg-gray-300 rounded-xl  flex flex-col items-center justify-center    '>
        <img  width={250} className='mb-10'  src='https://www.pngplay.com/wp-content/uploads/2/Pepperoni-Pizza-Transparent-Image.png'/>
        <h1 className='text-xl font-extrabold pb-4 '>Pepperoni Pizza</h1>
        <p className='text-sm font-light pb-6 text-center '>Pepperoni puts the Pizzazz in Pizza.<br/> Enjoy every bite of our traditional crust<br/> brushed with garlic butter,topped..</p>
        <button className='py-3 px-5 rounded-full bg-red-600 text-white'>Add to Cart(from Rs.249)</button>
    </div>
    <div className='cards w-[25vw] h-[60vh] bg-gray-300 rounded-xl flex flex-col items-center justify-center '>
        <img className='mb-4'  width={180} src='https://www.pngplay.com/wp-content/uploads/15/Pizza-Pepperoni-And-Cheese-Transparent-Free-PNG.png' />
        <h1 className='text-xl font-extrabold pb-4'>Cheese Pizza</h1>
        <p className='text-sm font-light pb-4 text-center '>Cheese Pizza is Favourite for  a reason.<br/>Gooey mozzarella cheese is the star of<br/> our Cheese Pizza on a traditional crust..</p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-5 text-white'>Add to Cart(from Rs.349)</button>
    </div>
    <div className='cards w-[25vw] h-[60vh] bg-gray-300 rounded-xl flex flex-col items-center justify-center'>
        <img width={170} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/2/Cheese-Pizza-Transparent-Images.png'/>
        <h1 className='text-xl font-extrabold pb-4'>Margherita Pizza</h1>
        <p className='text-sm font-light pb-4 text-center '>Margherita Pizza, a perfect blend of fresh<br/> mozzarella, zesty tomato sauce, and<br/> aromatic basil, on a crispy golden crust.</p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.289)</button>
    </div>
    
    </div>
</div>
  )
}

export default BestSellers