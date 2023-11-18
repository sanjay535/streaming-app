import { useRef, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { validateData } from '../utils/validate';
import { auth } from '../utils/firebase-config';

const Login = () => {
  const [isLoggedInForm, setIsLoggedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleToggel = () => {
    setIsLoggedInForm(!isLoggedInForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    const validateResult = validateData(
      email.current.value,
      password.current.value
    );
    if (!validateResult) {
      // signin
      if (isLoggedInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage+'-'+errorCode)
          });
      } else {
        // signup
      }
    } else {
      setErrorMessage(validateResult);
    }
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      password.current.type = 'password';
    } else {
      password.current.type = 'text';
    }
  };

  return (
    <div className='absolute bg-white p-6 top-1/4 left-[40%] rounded-lg opacity-75'>
      <h1 className='text-3xl'>{isLoggedInForm ? 'Sign In' : 'Sign Up'}</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col'>
        {!isLoggedInForm && (
          <input
            ref={name}
            className='p-4 my-4 rounded-lg w-80 border border-[#00A8E1] outline-none'
            type='text'
            placeholder='Full name'
          />
        )}
        <input
          ref={email}
          className='p-4 my-4 rounded-lg w-80 border border-[#00A8E1] outline-none'
          type='text'
          placeholder='Email address'
        />
        <div className='relative'>
          <input
            ref={password}
            className='outline-none border border-[#00A8E1] p-4 my-4 rounded-lg w-80'
            type='password'
            placeholder='Password'
          />
          <span
            onClick={() => handlePasswordVisibility()}
            className={
              showPassword
                ? 'after:absolute after:top-8 after:left-72 after:content-visibility after:inline-block after:h-[100%] after:w-[100%]'
                : 'after:absolute after:top-8 after:left-72 after:content-visibility_off after:inline-block after:h-[100%] after:w-[100%]'
            }
          ></span>
        </div>

        <p className='text-red-600 text-lg font-bold'>{errorMessage}</p>
        <button className='p-4 my-6 bg-[#00A8E1] rounded-lg w-80 text-white text-2xl font-bold'>
          {isLoggedInForm ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p className='cursor-pointer' onClick={handleToggel}>
        {!isLoggedInForm
          ? 'Already registred? Sign In'
          : 'New to Prime Video? Signup Now'}
      </p>
    </div>
  );
};

export default Login;
