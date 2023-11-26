
import Login from './Login';
import Header from './shared/Header';

const Body = () => {
  return (
    <div className='w-screen h-screen'>
      <img
        className='w-screen h-screen fixed object-cover md:bg-cover'
        src='/assets/bg2.jpg'
        alt='background'
      />
      <Header />
      <div className='flex justify-center'>
       <Login />
      </div>
    </div>
  );
};

export default Body;
