"use client"
import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only execute this on the client side
    setIsClient(true);
  }, []);

  async function handleFormSubmit(ev){
    ev.preventDefault();
    setLoginInProgress(true);
    
    await signIn('credentials',{email, password});
    
    setLoginInProgress(false)
  }

  if (!isClient) {
    return null; // Avoid rendering on the server side
  }

  // Check if both fields are filled
  const isFilled = email && password;

  // Determine dynamic styles based on input status
  const filledStyles = isFilled
      ? 'bg-green-200 border-green-500' // Styles when both fields are filled
      : 'bg-gray-200 border-gray-400';  // Default styles when not filled  


  return (
    <div className='w-full '>
      <div className='Login flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-red-500 italic uppercase pt-10'>Login</h1>
        <form className='text-black flex flex-col' onSubmit={handleFormSubmit} >
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            value={email}
            disabled={loginInProgress}
            onChange={ev => setEmail(ev.target.value)}
            className={`pl-2 w-[28vw] py-2 mt-8 rounded-lg border-2  ${filledStyles}`}
          />

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={password}
            disabled={loginInProgress}
            onChange={ev => setPassword(ev.target.value)}
            className={`pl-2 w-[28vw] py-2 mt-5 rounded-lg border-2 ${filledStyles}`}
          />
          <button disabled={loginInProgress} className='text-lg bg-red-600 text-white rounded-lg py-2 mt-4'>Login</button>
          <h1 className='text-center mt-2'>Or login with provider</h1>
          <button className='text-lg border-2 border-gray-300 rounded-lg py-2 mt-4 flex items-center justify-center gap-5'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" ></path>
          </svg> Login with Google</button>
        </form>
      </div>
      <div className='border-b-2 pt-14 mx-18  border-gray-200'></div>
      <div className='pt-10'>
        <h1 className='text-center'> @2024 All rights reserved</h1>
      </div>
    </div>
  )
}

export default Login