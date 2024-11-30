import React from 'react'

function page() {
    return (
        <div className='w-screen h-full flex'>
            <form className='pt-20 pl-14'>
                <div className='flex gap-10 pl-20 pb-10'>
                    <div className='flex flex-col gap-y-3 '>
                        <h1 className='text-lg'>FIRST NAME</h1>
                        <input type='text' id='name' name='name' className='border-2  border-black w-[19vw] h-[6vh] rounded-md pl-3' />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1 className='text-lg'>LAST NAME</h1>
                        <input type='text' id='name' name='name' className='border-2  border-black w-[19vw] h-[6vh] rounded-md pl-3' />
                    </div>
                </div>
                <div className='flex gap-10 pl-20'>
                    <div className='flex flex-col gap-y-3 '>
                        <h1 className='text-lg'>EMAIL</h1>
                        <input type='email' id='email' name='email' className='border-2 border-black w-[19vw] h-[6vh] rounded-md pl-3' />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1 className='text-lg'>PHONE NUMBER</h1>
                        <input type='tel' id='name' name='name' className='border-2 border-black w-[19vw] h-[6vh] rounded-md pl-3' />
                    </div>
                </div>
                <div>
                    <div className='pt-10 pl-20'>
                        <h1 className='mb-5 text-lg'>WHAT DO YOU HAVE IN MIND</h1>
                        <textarea type='paragraph' id='para' name='para' placeholder='Please Enter Query..' className='border-2 border-black w-[40.6vw] h-[23vh] rounded-md p-3'/>
                    </div>
                </div >
                <div className= 'ml-[16vw] mt-5'>
                <button className='bg-slate-900 rounded-md text-white py-4 px-24 ' >SUBMIT</button>

                </div>
            </form>
            <div className="border-l-2 h-[80vh] ml-20 mt-12 border-gray-400 "></div>

            <div >
                <div>
               <h1 className='text-4xl font-bold pt-20 pl-32'>Contact Us</h1>
               <p className='pl-32 pt-9 text-xl pr-5 text-gray-500'>Reach Out to Us!
               Have a question or need help with your order? We're just a message away! At YourPizza's, your satisfaction is our priority.
               </p>
                </div>
               <div className='icon flex pt-10 pl-32 gap-5'>
               <i class="ri-phone-fill text-2xl text-gray-600"></i>
                  <h1 className='text-xl text-gray-500'>+91 9691031256</h1>
               </div>
               <div className = 'mail flex pl-32 gap-5 pt-10'>
               <i class="ri-mail-fill text-2xl text-gray-600"></i>
               <h1 className='text-xl text-gray-500'>hello@work.com</h1>
               </div>
               <div className='location flex pt-10 pl-32 gap-5'>
               <i class="ri-map-pin-2-fill text-2xl text-gray-600"></i>
               <h1 className='text-xl text-gray-500'>102 Street, Y cross 45856</h1>
               </div>
              
              <div className='pl-32 flex gap-10 pt-20'>
              <a href='#'><i class="ri-google-fill text-2xl"></i></a>
              <a href='#'><i class="ri-twitter-fill text-2xl"></i></a>
              <a href='#'><i class="ri-instagram-fill text-2xl"></i></a>
              <a href='#'><i class="ri-facebook-box-fill text-2xl"></i></a>
              </div>
            </div>

        </div>
    )
}

export default page