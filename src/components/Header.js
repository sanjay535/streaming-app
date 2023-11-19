import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(state=>state.user);

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid:uid, displayName:displayName, email:email, photoURL:photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=>unsubscribe();
  }, []);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful. remove from store
      dispatch(removeUser())
    }).catch((error) => {
      // An error happened.navigate to error page
      navigate('/error')

    });
    
  }
  return (
    <div className='absolute flex items-center justify-between px-8 w-full bg-gradient-to-b from-white z-10'>
      <img className='h-32' src='/assets/logo_prime.svg' alt='logo' />
      {user && <button onClick={()=>handleSignout()} className='flex items-center'>
        <img
          className='h-16 mx-2 rounded-full'
          src={user?.photoURL?user?.photoURL:'/assets/account_circle.svg'}
          alt='user'
        />
        <span className='font-semibold text-lg text-white'>Sign Out</span>
      </button>}
    </div>
  );
};

export default Header;
