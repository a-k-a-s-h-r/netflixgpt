import React from 'react'
import Header from './Header'

export const Login = () => {
  return (
    <div className='relative'>
        <Header/>
        <div className=''>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/6fa56356-45b4-4c99-8fa0-e2d76468e004/CA-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo'/>
        </div>
            <form className='w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 h-3/6 box-border rounded-sm'>
               <div className='mx-4 my-4 px-10 py-10 items-center'>
                    <h1 className='p-4 m-2 text-white text-3xl font-medium'>Sign In</h1>
                    <input className='p-4 m-2 w-full bg-gray-700 rounded-md' type='text' placeholder='Email Address'/>
                    <input className='p-4 m-2 w-full  bg-gray-700 rounded-md' type='password' placeholder='Password'/>                  
                    <button className='p-4 m-2 w-full text-white bg-red-600 text-lg font-medium rounded-lg'>Sign In </button>
                    <p className='p-4 m-2 text-white'>New to Netflix ? Sign Up Now.</p>
                </div>
            </form>
    </div>
  )
}
