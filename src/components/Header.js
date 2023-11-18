import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='absolute flex w-full bg-gradient-to-b from-slate-100'>
      <img className='h-32' src='/assets/logo_prime.svg' alt='logo' />
      <Link to={'/browse'}>Browse</Link>
    </div>
  );
};

export default Header;
