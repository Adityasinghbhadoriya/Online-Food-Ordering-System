import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen '>
        <div className='pt-10'>
            <h1 className='text-4xl font-extrabold text-center italic text-red-600'>PIZZA</h1>
        </div>
        <div className='Pizzas flex flex-wrap gap-14  justify-center py-5 gap-y-1'>
        <div className='cards w-[25vw] h-[60vh] bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={170} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/6/Real-Dominos-Pizza-Transparent-Free-PNG.png'/>
        <h1 className='text-xl font-extrabold pb-4 pt-11'>Veggie Pizza</h1>
        <p className='text-sm font-light pb-4 text-center px-5'>Veggie pizza is a type of pizza topped primarily with various vegetables instead of traditional meat toppings. </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.289)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={180} className='pb-6 pt-5' src='https://www.pngplay.com/wp-content/uploads/2/Pepperoni-Pizza-Transparent-Image.png'/>
        <h1 className='text-xl font-extrabold pb-4 pt-12'>Pepproni Pizza</h1>
        <p className='text-sm font-light pb-4 text-center '>Pepperoni puts the Pizzazz in Pizza.<br/> Enjoy every bite of our traditional crust<br/> brushed with garlic butter,topped..</p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.289)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={160} className='pb-6  ' src='https://www.pngplay.com/wp-content/uploads/2/Cheese-Pizza-Transparent-Images.png'/>
        <h1 className='text-xl font-extrabold pb-4'>Margherita Pizza</h1>
        <p className='text-sm font-light pb-4 text-center '>Margherita Pizza, a perfect blend of fresh<br/> mozzarella, zesty tomato sauce, and<br/> aromatic basil, on a crispy golden crust.</p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.289)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh]  bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={170} className='pb-4 ' src='https://www.pngplay.com/wp-content/uploads/15/Pizza-Pepperoni-And-Cheese-Transparent-Free-PNG.png'/>
        <h1 className='text-xl font-extrabold pb-4'>Cheese Pizza</h1>
        <p className='text-sm font-light pb-4 text-center '>Cheese Pizza is Favourite for  a reason.<br/>Gooey mozzarella cheese is the star of<br/> our Cheese Pizza on a traditional crust..</p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.289)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] pt-6 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={170} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/6/Real-Dominos-Pizza-Background-PNG-Image.png
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-8'>Capricciosa Pizza</h1>
        <p className='text-sm font-light pb-4 text-center px-3 '>If you’re looking for a rich, tasty pizza with many different ingredients, try Pizza Capricciosa. </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white pt-3'>Add to Cart(from Rs.289)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={160} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/2/Pizza-PNG-Photos.png
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>Sausage Pizza</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>Sausage pizza features tomato sauce, cheese, and cooked sausage as the main topping. It can include extras like peppers or onions. </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.289)</button>
    </div>
    </div>
    <div className='Pasta '>
        <div className='pt-10'>
            <h1 className='text-4xl font-extrabold text-center italic text-red-600'>PASTA</h1>
        </div>
        <div className='Pizzas flex flex-wrap gap-14  justify-center py-5 gap-y-1'>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={200} className='pb-2 pt-3 ' src='https://www.pngplay.com/wp-content/uploads/15/Rigatoni-Transparent-Images.png
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>White Sauce Pasta</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>Our creamy white sauce pasta is a rich, indulgent dish made with a smooth béchamel sauce, blended with herbs and garlic. </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.130)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={200} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png

'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>Red Sauce Pasta</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>Our tangy red sauce pasta features perfectly cooked pasta tossed in a vibrant tomato-based sauce, seasoned with aromatic herbs & spices. </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.180)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={150} className='pb-6 pt-5 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVsCdy4Sf86pzywqueExS5o8WgfZZI7xnGA&s
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>Quick Veggie Pasta</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>Enjoy a vibrant medley of fresh vegetables tossed with al dente pasta in a light garlic and olive oil sauce.  </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.150)</button>
    </div>
    </div>
    </div>
    <div className='Deserts '>
    <div className='pt-10'>
            <h1 className='text-4xl font-extrabold text-center italic text-red-600'>DESERTS</h1>
        </div>
        <div className='Pizzas flex flex-wrap gap-14  justify-center py-5 gap-y-1'>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={120} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/7/Strawberry-Cheesecake-Transparent-PNG.png
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>Cheese Cake</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>Dive into our velvety cheesecake with a buttery crust, available in classic, strawberry, chocolate, and lemon.   </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.120)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={120} className='pb-6 pt-5 ' src='https://www.pngplay.com/wp-content/uploads/2/Pancake-No-Background.png
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>Pancake</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>Enjoy our light and airy pancakes, served warm and drizzled with maple syrup. Top them with fresh berries or whipped cream.. </p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.99)</button>
    </div>
        <div className='cards w-[25vw] h-[60vh] pt-2 bg-gray-300 rounded-xl flex flex-col items-center justify-center mt-14'>
        <img width={120} className='pb-6 pt-3 ' src='https://www.pngplay.com/wp-content/uploads/2/Chocolate-Cake-PNG-Free-File-Download.png
'/>
        <h1 className='text-xl font-extrabold pb-4 pt-7'>Brownies</h1>
        <p className='text-sm font-light pb-4 text-center px-3'>dive into our rich, fudgy brownies, available in classic, nutty, mint, caramel, and vegan options. Each bite..</p>
        <button className='py-3 px-5 rounded-full bg-red-600 mb-9  text-white'>Add to Cart(from Rs.115)</button>
    </div>
     </div>  
    </div>
    </div>
  )
}

export default Cards