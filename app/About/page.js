import React from 'react'
import Navbar from '../Components/Navbar'

function page() {
    return (
    
        <div className='pt-14 w-screen h-full '>
          
           
            <div className=' mr-14 ml-20 flex gap-5'>
                <div>
                    <h1 className='pb-5 text-3xl font-bold text-orange-600  '>About Us</h1>
                    <p className='text-xl'>Welcome to YourPizzas, the ultimate destination for pizza lovers who crave quality, variety, and an unforgettable food experience. Born from a passion for delicious food and a commitment to excellence, YourPizzas was founded on the belief that everyone deserves the perfect slice—no matter where they are. We’ve combined our culinary expertise with a user-friendly online ordering platform, making it easy for you to enjoy premium, handcrafted pizzas anytime.</p>
                </div>
                <div className=''>
                    <img width={1200}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi007AiUjkXEV7ivod7L1bYNOXwsU6QqwzxQ&s' />
                </div>
            </div>
            <div className='pt-10 mr-14 ml-20 flex gap-5'>
          
                <div>
                    
                <h1 className='pb-5 text-3xl font-bold text-orange-600  '>Our Vision</h1>
                <p className='text-xl'>At YourPizzas, we believe that food is more than just sustenance; it’s a way to bring people together. Our vision is to transform every meal into a joyful experience, delivering happiness in every bite. With a focus on quality, speed, and satisfaction, we aim to become a go-to brand in pizza delivery, known for our creativity, reliability, and exceptional taste.</p>
                </div>
              
            </div>
            <div className='pt-14 mr-14 ml-20 '>
                <h1 className='pb-5 text-3xl font-bold text-orange-600  '>Our Menu</h1>
                <p className='text-xl'>Each pizza we create is an art form, made with love and the freshest ingredients. From classic Margheritas to daring gourmet creations, our menu is crafted to cater to every palate. We take pride in offering a wide range of pizzas, each bursting with unique flavors and made-to-order for that perfect, straight-from-the-oven experience. Our chefs experiment regularly, adding new flavors and special seasonal options to keep things fresh and exciting for you.</p>
            </div>
            <div className='pt-14 mr-14 ml-20 '>
                <h1 className='pb-5 text-3xl font-bold text-orange-600  '>Commitment to Quality</h1>
                <p className='text-xl'>Our commitment to quality sets us apart. We source only the best ingredients, from locally grown vegetables to premium cheeses and sauces. Every pizza is handmade, ensuring that each slice delivers on flavor and freshness. Our Margherita Pizza, for example—one of our bestsellers—is prepared with rich tomato sauce, fresh basil, and mozzarella that melts in your mouth, embodying the essence of a true Italian classic.</p>
            </div>
            <div className='pt-14 mr-14 ml-20 '>
                <h1 className='pb-5 text-3xl font-bold text-orange-600  '>Convenient, Reliable, and Fast</h1>
                <p className='text-xl'>In today’s fast-paced world, convenience is key, and YourPizzas is dedicated to delivering that convenience right to your doorstep. Our website is designed for a seamless ordering experience, whether you’re ordering for yourself or for a group. We strive to ensure timely delivery, so you can count on us for lunch, dinner, or that late-night craving.</p>
            </div>
            <div className='pt-14 mr-14 ml-20 pb-20'>
                <h1 className='pb-5 text-3xl font-bold text-orange-600  '>Join Us in the Pizza Revolution!</h1>
                <p className='text-xl'>YourPizzas is more than just a food delivery service—it’s a community of pizza enthusiasts who believe in the joy of sharing good food. So go ahead, explore our menu, and let us bring a slice of happiness to your day. With YourPizzas, every meal is an experience worth savoring!</p>
            </div>

        </div>
    )
}

export default page