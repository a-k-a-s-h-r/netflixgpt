import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/Validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

export const Login = () => {

    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleUsers = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    }
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const validateForm = () => {
        const formError = validate(email.current.value, password.current.value);
        setErrorMessage(formError);
            if(errorMessage !== null) {return};
        if(!isSignInForm){
            //sign up logic-create new account
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;

            updateProfile(user, {
                displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName:displayName}));
              }).catch((error) => {
                setErrorMessage(error.code + "--" + error.message)
              });
            
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "--" + errorMessage);
            });
        }
        else{
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "--" + errorMessage);
        });
        }        
    }

  return (
    <div className='relative'>
        <Header/>
        <div className=''>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/6fa56356-45b4-4c99-8fa0-e2d76468e004/CA-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo'/>
        </div>

            <form onSubmit={(e) => {e.preventDefault()}} className='h-auto w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 h-3/6 box-border rounded-sm'>
               <div className='mx-4 my-4 px-10 py-10 items-center'>
                    <h1 className='p-4 m-2 text-white text-3xl font-medium'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

                    {!isSignInForm && <input required className='p-4 m-2 w-full bg-gray-700 rounded-md' ref={fullName} type='text' placeholder='Full Name'/>}

                    <input className='p-4 m-2 w-full bg-gray-700 rounded-md' ref={email} type='text' placeholder='Email or Phone Number'/>

                    <input className='p-4 m-2 w-full  bg-gray-700 rounded-md' ref={password} type='password' placeholder='Password'/>             
                    
                    <p className='p-4 m-2 text-red-600 text-lg'>{errorMessage}</p>

                    <button className='p-4 m-2 w-full text-white bg-red-600 text-lg font-medium rounded-lg' onClick={validateForm}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                    <p className='p-4 m-2 text-white cursor-pointer' onClick={handleUsers}>{isSignInForm ? "New to Netflix ? Sign Up Now." : "Already Registered? Sign In Here."}</p>
                </div>
            </form>
    </div>
  )
}
