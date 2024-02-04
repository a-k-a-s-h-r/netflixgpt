import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/FireBase';
import { addUser, deleteUser } from '../utils/userSlice';
import { toggleGptSearchSlice } from '../utils/gptSearchSlice';

const  Header = (prop) => {

  const {signedIn} = prop;
  const name = useSelector((store) => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    // onAuthStateChanged - this is an event listener given by google fire base
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com  /docs/reference/js/auth.user

        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName:displayName}));
        navigate('/browse');
      } else {
         // User is signed out
         dispatch(deleteUser()); 
         navigate('/')
        }
    });
    return () => unsubscribe();
  }, [])

  const handleClickEvent =()=>{
    dispatch(toggleGptSearchSlice());
  }

  const isGptPage = useSelector((store) => store?.toggleGptSearchSlice?.toggleGptSearch);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('success')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute z-10 px-8 py-4 bg-gradient-to-tr from-black w-full flex justify-between'>
        <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'/>
        {signedIn && <div className='flex flex-wrap p-2 m-2'>
          <button className='bg-purple-600 text-white mr-2 p-3'onClick={handleClickEvent}>{isGptPage ? "Home" : "🔍GPT Search"}</button>
          <img className='w-10' src='https://occ-0-1382-999.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt='sign out'/>
          <p className='px-2 font-bold text-red-600 flex items-center cursor-pointer' onClick={handleSignOut}>Sign Out-{name?.displayName} </p>
        </div>}
    </div>
  )
}

export default Header
