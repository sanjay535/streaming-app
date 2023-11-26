import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu]=useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. remove from store
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.navigate to error page
        navigate('/error');
      });
  };

  const toggleMenu=()=>{

  }

  return (
    <div className='fixed flex items-center justify-between p-8 px-20 z-40 w-full bg-black'>
      <img
        className='h-14'
        src='/assets/amazon-prime-video-logo.svg'
        alt='logo'
      />
      {/* {user && (
        <button onClick={() => handleSignout()} className='flex items-center'>
          <img
            className='h-10 mx-2 rounded-full'
            src={user?.photoURL ? user?.photoURL : '/assets/account_circle.svg'}
            alt='user'
          />
          <span className='font-semibold text-lg text-white'>Sign Out</span>
        </button>
      )} */}

      {user && <div class='relative inline-block text-left'>
        <button onClick={() => toggleMenu(setShowMenu(!showMenu))} className='flex'>
         
          <img
            className='h-10 rounded-full'
            src={'/assets/account_circle.svg'}
            alt='user'
          />
          {!showMenu?<img
            className='h-10 rounded-full transition ease-linear delay-150'
            src={'/assets/arrow_drop_down.svg'}
            alt='user'
          />:
          <img
            className='h-10 rounded-full transition ease-linear delay-150'
            src={'/assets/arrow_drop_up.svg'}
            alt='user'
          />
          }
        </button>
       

        {showMenu&&<div
          class='absolute right-0 z-10 w-56 origin-top-right rounded-md rounded-tr-none bg-[#222] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabindex='-1'
        >
          <div class='py-1 px-4' role='none'>
            <span
              href='#'
              class='text-gray-400 text-lg block px-4 py-2 hover:bg-white rounded-lg hover:text-gray-900'
              role='menuitem'
              tabindex='-1'
              id='menu-item-0'
            >
              {user?.displayName}
            </span>
            <button
                type='submit'
                class='text-gray-400 text-lg text-left  block w-full px-4 py-2 hover:bg-white rounded-lg hover:text-gray-900'
                role='menuitem'
                tabindex='-1'
                id='menu-item-3'
                onClick={() => handleSignout()}
              >
                Sign out
              </button>
          </div>
        </div>}
      </div>}
    </div>
  );
};

export default Header;
